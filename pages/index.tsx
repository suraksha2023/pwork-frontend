import Image from 'next/image'
import '../styles/global.scss'
import MainNav from "../components/mainNav/mainNav";
import Slider from "../components/slider/slider";
import IntroSection from "../components/introSection/introSection";
import FooterSection from "../components/footerSection/footerSection";
import PartnerSection from "../components/partnerSection/partnerSection";
import InfraSection from "../components/infraSection/infraSection";
import SectorSection from "../components/sectorSection/sectorSection";
import AboutSection from "../components/aboutSection/aboutSection";
import { ApiService } from "../service/api.service";


export default function Home(props: any) {
  console.log('props=', props.mainnav[0].acf)
  return (
    <div>
        <MainNav mainnav = {props.mainnav[0].acf}/>
        <Slider slider = {props.slider[0].acf}/>
        <IntroSection introsection = {props.introsection[0].acf}/>
        <AboutSection aboutsection = {props.aboutsection[0].acf}/>
        <SectorSection sectorsection = {props.sectorsection[0].acf}/>
        <PartnerSection partnersection = {props.partnersection[0].acf}/>
        <InfraSection infrasection = {props.infrasection[0].acf}/>
        <FooterSection footersection = {props.footersection[0].acf}/>
    </div>
  )
}

  export async function getServerSideProps() {
  const baseUrl = new ApiService();

  const resmainNav = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/mainNav');
 const mainnav = await resmainNav.json();

   const resSlider = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/slider');
 const slider = await resSlider.json();



 const resIntroSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/IntroSection');
 const introsection = await resIntroSection.json();


  const resAboutSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/AboutSection');
 const aboutsection = await resAboutSection.json();


  const resSectorSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/SectorSection');
  const sectorsection = await resSectorSection.json();


  const resPartnerSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/PartnerSection');
  const partnersection = await resPartnerSection.json();


  const resInfraSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/InfraSection');
  const infrasection = await resInfraSection.json();


 const resFooterSection = await fetch(baseUrl.getBaseUrl() + 'wp-json/acf/v3/FooterSection');
 const footersection = await resFooterSection.json();


 if (mainnav && mainnav.length > 0)  {
  return {props: {mainnav, slider, introsection, aboutsection, sectorsection, partnersection, infrasection, footersection}}
 }
else{
  return {props: {}}

}
}
