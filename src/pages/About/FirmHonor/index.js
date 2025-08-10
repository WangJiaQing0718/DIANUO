import { useId, useLayoutEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import Pagination from '@/component/Pagination';
import { useNavigate } from 'react-router-dom';

const FirmHoner = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [totalNum, setTotalNum] = useState(0);
    const [honerPicList, setHonerPicList] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        const fetchURL = async () => {
            try {
                setLoading(true);

                const res = await axios.get(
                    `http://nas.wjq718.fun:10025/firm-honer-pic?skip=${pageIndex * 8}&limit=8`
                );

                if (res.data?.data && Array.isArray(res.data.data)) {
                    setHonerPicList(res.data.data);
                    setTotalNum(res.data.total_count);

                    // 缓存数据
                    localStorage.setItem('honerPicList', JSON.stringify(res.data.data));
                    localStorage.setItem('totalNum', JSON.stringify(res.data.total_count));
                } else {
                    throw new Error('Invalid data format from API');
                }
            } catch (error) {
                console.error('Error fetching URL:', error);

                // 尝试从缓存加载
                const cachedPicList = localStorage.getItem('honerPicList');
                const cachedTotalNum = localStorage.getItem('totalNum');

                if (cachedPicList) {
                    setHonerPicList(JSON.parse(cachedPicList));
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
        <div className='firmHoner_Container'>
            <div className='firmHoner_Content'>
                <div className='firmHoner_head'>
                    资历荣誉
                </div>

                {loading ? (
                    <div className="loading">加载中...</div>
                ) : (
                    <div>
                        <div className='honerPic'>
                            {honerPicList.map((item, index) => (
                                <div className='picBorder' key={index}>
                                    <div style={{ overflow: "hidden" }}>
                                        <img src={item.purl} alt={item.pname} onClick={() => navigate(`/about/firmhonor/${pageIndex * 8 + index}`, {
                                            state: { itemData: item }
                                        })} />
                                    </div>
                                    <div style={{ border: "none" }}>{item.pname}</div>
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


    );
};

export default FirmHoner;