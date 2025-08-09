import ButtomBar from "@/component/ButtomBar"
import HeadSection from "@/component/HeadSection"
import NavBar from "@/component/NavBar"
import { Outlet } from "react-router-dom"

const News = () => {
    return (
        <div>
            <div><NavBar /></div>
            <div>
                <HeadSection
                    headTitle="新闻资讯"
                    enHeadTitle="NEWS"
                    imageUrl="http://nas.wjq718.fun:10001/imageFiles/hzwy1df3qvrp2lit.jpg"
                />
            </div>

            <div><Outlet /></div>
            <div><ButtomBar /></div>
        </div>
    )
}

export default News