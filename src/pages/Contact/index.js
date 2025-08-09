import NavBar from "@/component/NavBar"
import Buttom from "@/component/ButtomBar"
import './index.scss'
import HeadSection from "@/component/HeadSection"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { DeviceContext } from "@/deviceContext"

const Contact = () => {

    const { isMobile } = useContext(DeviceContext);

    const navigate = useNavigate()

    // 用户留言
    const [username, setUserName] = useState('')
    const [userphonenum, setUserPhoneNum] = useState('')
    const [useremail, setUserEmail] = useState('')
    const [usermessage, setUserMessage] = useState('')

    // 存数据到后端数据库
    const handleUserMessage = async () => {
        if (!useremail) {
            alert('邮箱是必填项');
            return; // 直接返回，不继续检查手机号
        }
        if (userphonenum.length !== 11) {
            alert('请检查号码');
            return;
        }
        if (usermessage.length > 255) {
            alert('留言内容最多255字符');
            return;
        }
        // console.log("Submit:", username, userphonenum, useremail, usermessage);
        try {
            const response = await fetch('http://nas.wjq718.fun:10025/store-user-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: [username, userphonenum, useremail, usermessage]
                }),
            });
            const result = await response.json();

            if (response.ok) {
                alert('提交成功！');
                setUserName('');
                setUserPhoneNum('');
                setUserEmail('');
                setUserMessage('');

            } else {
                console.error('提交失败:', result.error);
                alert("提交失败");
            }
        } catch (error) {
            console.error('提交过程中出错:', error);
            alert('提交过程中出错，请稍后再试');
        }
    };

    return (
        <div>
            <div><NavBar /></div>
            <div>
                <HeadSection
                    headTitle="联系我们"
                    enHeadTitle="CONTACT US"
                    imageUrl="http://nas.wjq718.fun:10001/imageFiles/i8stph40z6l1b3a9.jpg"
                />
            </div>

            <div>
                <div className='contact_PageMidNav'>
                    <div className='pageMidNav_Box'>
                        <img
                            src="http://nas.wjq718.fun:10001/imageFiles/51wqtsvjrk3flm2b.png"
                            style={{ height: "16px", width: "16px", paddingTop: "7px" }}
                            alt="首页icon"
                        />
                        <span onClick={() => navigate("/")} style={{ color: "#666666" }}>首页 ＞</span><span>联系我们</span>
                    </div>
                </div>

                <div className="contact_Container">
                    <div className="contact_Content">
                        <div className="contact_gridLayout">
                            <div className="grid_div1">
                                <div style={{ fontSize: "40px", margin: "25px 0px" }}>025-58372377</div>
                                <div style={{ marginBottom: "10px" }}>
                                    <span style={{ fontSize: "90px", lineHeight: "90px" }}>HELLO</span>
                                    <span className="grid_div1_icon"><img src="http://nas.wjq718.fun:10001/imageFiles/t9wxpo7386squ4db.png" alt=""></img></span>
                                </div>
                                <div>地址：南京市江北新区中山科技园科创大道9号C3幢3层301室</div>
                                <div>座机：025-58372377</div>
                                <div>邮箱：dianuo01@163.com</div>
                                <div>销售负责人：蔡经理 13390927597</div>
                                <div>技术负责人：廖经理 17366031527</div>
                            </div>

                            <div className="grid_div2">
                                <div style={{ fontSize: "30px", fontWeight: "700", lineHeight: "45px", color: "black", margin: "20px 0px" }}>分公司（办事处）</div>

                                <div className="grid_div2_gridLayout">
                                    <div>
                                        <div>北京、天津 杨经理 13301598827</div>
                                        <div>辽宁 刘经理 18840608985</div>
                                        <div>内蒙古、山东、河北、山西 孙经理 13382008961</div>
                                        <div>河南 刘经理 13305179707</div>
                                        <div>上海、浙江 于经理 13327716697</div>
                                    </div>

                                    <div>
                                        <div>陕西、甘肃、宁夏 毛经理 18066808398 / 13571982611</div>
                                        <div>四川、重庆、青海 毛经理 18066808398 / 13571982611</div>
                                        <div>广东 陈经理 13728698258</div>
                                        <div>云南 罗经理 15925205547</div>
                                        <div>新疆 蔡经理 13390927597</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="message_Container">
                    <div className="message_Content">
                        <div className="message_gridLayout">
                            <div className="grid_Message1">
                                <div className="blueUnderLine">
                                    <div style={{ fontSize: "32px", lineHeight: "64px", color: "#333333", marginTop: "20px", borderBottom: "3px solid #afafaf" }}>在线留言</div>
                                </div>

                                <div style={{ margin: "20px 0px 0px" }}>*注意: 请务必准确填写信息并保持通讯畅通，我们将尽快与您取得联系</div>

                                <div className="contact_InputBox">
                                    <div><input value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="姓名："></input></div>
                                    <div><input value={userphonenum} onChange={(e) => setUserPhoneNum(e.target.value)} type="tel" placeholder="电话："></input></div>
                                    <div><input required value={useremail} onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="邮箱："></input></div>
                                </div>

                                <div><textarea maxlength="255" rows="5" value={usermessage} onChange={(e) => setUserMessage(e.target.value)} type="text" placeholder="留言内容："></textarea></div>

                                <div className="submitBtn">
                                    <button onClick={handleUserMessage}>提交留言</button>
                                </div>
                            </div>
                            <div className="grid_Message2">
                                <img src="http://nas.wjq718.fun:10001/imageFiles/qd940p6f2t7g3xnu.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: "center" }}>
                    {
                        isMobile ? <iframe src="https://api.map.baidu.com/mapcardshow/7c114fa6160edfabf7b4631770dbf19f" width="768px" height="500px" frameborder="0" allowfullscreen></iframe>
                        : <iframe src="https://api.map.baidu.com/mapcardshow/7c114fa6160edfabf7b4631770dbf19f" width="1920px" height="500px" frameborder="0" allowfullscreen></iframe>
                    }
                </div>

                <div><Buttom /></div>
            </div>
        </div>
    )
}

export default Contact