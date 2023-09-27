import Image from 'next/image'
import '../styles/global.scss'
import MainNav from "../components/mainNav/mainNav";
import FooterSection from "../components/footerSection/footerSection";
import InnerHero from "../components/innerHero/innerHero";
import BlogSection from "../components/blogSection/blogSection";
import ProductList from "../components/productList/productList";
import ProductContent from "../components/productContent/productContent";
import Filter from "../components/filter/filter";
import { ApiService } from "../service/api.service";


export default function Home(props: any) {
  console.log('props=', props.productcontent)
  return (
        <div>
            <MainNav mainnav = {props.mainnav[0].acf}/>
            <InnerHero innerhero = {props.innerhero[0].acf}/>
            <ProductList productlist = {props.productcontent[0].acf} filter = {props.filter[0].acf}/> 
            {/* <ProductContent productcontent = {props.productcontent[0].acf}/> */}
            {/* <Filter filter = {props.filter[0].acf}/> */}
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

  const resFilter = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/filter');
  const filter = await resFilter.json();


  const resProductList = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/productlist');
  const productlist = await resProductList.json();

   const resproductContent = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/productcontent');
   const productcontent = await resproductContent.json();

   const resBlogSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/blogsection');
  const blogsection = await resBlogSection.json();


  const resFooterSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/FooterSection');
  const footersection = await resFooterSection.json();


 if (mainnav && mainnav.length > 0)  {
  return {props: {mainnav, innerhero,filter, productlist, productcontent,  blogsection, footersection}}
 }
else{
  return {props: {}}

}
}