import ButtomBar from "@/component/ButtomBar";
import NavBar from "@/component/NavBar";
import './index.scss'
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)
    const ProductTypeName = ["", "电解质分析仪", "试剂", "耗材"]
    const [detailTable, setDetailTable] = useState(false)
    const [detailData, setDetailData] = useState(null)
    const sectionRefs = {
        Price: useRef(null),
        More: useRef(null)
    }

    const [useremail, setUserEmail] = useState('')
    const [userphone, setUserPhone] = useState('')
    const [userquestion, setUserQuestion] = useState('')


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
                // console.log("res:", res.data);

                if (res.data.models !== null) {
                    setDetailTable(true);
                }

                if (res.data.features !== null) {
                    const dData = Object.entries(res.data.features);
                    // console.log(dData);
                    setDetailData(dData);
                }
                // console.log("detailData:", detailData);

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
    }, [location, navigate])

    // 等待数据加载
    if (loading || !productData) {
        return <div className="loading">加载中...</div>;
    }

    // 存数据到后端数据库
    const postPrice = async () => {
        if (userphone.length !== 11) {
            alert('请检查号码');
            return;
        }
        if (userquestion.length > 255) {
            alert('问题内容最多255字符');
            return;
        }
        // console.log("Submit:", productData.name, useremail, userphone, userquestion);
        try {
            const response = await fetch('http://nas.wjq718.fun:10025/store-productprice-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: [productData.name, useremail, userphone, userquestion]
                }),
            });
            const result = await response.json();

            if (response.ok) {
                alert('提交成功！');
                setUserEmail('');
                setUserPhone('');
                setUserQuestion('');

            } else {
                console.error('提交失败:', result.error);
                alert("提交失败");
            }
        } catch (error) {
            console.error('提交过程中出错:', error);
            alert('提交过程中出错，请稍后再试');
        }
    };

    // console.log("test:", Object.keys(productData.features)[0]);
    // console.log("test:", Object.keys(productData.features).length);
    // console.log("test:", productData.features.产品特点);
    // console.log("test:", Object.entries(productData.features));


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
                                <div onClick={() => sectionRefs.Price.current?.scrollIntoView({ behavior: 'smooth' })}>
                                    <span style={{ display: "inline-block", verticalAlign: "middle" }}><img src="http://nas.wjq718.fun:10001/imageFiles/tizljcdbegkvyw6m.png" alt=""></img></span>
                                    <span>产品询价</span>
                                </div>
                                <div onClick={() => sectionRefs.More.current?.scrollIntoView({ behavior: 'smooth' })}>
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

                            <div style={{ marginBottom: "10px" }}>
                                <span className="product_Type">
                                    {ProductTypeName[productData.product_type]}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="productDetail_Detail">
                        <div className="productDetail_TitleStyle">
                            <span>产品详情</span>
                        </div>

                        {/* 型号 */}
                        {
                            detailTable &&
                            <div className="productDetail_Table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>规格型号</th>
                                            <th>测量项目</th>
                                            <th>计算参数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productData.models.map(item => (
                                            <tr>
                                                <td>{item.model}</td>
                                                <td>{item.measurements}</td>
                                                <td>{item.additional_parameters}</td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }

                        {/* 信息 */}
                        {
                            (detailData.length === 1) ?
                                <div>
                                    <div className="detailData_item1">{detailData[0]?.[0]}： </div>
                                    {detailData[0]?.[1]?.map(item => (
                                        <div className="detailData_item2">{item}</div>
                                    ))}
                                </div> :
                                <div>
                                    {detailData.map(item => (
                                        <div>
                                            <span className="detailData_item1">{item?.[0]}： </span>
                                            <span className="detailData_item2">{item?.[1]}</span>
                                        </div>
                                    )
                                    )}
                                </div>
                        }

                        {/* 关键词 */}
                        <div className="productDetail_Keys">
                            <span style={{ color: "#888888", fontSize: "14px", fontWeight: "700", lineHeight: "25px" }}>关键词: </span>
                            <span>
                                <div style={{ color: "#606266", fontSize: "14px", lineHeight: "25px" }}>{ProductTypeName[productData.product_type]}</div>
                                <div style={{ color: "#959595", fontSize: "14px", lineHeight: "25px" }}>{productData.name}</div>
                            </span>


                        </div>
                    </div>

                    <div ref={sectionRefs.Price} className="productDetail_Price">
                        <div className="productDetail_TitleStyle">
                            <span>获取报价</span>
                        </div>
                        <div>注意：请留下您的正确联系方式，我们的专业人员会尽快与您联系！</div>
                        <div style={{ fontSize: "14px", lineHeight: "50px", border: "1px solid #ced4da", margin: "20px 0px", padding: "0px 10px" }}>产品名称: {productData.name}</div>
                        <div className="productDetail_InputGridLayout">
                            <div>
                                <input value={useremail} onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="邮箱:"></input>
                            </div>
                            <div>
                                <input value={userphone} onChange={(e) => setUserPhone(e.target.value)} type="tel" required placeholder="联系电话:*"></input>
                            </div>
                        </div>
                        <div className="productDetail_Input">
                            <input value={userquestion} onChange={(e) => setUserQuestion(e.target.value)} type="text" required placeholder="留言内容:*"></input>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button onClick={postPrice} id="InputButton">提 交</button>
                        </div>
                    </div>

                    <div ref={sectionRefs.More} className="productDetail_More">
                        <div className="productDetail_TitleStyle">
                            <span>更多产品</span>
                        </div>
                        <div className="productDetail_MoreGridLayout">
                            <div id="more_product_item" onClick={() => navigate("/product_detail/4", {
                                state: { productId: "4" }
                            })}>
                                <img src="http://nas.wjq718.fun:10001/imageFiles/a5go2b6ewt934rc1.png" alt=""></img>
                                <div id="more_product_title">试剂包2</div>
                            </div>

                            <div id="more_product_item">
                                <img src="http://nas.wjq718.fun:10001/imageFiles/5zg8sp2ihbm6ke0q.png" alt=""></img>
                                <div id="more_product_title">漂移校正液</div>
                            </div>

                            <div id="more_product_item">
                                <img src="http://nas.wjq718.fun:10001/imageFiles/5n46tg1ojkyrc3h2.png" alt=""></img>
                                <div id="more_product_title">TCO2稀释液</div>
                            </div>

                            <div id="more_product_item">
                                <img src="http://nas.wjq718.fun:10001/imageFiles/rmsw475bt2nkeo80.png" alt=""></img>
                                <div id="more_product_title">DIANUO-80系列</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ButtomBar />
        </div>
    )
}

export default ProductDetail;