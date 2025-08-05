import NavBar from "@/component/NavBar"
import './index.scss'
import { useContext } from "react"
import { DeviceContext } from "@/deviceContext"
import ButtomBar from "@/component/ButtomBar"
import SlideShow from "./SlideShow"


const Home = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <div>
            <div><NavBar/></div>
            <div><SlideShow /></div>
            
            
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>
            <div>1234567890</div>


            
            
            
            
            <div><ButtomBar/></div>
        </div>

        
    );
}

export default Home