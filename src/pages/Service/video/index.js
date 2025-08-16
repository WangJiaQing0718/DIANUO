import { useLayoutEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'
import Pagination from '@/component/Pagination';

const Video = () => {

    // 获取图片数据
    const [pageIndex, setPageIndex] = useState(0);
    const [totalNum, setTotalNum] = useState(0);
    const [videoList, setVideoList] = useState([])

    useLayoutEffect(() => {
        const fetchURL = async () => {
            try {
                const res = await axios.get(
                    `http://nas.wjq718.fun:10025/service-video?skip=${pageIndex * 6}&limit=6`
                );

                if (res.data?.data && Array.isArray(res.data.data)) {
                    setVideoList(res.data.data);
                    // console.log("res:",res.data.data);

                    setTotalNum(res.data.total_count);

                    // 缓存数据
                    localStorage.setItem('videoList', JSON.stringify(res.data.data));
                    localStorage.setItem('totalNum', JSON.stringify(res.data.total_count));
                } else {
                    throw new Error('Invalid data format from API');
                }
            } catch (error) {
                console.error('Error fetching URL:', error);

                // 尝试从缓存加载
                const cachedVideoList = localStorage.getItem('videoList');
                const cachedTotalNum = localStorage.getItem('totalNum');

                if (cachedVideoList) {
                    setVideoList(JSON.parse(cachedVideoList));
                }
                if (cachedTotalNum) {
                    setTotalNum(JSON.parse(cachedTotalNum));
                }
            }
        };

        fetchURL();
    }, [pageIndex]);

    return (
        <div className='video-Container'>
            <div className='video-Content'>
                <div className='video-Display'>
                    {
                        videoList.map(item =>
                            <div className='video-Box'>
                                <div>
                                    <video controls>
                                        <source src={item.url}></source>
                                    </video>
                                    <div className='videoText'>{item.name}</div>
                                </div>
                            </div>
                        )
                    }
                </div>


                <div className="pagination-wrapper">
                    <Pagination
                        pageIndex={pageIndex}
                        totalPage={Math.ceil(totalNum / 6)}
                        onPageChange={(newPage) => setPageIndex(newPage)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Video;