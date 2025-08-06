import './index.scss'
import { useContext, useEffect, useState, useRef } from "react"
import { DeviceContext } from "@/deviceContext"

const SlideShow = () => {
    const { isMobile } = useContext(DeviceContext);
    const [currentPicIndex, setCurrentPicIndex] = useState(0);
    const dotsRef = useRef(null);
    const picItemsRef = useRef(null);
    const timerRef = useRef(null);

    // 初始化获取元素
    useEffect(() => {
        picItemsRef.current = document.querySelectorAll('.slideShow_PicItem');
        dotsRef.current = document.querySelectorAll('.dots li, .dots_Mobile li');
        showSlide();

        startAutoPlay();

        return () => {
            stopAutoPlay();
        };
    }, []);

    // 当currentPicIndex变化时更新幻灯片
    useEffect(() => {
        showSlide();
    }, [currentPicIndex]);

    // 开始自动播放
    const startAutoPlay = () => {
        stopAutoPlay();
        timerRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    // 停止自动播放
    const stopAutoPlay = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    // 移动元素位置
    const showSlide = () => {
        if (picItemsRef.current) {
            picItemsRef.current.forEach(item => {
                item.style.transition = `transform 1000ms ease-in-out`;
                item.style.transform = `translateX(-${currentPicIndex * 100}%)`;
            });
        }
        updateDots();
    }

    // 上一张图片
    const preSlide = () => {
        if (picItemsRef.current) {
            setCurrentPicIndex(prevIndex =>
                prevIndex > 0 ? prevIndex - 1 : picItemsRef.current.length - 1
            );
        }
    }

    // 下一张图片
    const nextSlide = () => {
        if (picItemsRef.current) {
            setCurrentPicIndex(prevIndex =>
                prevIndex < picItemsRef.current.length - 1 ? prevIndex + 1 : 0
            );
        }
    }

    // 更新当前图片Dot
    const updateDots = () => {
        if (dotsRef.current) {
            dotsRef.current.forEach(dot => {
                dot.classList.remove('active_dot');
            });
            if (dotsRef.current[currentPicIndex]) {
                dotsRef.current[currentPicIndex].classList.add('active_dot');
            }
        }
    }

    // 点击Dot更新位置
    const jumpToSlide = (index) => {
        setCurrentPicIndex(index);
    }

    // 鼠标事件处理
    useEffect(() => {
        const slideshow = document.getElementById('slideshow');

        const handleMouseEnter = () => {
            stopAutoPlay();
        };

        const handleMouseLeave = () => {
            startAutoPlay();
        };

        slideshow.addEventListener('mouseenter', handleMouseEnter);
        slideshow.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            slideshow.removeEventListener('mouseenter', handleMouseEnter);
            slideshow.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className='slideShow_Container' id="slideshow">
            <div className='slideShow_Content'>
                <div className='slideShow_PicItem'>
                    <img src="http://nas.wjq718.fun:10001/imageFiles/spy146xaq3wztjnb.jpg" alt='pic'></img>
                </div>
                <div className='slideShow_PicItem'>
                    <img src="http://nas.wjq718.fun:10001/imageFiles/nrk5xjdcv78leumo.jpg" alt='pic'></img>
                </div>
                <div className='slideShow_PicItem'>
                    <img src="http://nas.wjq718.fun:10001/imageFiles/rhv3oz8qwfcs90tm.png" alt='pic'></img>
                </div>
                <div className='slideShow_PicItem'>
                    <img src="http://nas.wjq718.fun:10001/imageFiles/rzlwkeutadgx7os3.png" alt='pic'></img>
                </div>
            </div>

            {!isMobile && <div className='control_Button'>
                <span onClick={preSlide}>❮</span>
                <span onClick={nextSlide}>❯</span>
            </div>}

            <div className={isMobile ? 'dots_Mobile' : 'dots'} id="dots">
                <li className="active_dot" onClick={() => jumpToSlide(0)}></li>
                <li onClick={() => jumpToSlide(1)}></li>
                <li onClick={() => jumpToSlide(2)}></li>
                <li onClick={() => jumpToSlide(3)}></li>
            </div>

            {/* <div className="Slide_text" id="slidetext">
                <div></div>
                <div></div>
                <div>
                    <div>专业 快速 准确 稳定</div>
                    <div>提供优质的医疗产品和专业化的服务，使临床检验更加高效可靠</div>
                    <div><button>查看更多</button></div>
                </div>
                <div></div>
            </div> */}


        </div>
    )
}

export default SlideShow