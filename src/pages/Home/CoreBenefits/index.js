import { useNavigate } from 'react-router-dom';
import './index.scss'

const CoreBenefits = () => {

    const navigate = useNavigate();

    return (
        <div className='CoreBenefits_Container'>
            <div className='CoreBenefits_Content'>
                <div className='CoreBenefits_GridLayout'>
                    <div className='CoreBenefits_AboutText'>ABOUT</div>
                    <div>
                        <div className='CoreBenefits_Title'>核心优势</div>
                        <div className='CoreBenefits_Text'>以不断创新作为驱动力，提供优质的医疗产品和专业化的服务，快速发展成为中国医疗器械电解质领域的标杆企业。</div>
                        <button className='CoreBenefits_Button' onClick={() => navigate('/service/aftersale')}>查看更多 ➔</button>
                    </div>

                    <div className='CoreBenefits_Item'>
                        <div className='Item_GridLayout'>
                            <div>
                                <div>专业团队</div>
                                <div>自主创新研发、规模化生产及专业化营销为一体的体外诊断仪器和试剂供应商，涉及关键技术已申请并获得国家专利，于2020年通过国家高新技术企业认证</div>
                            </div>
                            <div id='num'>01</div>
                        </div>

                        <div className='Item_GridLayout'>
                            <div>
                                <div>质量体系</div>
                                <div>严格按照ISO9001和ISO13485质量体系认证的要求，确保优秀的产品质量和体验，提供满足临床需求的优质产品、解决方案及高效有价值的专业服务。</div>
                            </div>
                            <div id='num'>02</div>
                        </div>

                        <div className='Item_GridLayout'>
                            <div>
                                <div>专业团队</div>
                                <div>专业技术团队，多年行业管理经验，为客户提供优质的医疗产品和专业化的服务，使临床检验更加高效可靠。</div>
                            </div>
                            <div id='num'>03</div>
                        </div>

                        <div className='Item_GridLayout'>
                            <div>
                                <div>客户服务</div>
                                <div>感谢您选择我们的服务，我们始终秉持着客户至上的原则，为您提供优质的服务。如果您有任何问题或疑虑，请随时联系我们的客户服务团队，我们将竭诚为您解答。</div>
                            </div>
                            <div id='num'>04</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreBenefits;