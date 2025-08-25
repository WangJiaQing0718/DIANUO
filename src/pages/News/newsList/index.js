import { useContext, useLayoutEffect } from 'react';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from '@/store/modules/newsListStore';
import { setLastData, setNextData } from '@/store/modules/latestNewsStore';
import Pagination from '@/component/Pagination';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { DeviceContext } from '@/deviceContext';

const NewsList = () => {
    const { isMobile } = useContext(DeviceContext);
    const navigate = useNavigate();
    const {
        newsList,
        total_count,
        currentPage,
        pageSize
    } = useSelector(state => state.newsList)

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(getNewsList(currentPage))
    }, [dispatch, currentPage])
    // console.log("newsList:", newsList);

    // 处理页码变化
    const handlePageChange = (newPage) => {
        dispatch(getNewsList(newPage));
    };

    const linkToDetail = (idx, id) => {
        // console.log("idx:", idx);
        // console.log("id:", id);
        if (idx > 0) {
            // console.log("last:",newsList[idx-1]);
            dispatch(setLastData(newsList[idx - 1]));
        } else {
            dispatch(setLastData(null));
        }
        if (idx < newsList.length - 1) {
            dispatch(setNextData(newsList[idx + 1]));
        } else {
            dispatch(setNextData(null));
        }
        if (newsList[idx].news_content.news_url === null) {
            navigate(`/news_detail/${id}`);
        } else {
            window.open(`${newsList[idx].news_content.news_url.url}`, '_self');
        }
    }

    return (
        <div className='newsList_Container'>
            <div className='newsList_Content'>
                <div>
                    {
                        newsList?.map((item, index) => (
                            <div className='grid_Layout' onClick={() => linkToDetail(index, item.id)}>
                                {isMobile ?
                                    <>
                                        <div id='item123'>
                                            <div id='div1'>{item.news_title}</div>
                                            <div id='div2'>{item.news_content?.default_text.text}</div>
                                            <div id='div3'>{item.create_time}</div>
                                        </div>

                                        <div id='item4'>
                                            <img src={item.news_pic}></img>
                                        </div>
                                    </>
                                :
                                    <>
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
                                    </>
                                }
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