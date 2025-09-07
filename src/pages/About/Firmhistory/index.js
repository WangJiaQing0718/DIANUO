import { useContext, useEffect, useRef, useState } from 'react';
import './index.scss'
import { DeviceContext } from "@/deviceContext"

const FirmHistory = () => {
    const { isMobile } = useContext(DeviceContext);

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const boxRef = useRef(null);

    // 上一页
    const prePage = () => {
        setCurrentPageIndex(prevIndex =>
            prevIndex > 0 ? prevIndex - 1 : 1
        );
    }

    // 下一页
    const nextPage = () => {
        setCurrentPageIndex(prevIndex =>
            prevIndex < 1 ? prevIndex + 1 : 0
        );
    }

    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.style.transform = `translateX(-${currentPageIndex * 50}%)`;
        }
    }, [currentPageIndex]);

    return (
        <div className='FirmHistory_Container'>
            <div className='FirmHistory_Content'>
                <div className='FirmHistory_head'>
                    发展历程
                </div>

                <div className='FirmHistory_SlideShow'>
                    <div className='SlideShow_Box' ref={boxRef}>



                        <div className='SlideShow_Item'>
                            {!isMobile ? <>
                                <div className='content-box1'>
                                    <div className='content-item'>
                                        <div id='time'>2015年6月</div>
                                        <div id='text'>公司成立</div>
                                    </div>
                                    <div className='content-item'>
                                        <div id='time'>2020年</div>
                                        <div id='text'>通过知识产权管理体系认证、国家高新技术企业认证</div>
                                    </div>
                                </div>

                                <div class="table-container">
                                    <table>
                                        <tbody>
                                            <tr id='circle'>
                                                <td>○</td>
                                                <td>○</td>
                                                <td>○</td>
                                                <td>○</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className='content-box2'>
                                    <div className='content-item'>
                                        <div id='time'>2017年10月</div>
                                        <div id='text'>DIANUO-80系列全自动电解质分析仪、电解质分析仪配套试剂上市</div>
                                    </div>
                                    <div className='content-item'>
                                        <div id='time'>2021年</div>
                                        <div id='text'>通过ISO9001、ISO13485质量体系认证</div>
                                    </div>
                                </div>
                            </> : <>
                                <div className='content-box'>
                                    <div className='content-itemMobile'>
                                        <div id='time'>2015年6月</div>
                                        <div id='text'>公司成立</div>
                                    </div>
                                    <div className='content-itemMobile'>
                                        <div id='time'>2017年10月</div>
                                        <div id='text'>DIANUO-80系列全自动电解质分析仪、电解质分析仪配套试剂上市</div>
                                    </div>
                                    <div className='content-itemMobile'>
                                        <div id='time'>2020年</div>
                                        <div id='text'>通过知识产权管理体系认证、国家高新技术企业认证</div>
                                    </div>
                                    <div className='content-itemMobile'>
                                        <div id='time'>2021年</div>
                                        <div id='text'>通过ISO9001、ISO13485质量体系认证</div>
                                    </div>
                                </div>
                            </>
                            }

                        </div>





                        <div className='SlideShow_Item'>
                            {!isMobile ? <>
                                <div className='content-box1'>
                                    <div className='content-item'>
                                        <div id='time'>2022年</div>
                                        <div id='text'>DN-X系列半自动电解质分析仪上市</div>
                                    </div>
                                </div>

                                <div class="table-container">
                                    <table>
                                        <tbody>
                                            <tr id='circle'>
                                                <td>○</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </> :<>
                                <div className='content-box'>
                                    <div className='content-itemMobile'>
                                        <div id='time'>2022年</div>
                                        <div id='text'>DN-X系列半自动电解质分析仪上市</div>
                                    </div>
                                </div>
                            </>
                            }
                        </div>



                    </div>

                    <div className='Arrow_Box'>
                        {!isMobile && <div><hr></hr></div>}
                        <div className='SlideShow_Arrow'>
                            <div style={{ textAlign: "left" }}><span onClick={prePage}>❮</span></div>
                            <div style={{ textAlign: "right" }}><span onClick={nextPage}>❯</span></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FirmHistory;