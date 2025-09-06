import NavBar from "@/component/NavBar"
import './index.scss'
import { useContext } from "react"
import { DeviceContext } from "@/deviceContext"
import ButtomBar from "@/component/ButtomBar"
import SlideShow from "./SlideShow"
import FirmIntro from "./FirmIntro"
import ServiceSupport from "./ServiceSupport"
import NewsService from "./NewsService"
import CoreBenefits from "./CoreBenefits"
import ProductCenter from "./ProductCenter"


const Home = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <div>
            <div><NavBar/></div>
            <div><SlideShow /></div>
            <div><FirmIntro /></div>
            <div><ProductCenter /></div>
            <div><CoreBenefits /></div>
            <div><ServiceSupport /></div>
            <div><NewsService /></div>
            <div><ButtomBar/></div>
        </div>
    );
}

export default Home;