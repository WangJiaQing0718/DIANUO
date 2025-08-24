import ButtomBar from "@/component/ButtomBar";
import NavBar from "@/component/NavBar";
import HeadSection from "@/component/HeadSection"
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import { getNewsList } from '@/store/modules/newsListStore';
import { setLatestNews } from '@/store/modules/latestNewsStore';

import { getNewsDetail } from '@/store/modules/newsDetailStore';

const NewsDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { newsDetail } = useSelector(state => state.newsDetail);
    const { latestNews, lastData, nextData } = useSelector(state => state.latestNews);

    useEffect(() => {
        console.log('上一项数据:', lastData);
        console.log('下一项数据:', nextData);
    }, [lastData, nextData]);

    const {
        newsList,
        currentPage
    } = useSelector(state => state.newsList)

    useLayoutEffect(() => {
        dispatch(getNewsList(currentPage));

        if (id) {
            dispatch(getNewsDetail(id));
        }
    }, [dispatch, currentPage, id]);

    useEffect(() => {
        if (newsList && Array.isArray(newsList)) {
            const latestNews = newsList.slice(0, 3);
            dispatch(setLatestNews(latestNews));
        }
    }, [newsList, dispatch]);

    // console.log("newsList:", newsList);

    if (!newsDetail) {
        return <div>数据加载中……</div>;
    }
    // console.log("newsDetail:", newsDetail);

    const linkToDetail = (idx, id) => {
        if (latestNews[idx].news_content.news_url === null) {
            navigate(`/news_detail/${id}`);
        } else {
            window.open(`${latestNews[idx].news_content.news_url.url}`, '_self');
        }
    }

    return (
        <div>
            <div><NavBar /></div>
            <div>
                <HeadSection
                    headTitle="新闻资讯"
                    enHeadTitle="NEWS"
                    imageUrl="http://nas.wjq718.fun:10001/imageFiles/hzwy1df3qvrp2lit.jpg"
                />
            </div>

            <div className="newsDetail_Container">
                <div className="newsDetail_Content">
                    <div className="newsDetail_GridLayout">
                        <div id="newsDetail_gridItem1">
                            <div id="title">{newsDetail.news_title}</div>
                            <hr></hr>
                            <div id="time">发布时间： {newsDetail.create_time}</div>
                            <div id="shareIcon">
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/i31e2l70zwnc84to.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/jzare6yo789psx1t.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/d08f7czn16r4jxku.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/594z7x1jwpmh82is.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/posl8b2vte5mwjhc.png" alt="" /></span>
                            </div>
                            <hr></hr>

                            <div id="defaultText">{newsDetail.news_content.default_text.text}</div>

                            {(newsDetail.news_type === 1 || newsDetail.news_type === 2) &&
                                <>
                                    {newsDetail.news_content.news_content.map((item, index) => (
                                        <div id="content12">{item.content}</div>
                                    ))}

                                    {newsDetail.news_content.subscript !== null &&
                                        newsDetail.news_content.subscript.map((item, index) => (
                                            <div id="subscript">{item.content}</div>
                                        ))
                                    }
                                    <br />
                                </>
                            }

                            {newsDetail.news_type === 3 && <div id="content3">
                                <div>{newsDetail.news_content.news_content[0].content}</div>
                                <div>{newsDetail.news_content.news_content[1].content}</div>
                                <br />
                                <div>{newsDetail.news_content.news_content[2].content}</div>
                                <div>{newsDetail.news_content.news_content[3].content}</div>
                                <br /><br />
                                <div>{newsDetail.news_content.news_content[4].content}</div>
                            </div>}

                            {newsDetail.related_links !== null &&
                                newsDetail.related_links.link?.map((item, index) => (
                                    <div><a id="linkName" title={item.name} href={item.url}>{item.name}</a></div>
                                ))
                            }

                            <hr></hr>
                            <hr style={{ border: "3px solid #e9e9eb", margin: "20px 0px" }}></hr>

                            <div className="pageLink">
                                <div style={{ textAlign: "center" }}>上一页</div>
                                <div style={{ textAlign: "left" }}>
                                    {lastData === null ? "无" : lastData.news_title}
                                </div>

                                <div style={{ textAlign: "right"}}>
                                    {nextData === null ? "无" : nextData.news_title}
                                </div>
                                <div style={{ textAlign: "center"}}>下一页</div>
                            </div>

                        </div>

                        <div id="newsDetail_gridItem2">
                            <div id="title">实时咨询</div>
                            {latestNews?.map((item, index) =>
                                <div className="latestNews_Content" onClick={() => linkToDetail(index, item.id)}>
                                    <div id="text1">{item.news_title}</div>
                                    <div id="text2">{item.news_content.default_text.text}</div>
                                    <div>了解详情➔</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div><ButtomBar /></div>
        </div>
    )
}

export default NewsDetail;