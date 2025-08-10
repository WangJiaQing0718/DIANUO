import './index.scss'

const FirmCulture = () => {

    return (
        <div className='firmCulture_Container'>
            <div className='firmCulture_Content'>
                <div className='firmCulture_head'>
                    企业文化
                </div>

                <div className='firmCulture_GridLayout'>

                    {/* 后续优化为map */}
                    <div className='firmCulture_GridItem'>
                        <div className='gridItem_Icon'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/8lazxf4kmugtn2rs.png' alt=''></img>
                        </div>
                        <div className='gridItem_Title'>公司使命</div>
                        <div className='gridItem_Text'>提供优质的医疗产品和专业化的服务，使临床检验更加高效可靠。</div>
                        <div className='gridItem_Num'>01</div>
                    </div>

                    <div className='firmCulture_GridItem'>
                        <div className='gridItem_Icon'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/yiz7efl5usg613h0.png' alt=''></img>
                        </div>
                        <div className='gridItem_Title'>公司愿景</div>
                        <div className='gridItem_Text'>以不断创新作为驱动力，提供优质的医疗产品和专业化的服务，快速发展成为中国医疗器械电解质领域的标杆企业。</div>
                        <div className='gridItem_Num'>02</div>
                    </div>

                    <div className='firmCulture_GridItem'>
                        <div className='gridItem_Icon'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/h9wyr1l0pid3gu5e.png' alt=''></img>
                        </div>
                        <div className='gridItem_Title'>质量方针</div>
                        <div className='gridItem_Text'>人民健康至上，产品质量保证</div>
                        <div className='gridItem_Num'>03</div>
                    </div>

                    <div className='firmCulture_GridItem'>
                        <div className='gridItem_Icon'>
                            <img src='http://nas.wjq718.fun:10001/imageFiles/mg3vstlwjpudzc9i.png' alt=''></img>
                        </div>
                        <div className='gridItem_Title'>核心文化</div>
                        <div className='gridItem_Text'>专注，创新</div>
                        <div className='gridItem_Num'>04</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirmCulture;