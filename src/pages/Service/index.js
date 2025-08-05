import NavBar from "@/component/NavBar"
import './index.scss'
import HeadSection from "@/component/HeadSection"

const Service = () => {

    return (
        <div>
            <div><NavBar /></div>
            <div>
                <HeadSection
                    headTitle="服务支持"
                    enHeadTitle="SUPPORT"
                    imageUrl="http://nas.wjq718.fun:10001/imageFiles/gydvhmkcx302q1oj.jpg"
                />
            </div>
        </div>
    )
}

export default Service