import { useEffect, useLayoutEffect, useState } from 'react'
import './index.scss'
import Pagination from '@/component/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceVideoList } from '@/store/modules/serviceVideoStore';

const Video = () => {

    const dispatch = useDispatch();
    const {
        serviceVideoList,
        total_count,
        currentPage,
        pageSize
    } = useSelector(state => state.serviceVideo);

    // 初始加载数据
    useEffect(() => {
        dispatch(getServiceVideoList(currentPage));
    }, [dispatch, currentPage]);

    // 处理页码变化
    const handlePageChange = (newPage) => {
        dispatch(getServiceVideoList(newPage));
    };

    return (
        <div className='video-Container'>
            <div className='video-Content'>
                <div className='video-Display'>
                    {
                        serviceVideoList.map(item =>
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
                        pageIndex={currentPage}
                        totalPage={Math.ceil(total_count / pageSize)}
                        onPageChange={(newPage) => handlePageChange(newPage)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Video;