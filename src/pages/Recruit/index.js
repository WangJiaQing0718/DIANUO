import ButtomBar from "@/component/ButtomBar"
import HeadSection from "@/component/HeadSection"
import NavBar from "@/component/NavBar"
import { Outlet } from "react-router-dom"

const Recruit = () => {
    return (
        <div>
            <div><NavBar /></div>
             <div>
                <HeadSection
                    headTitle="人才招聘"
                    enHeadTitle="HR"
                    imageUrl="http://nas.wjq718.fun:10001/imageFiles/opd7nm5qik4j8vfw.jpg"
                />
            </div>

            <div><Outlet /></div>
            <div><ButtomBar /></div>
        </div>
    )
}

export default Recruit