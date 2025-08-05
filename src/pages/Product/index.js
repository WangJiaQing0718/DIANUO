import HeadSection from "@/component/HeadSection"
import NavBar from "@/component/NavBar"

const Product = () => {
    return (
        <div>
            <div><NavBar /></div>
            <HeadSection
                headTitle="产品展示"
                enHeadTitle="PRODUCTS"
                imageUrl="http://nas.wjq718.fun:10001/imageFiles/tex629b30u1caqw7.jpg"
            />
        </div>
    )
}

export default Product