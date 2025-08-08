/**
 * 底部导航栏
 */

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getNavBarList } from '../../store/modules/navBarStore'
import './index.scss'
import { DeviceContext } from "@/deviceContext"
import SideBar from '../SideBar';
import Consultancy from '../Consultancy';

const ButtomBar = () => {
    // 当前是否为移动端
    const { isMobile } = useContext(DeviceContext);

    // 获取路由数据
    const { navBarList } = useSelector(state => state.navBar)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNavBarList())
    }, [dispatch])
    // console.log("navBarList:", navBarList)

    // 使用可选链防止 navBarList 未定义时报错
    const col2List = navBarList?.slice(1);
    // console.log("col2List:", col2List)

    const navigate = useNavigate()
    // 一级路由点击事件
    const linkToPage = (path) => {
        // console.log(path);
        navigate(`/${path}`);
    }

    // 二级路由点击事件
    const linkTochildPage = (path, cpath) => {
        // console.log(path, cpath);
        navigate(`/${path}/${cpath}`);
    }

    return (
        <div>
            <div><Consultancy /></div>
            <div className="buttombar-container">
                <div className='buttombar-content'>
                    <div className={`gridLayout ${isMobile ? 'mobile' : ''}`}>
                        <div className='buttom-item1'>
                            <div className='item1-content'>
                                <img src="http://nas.wjq718.fun:10001/imageFiles/f7wlx6adyth5801e.png" alt="典诺生物"></img>
                                <div style={{ fontSize: "20px", lineHeight: "40px" }}>服务热线</div>
                                <div style={{ fontSize: "22px", lineHeight: "40px" }}>025-58372377</div>
                                <div>邮箱：dianuo01@163.com</div>
                                <div>销售负责人：13390927597（蔡经理）</div>
                                <div>技术负责人：17366031527（廖经理）</div>
                                <div>售后负责人：13337708569（朱经理）</div>
                                <div>外贸负责人：13823276027（王平 Richard）</div>
                                <div>地址：南京市江北新区中山科技园科创大道9号C3幢3层301室</div>
                            </div>
                        </div>

                        {!isMobile && col2List.map(item => (
                            <div className='buttom-item' key={item.path}>
                                <div className='pageName' onClick={() => linkToPage(item.path)}>
                                    {item.name}
                                </div>
                                {item.child.map(child => (
                                    <div className='childName' onClick={() => linkTochildPage(item.path, child.cpath)}>
                                        {child.cname}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className='web-infomation'>
                        <div>Copyright © 2025 南京典诺生物技术有限公司 All Rights Reserved.</div>
                        <div style={{ paddingRight: "20%" }}>网站建设：中企动力 南京  | SEO</div>
                        <div>苏ICP备2022028670号-1</div>
                    </div>

                </div>

                {!isMobile && <div><SideBar /></div>}
            </div>
        </div>
    )
}

export default ButtomBar