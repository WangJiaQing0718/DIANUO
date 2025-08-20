import { useEffect } from 'react';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '@/store/modules/newsListStore';
import Pagination from '@/component/Pagination';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {
    const navigate = useNavigate();
    const {
        newsList,
        total_count,
        currentPage,
        pageSize
    } = useSelector(state => state.newsList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsList(currentPage))
    }, [dispatch, currentPage])
    console.log("newsList:", newsList);

    // 处理页码变化
    const handlePageChange = (newPage) => {
        dispatch(getNewsList(newPage));
    };

    return (
        <div className='newsList_Container'>
            <div className='newsList_Content'>
                <div>
                    {
                        newsList?.map((item, index) => (
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

export default NewsList;