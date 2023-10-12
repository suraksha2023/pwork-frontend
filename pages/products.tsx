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
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


export default function Home(props: any) {
  console.log('props=', props)
  return (
        <div>
            <MainNav mainnav = {props.mainnav[0].acf}/>
            <InnerHero innerhero = {props.product[0].acf.innerhero}/>   
            <ProductList productlist = {props.product[0].acf.productcontents} filter = {props.product[0].acf.filter}/> 
            {/* <ProductContent productcontent = {props.productcontent[0].acf}/> */}
            {/* <Filter filter = {props.filter[0].acf}/> */}
            <BlogSection blogsection = {props.product[0].acf.blogsection}/>
            <FooterSection footersection = {props.footersection[0].acf}/>
        </div>   
    )
}



export async function getServerSideProps() {
  const baseUrl = new ApiService();

  const resmainNav = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/mainNav');
 const mainnav = await resmainNav.json();

 const resProduct = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/Product');
 const product = await resProduct.json();

  //  const resInnerHero = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/innerhero');
  // const innerhero = await resInnerHero.json();

  // const resFilter = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/filter');
  // const filter = await resFilter.json();


  // const resProductList = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/productlist');
  // const productlist = await resProductList.json();

  //  const resproductContent = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/productcontent');
  //  const productcontent = await resproductContent.json();

  //  const resBlogSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/blogsection');
  // const blogsection = await resBlogSection.json();


  const resFooterSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/FooterSection');
  const footersection = await resFooterSection.json();


 if (mainnav && mainnav.length > 0)  {
  return {props: {mainnav, product, footersection}}
 }
else{
  return {props: {}}

}
}