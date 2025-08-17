import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { getNavBarList } from '../../store/modules/navBarStore'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from "react"
import { DeviceContext } from "@/deviceContext"

const NavBar = () => {
    // 获取路由数据
    const { navBarList } = useSelector(state => state.navBar)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNavBarList())
    }, [dispatch])

    // 当前是否为移动端
    const { isMobile } = useContext(DeviceContext);
    const location = useLocation();
    // console.log("loc:", location.state);


    // 当前导航栏是否透明
    const [isTransparent, setIsTransparent] = useState(true)

    // 页面滑动距离
    const [scrollTopHeight, setScrollTopHeight] = useState(0);
    useEffect(() => {
        if (location.state !== null) {
            setIsTransparent(false);
        }
        else {
            const handleScroll = () => {
                const currentScrollTop = document.documentElement.scrollTop;
                setScrollTopHeight(currentScrollTop);
                setIsTransparent(currentScrollTop === 0);
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [scrollTopHeight, location]);


    // 记录鼠标悬停导航项的索引
    const [hoveredNav, setHoveredNav] = useState(null);
    const navItemClickEvent = (page, index) => {
        if (isMobile && page.child.length > 0) {
            toggleMobileDropdown(index);
        } else {
            linkToPage(page.path);
        }
    }

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

    // 中英文切换菜单是否打开
    const [isChinese, setIsChinese] = useState(true)
    const [isOpenLanguage, setIsOpenLanguage] = useState(false)
    const changeLanguage = () => {
        setIsChinese(!isChinese)
        if (isChinese) {
            navigate("/English");
        } else {
            navigate("/");
        }
    }

    // 当语言切换菜单栏打开时监听鼠标点击关闭
    const changeOpenRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            // console.log('检测到点击事件');
            if (changeOpenRef.current && !changeOpenRef.current.contains(event.target)) {
                setIsOpenLanguage(false);
            }
        };
        if (isOpenLanguage) {
            // console.log("开启监听");
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            // console.log('移除事件监听');
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenLanguage]);


    // 移动端菜单是否展开
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdowns, setOpenMobileDropdowns] = useState({});
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            setOpenMobileDropdowns({});
        }
    };
    const toggleMobileDropdown = (index) => {
        setOpenMobileDropdowns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // 修复下滑距离不为0时，鼠标移动导致的样式错误
    const mouseLeaveChange = () => {
        if (scrollTopHeight === 0 && location.state === null) {
            setIsTransparent(true);
        }
    }

    return (
        <div>
            {/* 顶部导航栏 */}
            <div className="navbar-container"
                onMouseEnter={() => setIsTransparent(false)}
                onMouseLeave={() => mouseLeaveChange()}
                style={{ backgroundColor: isMobile ? '#ffffff' : (isTransparent ? 'transparent' : '#ffffff'),
                    boxShadow: isTransparent ? '' : '0 3px 5px #e0e0e0'
                 }}
            >
                <div className='navbar-box'>
                    {/* 图标 */}
                    <img
                        src={isMobile ? "http://nas.wjq718.fun:10001/imageFiles/f7wlx6adyth5801e.png" : (isTransparent ? "http://nas.wjq718.fun:10001/imageFiles/zyvgjw16ca8kxolm.png" : "http://nas.wjq718.fun:10001/imageFiles/f7wlx6adyth5801e.png")}
                        alt='icon'
                        className="navbar-logo"
                        title='南京典诺生物技术有限公司'
                        onClick={() => navigate('/')}
                    />


                    {/* 导航栏 */}
                    <div className={`navbar ${isMobile ? 'mobile-nav' : ''} ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`} style={{ color: isMobile ? '#333333' : (isTransparent ? "#ffffff" : "#333333") }}>
                        {navBarList.map((page, index) => (
                            <div key={page.path} className='nav-item' onMouseEnter={!isMobile ? () => setHoveredNav(index) : undefined} onMouseLeave={!isMobile ? () => setHoveredNav(null) : undefined}>
                                <div className='nav-btn' onClick={() => navItemClickEvent(page, index)}>{page.name}
                                    {page.child.length > 0 && (
                                        <span className={`dropdown-arrow ${isMobile ? 'mobile-arrow' : ''}`}>
                                            {isMobile ? (openMobileDropdowns[index] ? '▼' : '▶') : ''}
                                        </span>
                                    )}
                                </div>

                                {/* 下拉菜单 */}
                                {page.child.length > 0 && (
                                    <ul
                                        className={` dropdown-menu ${(!isMobile && hoveredNav === index) || (isMobile && openMobileDropdowns[index]) ? 'show' : ''}`}
                                        onMouseEnter={!isMobile ? () => setHoveredNav(index) : undefined}
                                        onMouseLeave={!isMobile ? () => setHoveredNav(null) : undefined}
                                    >
                                        {page.child.map(child => (
                                            <li
                                                key={child.cpath}
                                                onClick={() => linkTochildPage(page.path, child.cpath)}
                                            >
                                                {child.cname}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>



                    {/* 搜索+语言切换 */}
                    <div className='search-language'>
                        {!isMobile &&
                            <span style={{ padding: "5px" }}>
                                <img src={isTransparent ? "http://nas.wjq718.fun:10001/imageFiles/tpkf1behw8aduv54.png" : "http://nas.wjq718.fun:10001/imageFiles/wa7b2ueh5ozqn9kl.png"}
                                    alt='search' className="search-logo">
                                </img>
                            </span>}

                        <div class={`changeLanguage ${isOpenLanguage ? 'open' : ''}`} ref={changeOpenRef}>
                            <div className='currentLan' onClick={() => setIsOpenLanguage(!isOpenLanguage)}
                                style={{ backgroundColor: isMobile ? "rgba(255, 255, 255, 0.8)" : (isTransparent ? "#d9eaf5" : "rgba(255, 255, 255, 0.8)") }}
                            >{isChinese ? "中文简体" : "English"}</div>

                            <div className="language-menu">
                                <div className='selectLan' onClick={() => changeLanguage()}>{isChinese ? "English" : "中文简体"}</div>
                            </div>
                        </div>

                        {/* 移动端菜单按钮 */}
                        {isMobile && (
                            <button className="mobile-display-button" onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? '✕' : '☰'}
                            </button>
                        )}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default NavBar