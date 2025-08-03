import { useState } from 'react'
import './index.scss'

const Consultancy = () => {
    const [username, setUserName] = useState('')
    const [userphonenum, setUserPhoneNum] = useState('')
    const [userarea, setUserArea] = useState('')
    const [userquestion, setUserQuestion] = useState('')

    // 存数据到后端数据库
    const handleUserMessage = async () => {
        if (!username) {
            alert('姓名是必填项');
            return; // 直接返回，不继续检查手机号
        }
        if (userphonenum.length !== 11) {
            alert('请检查号码');
            return;
        }
        if (userquestion.length > 255) {
            alert('问题内容最多255字符');
            return;
        }
        // console.log("Submit:", username, userphonenum, userarea, userquestion);
        try {
            const response = await fetch('http://nas.wjq718.fun:10025/store-user-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: [username, userphonenum, userarea, userquestion]
                }),
            });
            const result = await response.json();

            if (response.ok) {
                alert('提交成功！');
                setUserName('');
                setUserPhoneNum('');
                setUserArea('');
                setUserQuestion('');

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
        <div className="consultancy-container">
            <div className='consultancy-content'>
                <div className='headText1'>Get a Free Consultancy</div>
                <div className='headText2'>获得免费咨询</div>

                <div className='consultancy-inputBox'>
                    <div className="consultancy-input">
                        <input required value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="姓名*"></input>
                        <input required value={userphonenum} onChange={(e) => setUserPhoneNum(e.target.value)} type="tel" placeholder="电话*"></input>
                        <input value={userarea} onChange={(e) => setUserArea(e.target.value)} type="area" placeholder="地区"></input>
                        <input className="questionInput" required value={userquestion} onChange={(e) => setUserQuestion(e.target.value)} type="text" placeholder="您的问题描述*"></input>
                        <button onClick={handleUserMessage}>提 交</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultancy