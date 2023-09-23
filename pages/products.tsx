import Image from 'next/image'
import '../styles/global.scss'
import MainNav from "../components/mainNav/mainNav";
import FooterSection from "../components/footerSection/footerSection";
import InnerHero from "../components/innerHero/innerHero";
import BlogSection from "../components/blogSection/blogSection";
import ProductList from "../components/productList/productList";
import { ApiService } from "../service/api.service";


export default function Home(props: any) {
  console.log('props=', props.mainnav[0].acf)
  return (
        <div>
            <MainNav mainnav = {props.mainnav[0].acf}/>
            <InnerHero innerhero = {props.innerhero[0].acf}/>
            <ProductList productlist = {props.productlist[0].acf}/>
            <BlogSection blogsection = {props.blogsection[0].acf}/>
            <FooterSection footersection = {props.footersection[0].acf}/>
        </div>   
    )
}

export async function getServerSideProps() {
  const baseUrl = new ApiService();

  const resmainNav = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/mainNav');
 const mainnav = await resmainNav.json();

   const resInnerHero = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/innerhero');
  const innerhero = await resInnerHero.json();



  const resProductList = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/productlist');
  const productlist = await resProductList.json();


   const resBlogSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/blogsection');
  const blogsection = await resBlogSection.json();


  const resFooterSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/FooterSection');
  const footersection = await resFooterSection.json();


 if (mainnav && mainnav.length > 0)  {
  return {props: {mainnav, innerhero, productlist, blogsection, footersection}}
 }
else{
  return {props: {}}

}
}