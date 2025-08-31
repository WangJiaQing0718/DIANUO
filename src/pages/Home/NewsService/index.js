import './index.scss'

const NewsService = () => {

    return (
        <div className='NewsService_Container'>
            <div className='NewsService_Content'>
                <div className='NewsService_title'>
                    <div className='NewsService_bgText'>NEWS</div>
                    <div className='NewsService_headText'>新闻资讯</div>
                    <hr></hr>
                </div>

                <div className='NewsService_GridLayout'>
                    <div className='NewsService_GridItem'>
                        <div><span id='tag'>行业动态</span></div>
                        <div>2024-05-20</div>
                        <div>国家药监局关于发布体外诊断试剂分类目录的公告</div>
                        <div>为贯彻落实《医疗器械监督管理条例》（国务院令第739号）有关要求，进一步指导体外诊断试剂分类，根据《体外诊断试剂注册与备案管理办法》</div>
                        <div>
                            <img src='https://omo-oss-image.thefastimg.com/portal-saas/pg2025061617303804440/cms/image/103af35c-716b-42f2-9330-7018d19add8c.png_290xaf.png' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsService