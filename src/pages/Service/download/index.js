import './index.scss'
import { getDownloadList } from '@/store/modules/downloadListStore'
import { setLastData, setNextData } from '@/store/modules/downloadDetailStore'
import Pagination from '@/component/Pagination'
import { useNavigate } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Download = () => {

    const navigate = useNavigate();
    const {
        downloadList,
        total_count,
        currentPage,
        pageSize
    } = useSelector(state => state.downloadList)

    const dispatch = useDispatch()
    const [fileType, setFileType] = useState([])

    useLayoutEffect(() => {
        dispatch(getDownloadList(currentPage));
    }, [dispatch, currentPage]);

    useEffect(() => {
        if (downloadList && downloadList.length > 0) {
            const types = downloadList.map(item => {
                const parts = item.file_url?.split('.') || [];
                return parts.length > 1 ? parts[parts.length - 1] : '';
            });
            setFileType(types);
        }
    }, [downloadList]);

    // console.log("downloadList:", downloadList);
    // console.log("fileType:", fileType);

    // 处理页码变化
    const handlePageChange = (newPage) => {
        dispatch(getDownloadList(newPage));
    };

    // 点击进入详情页
    const linkToDetail = (idx, id) => {
        console.log("idx:", idx);
        console.log("id:", id);
        if (idx > 0) {
            // console.log("last:",downloadList[idx-1]);
            dispatch(setLastData(downloadList[idx - 1]));
        }else{
            dispatch(setLastData(null));
        }
        if (idx < downloadList.length - 1) {
            // console.log("next:",downloadList[idx+1]);
            dispatch(setNextData(downloadList[idx + 1]));
        }else{
            dispatch(setNextData(null));
        }
        navigate(`/download_detail/${id}`);
    }

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
        <div className='download-Container'>
            <div className='download-Content'>
                <div className='download_head'>
                    下载中心
                </div>
                <div className='download-Display'>
                    {
                        downloadList?.map((item, index) =>
                            <div className='download-Box' onClick={() => linkToDetail(index, item.id)}>
                                <div className='download-text'>
                                    <div className='download-title'>{item.file_name}</div>
                                    <div className='fileContent'>
                                        <div>软件大小：{item.file_size}</div>
                                        <div>文件类型：{fileType[index]}</div>
                                    </div>
                                    <div style={{ button: "10px" }}>
                                        <button className='download-button' onClick={downloadFile(item.file_url, item.file_name)}>文件下载</button>
                                    </div>
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

export default Download