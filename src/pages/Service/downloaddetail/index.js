import ButtomBar from "@/component/ButtomBar";
import NavBar from "@/component/NavBar";
import HeadSection from "@/component/HeadSection"
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { getDownloadDetail } from '@/store/modules/downloadDetailStore'
import { DeviceContext } from "@/deviceContext";

const DownloadDetail = () => {
    const { isMobile } = useContext(DeviceContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { lastData, nextData } = useSelector(state => state.downloadDetail);

    const [selectAll, setSelectAll] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        console.log('上一项数据:', lastData);
        console.log('下一项数据:', nextData);
    }, [lastData, nextData]);

    const { downloadDetail } = useSelector(state => state.downloadDetail);

    useLayoutEffect(() => {
        dispatch(getDownloadDetail(id));
    }, [dispatch, id]);

    console.log("downloadDetail:", downloadDetail);

    if (!downloadDetail) {
        return <div>数据加载中……</div>;
    }

    // console.log("newsDetail:", newsDetail);

    // const linkToDetail = (idx, id) => {
    //     if (latestNews[idx].news_content.news_url === null) {
    //         navigate(`/news_detail/${id}`);
    //     } else {
    //         window.open(`${latestNews[idx].news_content.news_url.url}`, '_self');
    //     }
    // }

    
    // 处理全选/取消全选
    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        setIsChecked(checked);
    };

    // 处理单个复选框变化
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
        // 如果取消单个复选框，则取消全选
        if (!e.target.checked && selectAll) {
            setSelectAll(false);
        }
    };

    // 下载链接
    const downloadFile = (url, name) => (event) => {
        // 阻止事件冒泡，避免触发父元素的点击事件（跳转到详情页）
        event.stopPropagation();

        // 创建一个隐藏的<a>标签
        const link = document.createElement('a');
        link.href = url;
        link.download = name || 'download'; // 设置下载的文件名

        // 添加到DOM中（某些浏览器需要这样）
        document.body.appendChild(link);

        // 模拟点击触发下载
        link.click();

        // 下载完成后移除元素
        document.body.removeChild(link);
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

            <div className="downloadDetail_Container">
                <div className="downloadDetail_Content">
                    <div className="downloadDetail">
                        <div id="title">{downloadDetail.file_name}</div>
                        <hr></hr>
                        <div className="detail_GridLayout">
                            <div id="time">发布时间: {downloadDetail.create_time}</div>
                            <div className="shareIcon">
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/i31e2l70zwnc84to.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/jzare6yo789psx1t.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/d08f7czn16r4jxku.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/594z7x1jwpmh82is.png" alt="" /></span>
                                <span><img src="http://nas.wjq718.fun:10001/imageFiles/posl8b2vte5mwjhc.png" alt="" /></span>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="download_box">
                            <div>
                                <span>
                                    <input type="checkbox" id="check" checked={isChecked} onChange={handleCheckboxChange}></input>
                                </span>
                                <span>{downloadDetail.file_name}</span>
                            </div>

                            <div className="sizebtn_box">
                                <div style={{ textAlign: "center", color: "#6c757d" }}>文件大小: {downloadDetail.file_size}</div>
                                <div style={{ textAlign: "right" }}>
                                    <button id="btn" onClick={downloadFile(downloadDetail.file_url, downloadDetail.file_name)}>下载</button>
                                </div>
                            </div>
                        </div>

                        <div className="buttom_text">
                            <span>
                                <input type="checkbox" id="selectAll" checked={selectAll} onChange={handleSelectAll}></input>
                            </span>
                            <span>全选</span>
                            <span><button id="btn" onClick={downloadFile(downloadDetail.file_url, downloadDetail.file_name)}>下载</button></span>
                        </div>

                        <hr></hr>

                        <div className="pageLink">
                            <div style={{ textAlign: "center" }}>上一页</div>
                            <div style={{ textAlign: "left" }}>
                                {lastData === null ? "无" : lastData.file_name}
                            </div>

                            <div style={{ textAlign: "right" }}>
                                {nextData === null ? "无" : nextData.file_name}
                            </div>
                            <div style={{ textAlign: "center" }}>下一页</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div><ButtomBar /></div>
        </div>
    )
}

export default DownloadDetail;