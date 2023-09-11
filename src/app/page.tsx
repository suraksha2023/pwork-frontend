import Image from 'next/image'
import '../../styles/global.scss'
import MainNav from "../../components/mainNav/mainNav";
import Slider from "../../components/slider/slider";
import IntroSection from "../../components/introSection/introSection";


export default function Home() {
  return (
    <div>
        <MainNav/>
        <Slider/>
        <IntroSection/>
    </div>
  )
}
