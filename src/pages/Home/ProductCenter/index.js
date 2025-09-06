import { useNavigate } from 'react-router-dom';
import './index.scss'

const ProductCenter = () => {

    const navigate = useNavigate();

    return (
        <div className='ProductCenter_Container'>
            <div className='ProductCenter_Content'>
                <div className='ProductCenter_title'>
                    <div className='ProductCenter_bgText'>PRODUCT</div>
                    <div className='ProductCenter_headText'>产品中心</div>
                    <hr></hr>
                </div>

                <div className='ProductCenter_GridLayout'>
                    <div className='ProductCenter_GridItem'>
                        <div id='item_Title'>电解质分析仪</div>
                        <div className='img_Box'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/rmsw475bt2nkeo80.png' alt=''></img>
                        </div>
                        <div>
                            <button onClick={() => navigate('/product/fxy')}>相关产品 ➔</button>
                        </div>
                    </div>

                    <div className='ProductCenter_GridItem'>
                        <div id='item_Title'>试剂</div>
                        <div className='img_Box'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/a5go2b6ewt934rc1.png' alt=''></img>
                        </div>
                        <div>
                            <button onClick={() => navigate('/product/sj')}>相关产品 ➔</button>
                        </div>
                    </div>

                    <div className='ProductCenter_GridItem'>
                        <div id='item_Title'>耗材</div>
                        <div className='img_Box'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/6v950yhgcr234zjl.png' alt=''></img>
                        </div>
                        <div>
                            <button onClick={() => navigate('/product/hc')}>相关产品 ➔</button>
                        </div>
                    </div>

                    <div className='ProductCenter_GridItem'>
                        <div id='item_Title'>其他</div>
                        <div className='img_Box'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/gia7uzwpxd1c59re.png' alt=''></img>
                        </div>
                        <div>
                            <button onClick={() => navigate('/product/other')}>相关产品 ➔</button>
                        </div>
                    </div>
                </div>

                <div className='ProductCenter_Arrow'>
                    <div><hr></hr></div>
                    <div className='Arrow'>
                        <div><span>❮</span></div>
                        <div><span>❯</span></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCenter;