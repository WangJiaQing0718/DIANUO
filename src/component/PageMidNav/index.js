import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getNavBarList } from '@/store/modules/navBarStore';
import { DeviceContext } from "@/deviceContext"

// 后续存在三级路由引入新参数并修改路由链
const PageMidNav = () => {
    const { isMobile } = useContext(DeviceContext);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { navBarList } = useSelector(state => state.navBar);      // 所有路由数据
    const [pageList, setPageList] = useState([]);                   // 中部导航栏数据
    const [routerLink, setRouterLink] = useState([]);               // 路由链……>……>
    const [currentIndex, setCurrentIndex] = useState(null);         // 当前页面路由索引
    const [currentFirstPath, setcurrentFirstPath] = useState();     // 一级路由路径

    //优先加载数据
    useEffect(() => {
        dispatch(getNavBarList());
    }, [dispatch]);

    //在数据加载完成后解析路由
    useLayoutEffect(() => {
        // console.log("location:",location);
        

        if (navBarList.length === 0) return;

        const routerArray = location.pathname.split("/").slice(1);
        const routerLinkArray = [];
        // console.log("routerArray:", routerArray);
        if (location.pathname === "/product" || location.pathname === "/news") {
            setCurrentIndex(null);
        } else if(routerArray.length === 1){
            setCurrentIndex(0);
        }

        const result = { childArray: null, currentData: null };

        // 一级路由匹配
        var childArrayRes = null;

        // 解决招聘详情页数据路由数据问题
        if (routerArray[0] === 'job_detail') {
            childArrayRes = navBarList.find(item => item.path === 'recruit');
        } else {
            childArrayRes = navBarList.find(item => item.path === routerArray[0]);
        }
        // console.log("childArrayRes:", childArrayRes);

        if (childArrayRes) {
            setPageList(childArrayRes.child || []);
            result.childArray = childArrayRes;
            routerLinkArray.push({ name: childArrayRes.name, path: childArrayRes.path });
            setcurrentFirstPath(childArrayRes.path);

            // 路由链参数一
            const firstRouter = { name: childArrayRes.name, path: childArrayRes.path };
            setRouterLink([...routerLink, firstRouter]);

            // 二级路由匹配()
            if (routerArray.length > 1 && routerArray[0] !== 'job_detail') {
                const currentDataRes = childArrayRes.child.find(child => child.cpath === routerArray[1]);
                const currentIndex = childArrayRes.child.findIndex(child => child.cpath === routerArray[1]); 
                result.currentData = currentDataRes;
                if (routerArray[0] === 'job_detail') {
                    setCurrentIndex(null);
                } else {
                    setCurrentIndex(currentIndex);   
                }
                // console.log("currentIndex:", currentIndex);
                // console.log("currentDataRes:", currentDataRes);

                // 路由链参数二
                routerLinkArray.push({ name: currentDataRes.cname, path: currentDataRes.cpath });
            }
        }
        setRouterLink(routerLinkArray);
        // console.log("routerLink:", routerLink);
    }, [navBarList, location.pathname]);

    if (navBarList.length === 0) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className='pageMidNav_Container'>
            <div className='pageMidNav_Content'>
                <div className='midNav_Box'>
                    {pageList?.map((item, index) => (
                        <div
                            className={`midNav_Div ${index === currentIndex ? 'active' : ''}`}
                            style={{ color: index === currentIndex ? 'white' : '' }}
                            key={index}
                            onClick={() => navigate(`/${currentFirstPath}/${item.cpath}`)}
                        >
                            <p>{item.cname}</p>
                        </div>
                    ))}
                </div>

                <div className='routerLink' style={{ margin: isMobile ? "0px 0px" : "" }}>
                    <div><img
                        src="http://nas.wjq718.fun:10001/imageFiles/51wqtsvjrk3flm2b.png"
                        style={{ height: "16px", width: "16px", paddingTop: "7px" }}
                        alt="首页icon"
                    />
                        <span onClick={() => navigate("/")} style={{ color: "#666666" }}>首页 ＞</span>
                        {
                            routerLink.length > 1 ? (
                                routerLink.slice(1).map(item => (
                                    <span>
                                        {item.name}
                                    </span>
                                ))
                            ) : (
                                routerLink.map(item => (
                                    <span>
                                        {item.name}
                                    </span>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageMidNav;