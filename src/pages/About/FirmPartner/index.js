import { useEffect, useState } from 'react'
import './index.scss'
import axios from 'axios'

const FirmPartner = () => {

    // 获取图片数据
    const [picList, setPicList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchURL = async () => {
            try {
                setLoading(true)
                setError(null)

                // 1. 首先检查本地存储是否有缓存数据
                const cachedPicList = localStorage.getItem('partnerPicList')

                if (cachedPicList) {
                    setPicList(JSON.parse(cachedPicList))
                    setLoading(false)
                    return
                }

                // 2. 本地存储没有则发起请求
                const res = await axios.get('http://nas.wjq718.fun:10025/get-url-column')

                // 验证数据格式
                if (res.data?.url_data && Array.isArray(res.data.url_data)) {
                    setPicList(res.data.url_data)
                    // 保存到本地存储
                    localStorage.setItem('partnerPicList', JSON.stringify(res.data.url_data))
                } else {
                    throw new Error('Invalid data format from API')
                }

            } catch (error) {
                console.error('Error fetching URL:', error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchURL()
    }, [])

    return (
        <div className="firmPartner_Container">
            <div className="firmPartner_BgImg">
                    <img src='http://nas.wjq718.fun:10001/imageFiles/p3ndohwx87mta26y.png' alt=''></img>
                </div>
            <div className="firmPartner_Content">
                <div className='firmPartner_GridLayout'>
                    <div className='gridItem1'>
                        <div className='gridItem1_text1'>开拓创新 合作共赢</div>
                        <div className='gridItem1_text2'>公司现有电解质分析仪（DIANUO-80系列、DN-X系列）、电解质分析仪配套试剂、离子选择性电极三大类产品，以其良好的稳定性，广泛应用于各级医院、社区门诊、卫生院、实验室等。</div>
                        <div>
                            <div className='colItem2'>
                                {loading ? (
                                    <div>加载合作伙伴图片中...</div>
                                ) : error ? (
                                    <div>加载失败: {error}</div>
                                ) : (
                                    <div className='picList'>
                                        {picList.map((item, index) => (
                                            <div className='picBox' key={index}>
                                                <div className='picConBox'>
                                                    <div className='picCon'>
                                                        <img
                                                            src={item}
                                                            alt="合作伙伴logo"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='gridItem2'>
                        <img src="http://nas.wjq718.fun:10001/imageFiles/hu50bcqirzawxv82.gif" alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirmPartner