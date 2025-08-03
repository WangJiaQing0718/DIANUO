import { useNavigate } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react';
import './index.scss'
import axios from 'axios';

const SideBar = () => {
    const [contactList, setContactList] = useState({})
    const [sideBarNum, setSideBarNum] = useState(0)

    useEffect(() => {
        const fetchURL = async () => {
            try {
                const res = await axios.get('http://nas.wjq718.fun:10022/tel');
                // console.log("res:",res.data.data);
                setContactList(res.data.data);
                setSideBarNum(res.data.data.departTel.length + 2);
            } catch (error) {
                console.error('Error fetching URL:', error);
            }
        }
        fetchURL();
    })

    // 设置导航栏打开状态
    const [sidebarVisible, setSidebarVisible] = useState(Array(sideBarNum).fill(false));

    const handleMouseEnter = (index) => {
        setSidebarVisible(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
        });
    };

    const handleMouseLeave = (index) => {
        setSidebarVisible(prev => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
        });
    };


    return (
        <div>
            <div className='sideBar'>
                {/* firmTel */}
                <div className={`${sidebarVisible[0] ? 'hidden' : 'unhidden'}`}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                    style={{ marginTop: `${0 * 51}px` }}
                >
                    <tr>
                        <th className='icon'>
                            <img src="http://nas.wjq718.fun:10001/imageFiles/tmc1wakf6095qbzj.png" alt="firmTel" className='icon' />
                        </th>
                        <th className='textTel'>{contactList.firmTel}</th>
                    </tr>
                </div>

                {/* 部门联系人 */}
                {
                    contactList?.departTel?.map((item, index) => (
                        <div key={index}
                            className={`${sidebarVisible[index+1] ? 'hidden' : 'unhidden'}`}
                            onMouseEnter={() => handleMouseEnter(index+1)}
                            onMouseLeave={() => handleMouseLeave(index+1)}
                            style={{ marginTop: `${(index + 1) * 51}px` }}
                        >
                            <tr>
                                <th className='icon'>
                                    <img src="http://nas.wjq718.fun:10001/imageFiles/tmc1wakf6095qbzj.png" alt="email" className='icon' />
                                </th>
                                <th className='textTel'>{item.tel}</th>
                            </tr>
                        </div>
                    ))
                }


                {/* email */}
                <div className={`${sidebarVisible[sideBarNum - 1] ? 'hidden' : 'unhidden'}`}
                    onMouseEnter={() => handleMouseEnter(sideBarNum - 1)}
                    onMouseLeave={() => handleMouseLeave(sideBarNum - 1)}
                    style={{ marginTop: `${(sideBarNum-1) * 51}px` }}
                >
                    <tr>
                        <th className='icon'>
                            <img src="http://nas.wjq718.fun:10001/imageFiles/e4ay3qrixp7dwfu8.png" alt="email" className='icon' />
                        </th>
                        <th className='textTel'>{contactList.email}</th>
                    </tr>
                </div>
            </div>


        </div>
    )
}

export default SideBar;