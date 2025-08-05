import NavBar from "@/component/NavBar"
import Buttom from "@/component/ButtomBar"
import './index.scss'
import HeadSection from "@/component/HeadSection"


const Contact = () => {
    return (
        <div>
            <div><NavBar /></div>
            <div>
                <HeadSection
                    headTitle="联系我们"
                    enHeadTitle="CONTACT US"
                    imageUrl="http://nas.wjq718.fun:10001/imageFiles/i8stph40z6l1b3a9.jpg"
                />
            </div>
            <div><Buttom /></div>
        </div>
    )
}

export default Contact