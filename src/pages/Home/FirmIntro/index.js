import { useEffect, useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const FirmIntro = () => {

    const navigate = useNavigate()

    const [counts, setCounts] = useState({
        founded: 0,
        area: 0,
        staff: 0
    });

    // 目标值和动画时长
    const targets = {
        founded: 2015,
        area: 8000,
        staff: 200
    };
    const duration = 1000;

    useEffect(() => {
        const animate = (key) => {
            let start = 0;
            const increment = targets[key] / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= targets[key]) {
                    setCounts(prev => ({ ...prev, [key]: targets[key] }));
                    clearInterval(timer);
                } else {
                    setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
                }
            }, 16);

            return () => clearInterval(timer);
        };

        Object.keys(targets).forEach(key => animate(key));
    },[]);

    return (
        <div className='FirmIntro_Container'>
            <div className='FirmIntro_Content'>
                <div className='FirmIntro_item'>
                    <div className='FirmIntro_AboutText'>ABOUT</div>
                    <div className='FirmIntro_Title'>
                        <div>南京典诺生物技术有限公司</div>
                        <div>南京典诺生物技术有限公司创建于2015年6月，公司总部坐落于六朝古都江苏省南京市，是一家集自主创新研发、规模化生产及专业化营销为一体的体外诊断仪器和试剂供应商，涉及关键技术已申请并获得国家专利，于2020年通过国家高新技术企业认证。</div>
                        <div>公司现有电解质分析仪（DIANUO-80系列、DN-X系列）、电解质分析仪配套试剂、离子选择性电极三大类产品，以其良好的稳定性，广泛应用于各级医院、社区门诊、卫生院、实验室等。</div>

                        <div className='number_Animation'>
                            <div><span>{counts.founded}</span><span>年</span></div>
                            <div><span>{counts.area}</span><span>M²</span></div>
                            <div><span>{counts.staff}</span><span>+人</span></div>
                        </div>

                        <div className='number_Title'>
                            <div>公司成立</div>
                            <div>占地面积</div>
                            <div>公司员工</div>
                        </div>

                        <button className='FirmIntro_button' onClick={() => navigate('/about')}>查看更多 ➔</button>
                    </div>
                </div>

                <div className='FirmIntro_item'>
                    <img src="http://nas.wjq718.fun:10001/imageFiles/r5vgw6i3uyn0ht4c.jpg" alt='典诺生物' className='FirmIntro_pic'></img>
                    <div className='blueBlock'></div>
                </div>
            </div>
        </div>
    );
};

export default FirmIntro;