import NavBar from "@/component/NavBar"
import Buttom from "@/component/ButtomBar"
import SideBar from "@/component/SideBar"
import './index.scss'
import { useContext } from "react"
import { DeviceContext } from "@/deviceContext"
import ButtomBar from "@/component/ButtomBar"
import Consultancy from "@/component/Consultancy"


const Home = () => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <div>
            <div><NavBar/></div>
            {isMobile ? (
                <div>移动端视图</div>
            ) : (
                <div>网页端视图</div>
            )}
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


            
            
            <div><SideBar /></div>
            <div><Consultancy /></div>
            <div><ButtomBar/></div>
        </div>

        
    );
}

export default Home