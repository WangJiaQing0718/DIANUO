import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getNavBarList } from '@/store/modules/navBarStore';

const PageMidNav = () => {
    const navigate = useNavigate();

    // 获取路由数据
    const { navBarList } = useSelector(state => state.navBar);
    console.log("navBarList:",navBarList);
    
    const dispatch = useDispatch();
    const [pageIndex, setPageIndex] = useState(1);

    useEffect(() => {
        // 1. 检查本地存储是否有缓存数据
        const cachedNavBarList = localStorage.getItem('navBarList');

        if (cachedNavBarList) {
            // 2. 如果本地存储有数据，直接使用而不发起请求
            dispatch({
                type: 'SET_NAV_BAR_LIST',
                payload: JSON.parse(cachedNavBarList)
            });
        } else {
            // 3. 如果本地存储没有数据，发起请求获取
            dispatch(getNavBarList());
        }
    }, [dispatch]);

    // 当navBarList更新时，保存到本地存储
    useEffect(() => {
        if (navBarList && navBarList.length > 0) {
            localStorage.setItem('navBarList', JSON.stringify(navBarList));
        }
    }, [navBarList]);

    const aboutList = navBarList?.slice(pageIndex, pageIndex + 1)?.[0]?.child;
    const pageName = navBarList?.slice(pageIndex, pageIndex + 1)?.[0]?.path;


    // 解析路由，保存一级路由child数组、二级路由cname、cpath，三级使用时增加参数传入名称即可
    const RouterAnalysis = () => {
        const location = useLocation();
        
        const routerArray = location.pathname.split("/").slice(1);
        console.log("routerArray:",routerArray);

        const result = { childArray: null, currentData: null };

        // 匹配一级路由
        const childArrayRes = navBarList.find( item => item.path === routerArray[0] );
        if(!childArrayRes) return result;
        result.childArray = childArrayRes;
        // console.log("1:",result.childArray);
        
        // 匹配二级路由
        if( routerArray.length > 1){
            const currentDataRes = childArrayRes.child.find( child => child.cpath === routerArray[1]);
            if(currentDataRes) {
                result.currentData = currentDataRes;
            }
        }
        return result;
    }

    RouterAnalysis();


    
    return (
        <>
            <div className='pageMidNav_Container'>
                <div className='pageMidNav_Content'>
                    <div className='midNav_Box'>
                        {aboutList?.map(item => (
                            <div key={item.cpath} onClick={() => navigate(`/${pageName}/${item.cpath}`)}>
                                <p>{item.cname}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageMidNav