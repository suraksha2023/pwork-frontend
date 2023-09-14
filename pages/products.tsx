import '../styles/global.scss'
import MainNav from "../components/mainNav/mainNav";
import FooterSection from "../components/footerSection/footerSection";
import InnerHero from "../components/innerHero/innerHero";
import BlogSection from "../components/blogSection/blogSection";
import ProductList from "../components/productList/productList";

export default function Products() {
    return (
        <div>
            <MainNav/>
            <InnerHero/>
            <ProductList/>
            <BlogSection/>

            <FooterSection/>
        </div>
    )
}
