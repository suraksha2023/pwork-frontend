import '../styles/global.scss'
import MainNav from "../components/mainNav/mainNav";
import FooterSection from "../components/footerSection/footerSection";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import ProductTwoSection from "../components/productTwoSection/productTwoSection";
import ProductSingleSection from "../components/productSingleSection/productSingleSection";
import ProductTwoAlternateSection from "../components/productTwoAlternateSection/productTwoAlternateSection";
import RelatedProducts from "../components/relatedProducts/relatedProducts";
import { ApiService } from "../service/api.service";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


export default function Home(props: any) {
    console.log('props=', props)
    return (
        <div>
           <MainNav mainnav = {props.mainnav[0].acf}/>
            <Breadcrumb breadcrumb = {props.productdetails[0].acf.breadcrumb}/>
           <ProductTwoSection producttwosection = {props.productdetails[0].acf.producttwosection}/>
            <ProductSingleSection productsinglesection = {props.productdetails[0].acf.productsinglesection}/>
            <ProductTwoAlternateSection producttwoalternatesection = {props.productdetails[0].acf.producttwoalternatesection}/>
            <RelatedProducts relatedproducts = {props.productdetails[0].acf.relatedproducts}/>
            <FooterSection footersection = {props.footersection[0].acf}/>
        </div>
    )
}

export async function getServerSideProps() {
    const baseUrl = new ApiService();

    const resmainNav = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/mainNav');    
    const mainnav = await resmainNav.json();

    const resProductDetails = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/product-details');
    const productdetails = await resProductDetails.json();
 
    // const pDetails = productdetails.acf.product-pDetails;
    // const resbreadcrumb = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/breadcrumbs');
    // const breadcrumbs = await resbreadcrumb.json();

    // const resproducttwosection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/producttwosection');
    // const producttwosection = await resproducttwosection.json();

    // const resproductsinglesection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/productsinglesection');
    //  const productsinglesection = await resproductsinglesection.json();

    //  const resproducttwoalternatesection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/producttwoalternatesection');
    //  const producttwoalternatesection = await resproducttwoalternatesection.json();

    // const resrelatedproducts = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/relatedproduct');
    // const relatedproducts = await resrelatedproducts.json();

    const resFooterSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/FooterSection');
    const footersection = await resFooterSection.json();
  
  
   if (mainnav && mainnav.length > 0)  {
    return {props: {mainnav, productdetails, footersection}}
   }
  else{
    return {props: {}}
  
  }
  }