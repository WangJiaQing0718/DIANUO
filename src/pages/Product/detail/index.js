import ButtomBar from "@/component/ButtomBar";
import NavBar from "@/component/NavBar";
import './index.scss'
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)
    const ProductTypeName = ["", "电解质分析仪", "试剂", "耗材"]

    useLayoutEffect(() => {
        const { productId } = location.state || {};

        if (!productId) {
            navigate('/product');
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://nas.wjq718.fun:10025/product/${productId}`);
                setProductData(res.data);
                console.log("res:",res.data);
                
                localStorage.setItem('productData', JSON.stringify(res.data.data));
            } catch (error) {
                console.error('Error fetching ProductData:', error);
                // 存到本地缓存
                const cacheData = localStorage.getItem('productData');
                if (cacheData) {
                    setProductData(JSON.parse(cacheData));
                } else {
                    navigate('/product');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location.state, navigate])

    // 等待数据加载
    if (loading || !productData) {
        return <div className="loading">加载中...</div>;
    }

    return (
        <div>
            <NavBar />

            <div style={{ paddingTop: "100px" }}>顶部路由链</div>

            <div className="productDetail_Container">
                <div className="productDetail_Content">
                    <div className="productDetail_GridLayout">
                        <div className="productDetail_gridItem1">
                            <div ><img src={productData.url} alt={productData.name} /></div>
                            <div>
                                <span>❮</span>
                                {/* 后续修改为map */}
                                <span><img src={productData.url} alt={productData.name} /></span>
                                <span>❯</span>
                            </div>
                        </div>

                        <div className="productDetail_gridItem2">
                            <div>{productData.name}</div>
                            <div style={{ color: "#555555", fontSize: "15px", margin: "20px 0px" }}>公司现有电解质分析仪（DIANUO-80系列、DN-X系列）、电解质分析仪配套试剂、离子选择性电极三大类产品，以其良好的稳定性，广泛应用于各级医院、社区门诊、卫生院、实验室等。</div>
                            <div>
                                <span style={{ display: "inline-block", verticalAlign: "middle" }}><img src="http://nas.wjq718.fun:10001/imageFiles/lgwe5odmrup3js18.png" alt=""></img></span>
                                <span>邮箱</span>
                                <span style={{ fontSize: "20px", lineHeight: "40px", margin: "10px", fontWeight: "600" }}>dianuo01@163.com</span>
                            </div>

                            <div>
                                <span style={{ display: "inline-block", verticalAlign: "middle" }}><img src="http://nas.wjq718.fun:10001/imageFiles/baujtfndes8iz5ox.png" alt=""></img></span>
                                <span>联系方式</span>
                                <span style={{ fontSize: "20px", lineHeight: "40px", margin: "10px", fontWeight: "600" }}>025-58372377</span>
                            </div>

                            <div className="button_GridLayout">
                                <div href="#priceInfor">
                                    <span style={{ display: "inline-block", verticalAlign: "middle" }}><img src="http://nas.wjq718.fun:10001/imageFiles/tizljcdbegkvyw6m.png" alt=""></img></span>
                                    <span>产品询价</span>
                                </div>
                                <div href="#productInfor">
                                    <span style={{ display: "inline-block", verticalAlign: "middle" }}><img src="http://nas.wjq718.fun:10001/imageFiles/nh3qwdkmbli8t2s6.png" alt=""></img></span>
                                    <span>相关产品</span>
                                </div>
                            </div>

                            <div className="button_Text">
                                <span>如果您对我们的产品感兴趣的话，</span>
                                <span style={{ color: "#B22222", fontWeight: "700" }} onClick={() => navigate('/contact')}>请联系我们</span>
                            </div>

                            <div style={{ color: "#1978DC", lineHeight: "30px", margin: "20px 0px" }}>
                                产品分类
                            </div>

                            <div style={{ marginBottom: "10px"}}>
                                <span className="product_Type">
                                    {ProductTypeName[productData.product_type]}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ButtomBar />
        </div>
    )
}

export default ProductDetail