import Image from 'next/image'
import '../../styles/global.scss'
import MainNav from "../../components/mainNav/mainNav";
import Slider from "../../components/slider/slider";
import IntroSection from "../../components/introSection/introSection";
import FooterSection from "../../components/footerSection/footerSection";
import PartnerSection from "../../components/partnerSection/partnerSection";
import InfraSection from "../../components/infraSection/infraSection";
import SectorSection from "../../components/sectorSection/sectorSection";
import AboutSection from "../../components/aboutSection/aboutSection";


export default function Home() {
  return (
    <div>
        <MainNav/>
        <Slider/>
        <IntroSection/>
        <AboutSection/>
        <SectorSection/>
        <PartnerSection/>
        <InfraSection/>
        <FooterSection/>
    </div>
  )
}
