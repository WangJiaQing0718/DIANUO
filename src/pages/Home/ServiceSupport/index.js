import { useNavigate } from 'react-router-dom';
import './index.scss'

const ServiceSupport = () => {
    const navigate = useNavigate()
    return (
        <div className='ServiceSupport_Container'>
            <div className='ServiceSupport_Content'>
                <div className='ServiceSupport_title'>
                    <div className='ServiceSupport_bgText'>SERVICE</div>
                    <div className='ServiceSupport_headText'>服务支持</div>
                    <hr></hr>
                </div>

                <div>
                    <div className='ServiceSupport_GridLayout'>
                        <div className='ServiceSupport_GridItem' onClick={() => navigate('./service')}>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/1gvq2kyud4ncs9mb.png' alt=''></img>
                            <div className='topIndex'>
                                <div>售后服务</div>
                                <div><img src='http://nas.wjq718.fun:10001/imageFiles/c90tzkn8syhdf7j1.png' alt=''></img></div>
                            </div>
                        </div>

                        <div className='ServiceSupport_GridItem' onClick={() => navigate('./service/download')}>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/mtn7hz1e04ajlprb.png' alt=''></img>
                            <div className='topIndex'>
                                <div>下载中心</div>
                                <div><img src='http://nas.wjq718.fun:10001/imageFiles/abcnmdtryo5ip8gl.png' alt=''></img></div>
                            </div>
                        </div>

                        <div className='ServiceSupport_GridItem' onClick={() => navigate('./service/video')}>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/j8tzxl3ywc0fs4p7.png' alt=''></img>
                            <div className='topIndex'>
                                <div>产品视频</div>
                                <div><img src='http://nas.wjq718.fun:10001/imageFiles/mb7end40vjska3yw.png' alt=''></img></div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ServiceSupport;