import { useEffect } from 'react';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsType } from '@/store/modules/newsTypeStore';
import { setLastData, setNextData } from '@/store/modules/latestNewsStore';
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

    const linkToDetail = (idx, id) => {
        // console.log("idx:", idx);
        // console.log("id:", id);
        if (idx > 0) {
            // console.log("last:",newsType[idx-1]);
            dispatch(setLastData(newsType[idx - 1]));
        }else{
            dispatch(setLastData(null));
        }
        if (idx < newsType.length - 1) {
            // console.log("next:",newsType[idx+1]);
            dispatch(setNextData(newsType[idx + 1]));
        }else{
            dispatch(setNextData(null));
        }
        if (newsType[idx].news_content.news_url === null) {
            navigate(`/news_detail/${id}`);
        } else {
            window.open(`${newsType[idx].news_content.news_url.url}`, '_self');
        }
    }

    return (
        <div className='newsType_Container'>
            <div className='newsType_Content'>
                <div>
                    {
                        newsType?.map((item, index) => (
                            <div className='grid_Layout' onClick={() => linkToDetail(index, item.id )}>
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