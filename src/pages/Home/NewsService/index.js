import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { getLatestNews } from '@/store/modules/latestNewsStore'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NewsService = () => {
    const { latestNews } = useSelector(state => state.latestNews);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLatestNews());
    }, [dispatch]);

    console.log("latestNews:", latestNews);

    const navigate = useNavigate()
    const linkToDetail = (idx, id) => {
        if (latestNews[idx].news_content.news_url === null) {
            navigate(`/news_detail/${id}`);
        } else {
            window.open(`${latestNews[idx].news_content.news_url.url}`, '_self');
        }
    }


    return (
        <div className='NewsService_Container'>
            <div className='NewsService_Content'>
                <div className='NewsService_title'>
                    <div className='NewsService_bgText'>NEWS</div>
                    <div className='NewsService_headText'>新闻资讯</div>
                    <hr></hr>
                </div>

                <div className='NewsService_GridLayout'>
                    {latestNews?.map((item, index) =>
                        <div className='NewsService_GridItem' key={index} onClick={() => linkToDetail(index, item.id)}>
                            <div><span id='tag'>行业动态</span></div>
                            <div id='create_time'>{item.create_time}</div>
                            <div id='news_title'>{item.news_title}</div>
                            <div id='default_text'>{item.news_content.default_text.text}</div>
                            <div className='pic_box'>
                                {item.news_pic ? 
                                    <img src={item.news_pic} alt=''></img>
                                    :
                                    <div id='default_pic'>DIANUO</div>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewsService 