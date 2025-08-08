import './index.scss'
import { useContext } from "react"
import { DeviceContext } from "@/deviceContext"
import PageMidNav from '../PageMidNav';


const HeadSection = ({ headTitle, enHeadTitle, imageUrl }) => {

    // 当前是否为移动端
    const { isMobile } = useContext(DeviceContext);

    return (
        <div>
            <div className='headSection_Container'>
                <img src={imageUrl} alt='' className={isMobile ? "headPic_Mobile" : "headPic"}></img>

                <div className='headTitle_container'>
                    <div className='headTitle_box' style={{ marginTop: isMobile ? '43px' : '' }}>
                        <div className='text_CHN'>{headTitle}</div>
                        {!isMobile && <div className='text_EN'>{enHeadTitle}</div>}
                    </div>
                </div>
            </div>

            <div>
                <PageMidNav/>
            </div>
        </div>
    )
}

export default HeadSection