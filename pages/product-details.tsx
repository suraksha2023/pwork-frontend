import '../styles/global.scss'
import MainNav from "../components/mainNav/mainNav";
import FooterSection from "../components/footerSection/footerSection";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import ProductTwoSection from "../components/productTwoSection/productTwoSection";
import ProductSingleSection from "../components/productSingleSection/productSingleSection";
import ProductTwoAlternateSection from "../components/productTwoAlternateSection/productTwoAlternateSection";
import RelatedProducts from "../components/relatedProducts/relatedProducts";
import { ApiService } from "../service/api.service";


export default function Home(props: any) {
    console.log('props=', props.mainnav[0].acf)
    return (
        <div>
           <MainNav mainnav = {props.mainnav[0].acf}/>
            <Breadcrumb breadcrumb = {props.breadcrumbs[0].acf}/>
            <ProductTwoSection producttwosection = {props.producttwosection[0].acf}/>
            <ProductSingleSection productsinglesection = {props.productsinglesection[0].acf}/>
            <ProductTwoAlternateSection producttwoalternatesection = {props.producttwoalternatesection[0].acf}/>
            <RelatedProducts relatedproducts = {props.relatedproducts[0].acf}/>
            <FooterSection footersection = {props.footersection[0].acf}/>
        </div>
    )
}

export async function getServerSideProps() {
    const baseUrl = new ApiService();

    const resmainNav = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/mainNav');    
    const mainnav = await resmainNav.json();
 
    const resbreadcrumb = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/breadcrumbs');
    const breadcrumbs = await resbreadcrumb.json();

    const resproducttwosection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/producttwosection');
    const producttwosection = await resproducttwosection.json();

    const resproductsinglesection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/productsinglesection');
     const productsinglesection = await resproductsinglesection.json();

     const resproducttwoalternatesection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/producttwoalternatesection');
     const producttwoalternatesection = await resproducttwoalternatesection.json();

    const resrelatedproducts = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/relatedproduct');
    const relatedproducts = await resrelatedproducts.json();

    const resFooterSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/FooterSection');
    const footersection = await resFooterSection.json();
  
  
   if (mainnav && mainnav.length > 0)  {
    return {props: {mainnav, breadcrumbs, producttwosection, productsinglesection, producttwoalternatesection, relatedproducts, footersection}}
   }
  else{
    return {props: {}}
  
  }
  }