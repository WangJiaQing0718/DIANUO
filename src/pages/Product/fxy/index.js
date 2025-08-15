import { useLayoutEffect, useState } from "react"
import axios from "axios"
import Pagination from "@/component/Pagination"
import { useNavigate } from "react-router-dom"

const FXY = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [totalNum, setTotalNum] = useState(0);
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        const fetchURL = async () => {
            try {
                setLoading(true);

                const res = await axios.get(
                    "http://nas.wjq718.fun:10025/product-type/1"
                );

                if (res.data?.data && Array.isArray(res.data.data)) {
                    setProductList(res.data.data);
                    // console.log("res:",res.data.data);
                    
                    setTotalNum(res.data.total_count);

                    // 缓存数据
                    localStorage.setItem('productList', JSON.stringify(res.data.data));
                    localStorage.setItem('totalNum', JSON.stringify(res.data.total_count));
                } else {
                    throw new Error('Invalid data format from API');
                }
            } catch (error) {
                console.error('Error fetching URL:', error);

                // 尝试从缓存加载
                const cachedPicList = localStorage.getItem('productList');
                const cachedTotalNum = localStorage.getItem('totalNum');

                if (cachedPicList) {
                    setProductList(JSON.parse(cachedPicList));
                }
                if (cachedTotalNum) {
                    setTotalNum(JSON.parse(cachedTotalNum));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchURL();
    }, [pageIndex]);

    return (
        <div className="productList_Container">
            <div className="productList_Content">
                {loading ? (
                    <div className="loading">加载中...</div>
                ) : (
                    <div>
                        <div className='productList'>
                            {productList.map((item, index) => (
                                <div className='productList_Border' key={index}>
                                    <div style={{ overflow: "hidden" }}>
                                        <img src={item.url} alt={item.name} onClick={() => navigate(`/product_detail/${pageIndex * 8 + index}`, {
                                            state: { productId: item.id }
                                        })} />
                                    </div>
                                    <div style={{ border: "none" }}>{item.name}</div>
                                    <div>查看详情 +</div>
                                </div>
                            ))}
                        </div>

                        <div className="pagination-wrapper">
                            <Pagination
                                pageIndex={pageIndex}
                                totalPage={Math.ceil(totalNum / 8)}
                                onPageChange={(newPage) => setPageIndex(newPage)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default FXY;