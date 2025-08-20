import { useEffect } from 'react';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsType } from '@/store/modules/newsTypeStore';
import Pagination from '@/component/Pagination';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const MediaNews = () => {
    const navigate = useNavigate();
    const {
        newsType,
        total_count,
        currentPage,
        pageSize
    } = useSelector(state => state.newsType)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsType(3, currentPage))
    }, [dispatch, currentPage])
    console.log("newsType:", newsType);

    // 处理页码变化
    const handlePageChange = (newPage) => {
        dispatch(getNewsType(3, newPage));
    };

    return (
        <div className='newsType_Container'>
            <div className='newsType_Content'>
                <div>
                    {
                        newsType?.map((item, index) => (
                            <div className='grid_Layout'>
                                <div id='item1'>
                                    <div>
                                        {dayjs(item.create_time).format("DD")}
                                    </div>
                                    <div>
                                        {dayjs(item.create_time).format("YYYY-MM")}
                                    </div>
                                </div>

                                <div id='item2'>
                                    <hr></hr>
                                    <div></div>
                                </div>

                                <div id='item3'>
                                    <div>{item.news_title}</div>
                                    <div>{item.news_content?.default_text.text}</div>
                                </div>

                                <div id='item4'>
                                    <img src={item.news_pic}></img>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div>
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

export default MediaNews;