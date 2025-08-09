import NavBar from "@/component/NavBar";
import './index.scss';
import ButtomBar from "@/component/ButtomBar";
import HeadSection from "@/component/HeadSection";
import { Outlet } from "react-router-dom";


const About = () => {
    return (
        <div>
            <div><NavBar /></div>
            <div><HeadSection
                headTitle="关于我们"
                enHeadTitle="ABOUT US"
                imageUrl="http://nas.wjq718.fun:10001/imageFiles/7wa8ec25041ol93k.jpg"
            /></div>

            <div><Outlet /></div>
            <div><ButtomBar /></div>
        </div>
    )
}

export default About;