import { useEffect, useState } from 'react';
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getRecruitPositionList } from '@/store/modules/recruitPositionStore';
import Pagination from '@/component/Pagination';


const Position = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const { recruitPositionList, count } = useSelector(state => state.recruitPosition)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecruitPositionList())
    }, [dispatch])
    // console.log("recruitPositionList:", recruitPositionList);


    return (
        <div className='position_Container'>
            <div className='position_Content'>
                <div className='position_GridLayout'>

                    {
                        recruitPositionList.map(item => (
                            <div className='position_GridItem'>
                                <div id='div1'>{item.position_name}</div>
                                <div id='div2'>招聘部门：{item.recruit_department}</div>
                                <div id='div3'>岗位职责：</div>
                                <div id='div4'>1、{item.position_statement.statement[0].description}；</div>
                                <div id='div4'>2、{item.position_statement.statement[1].description}；</div>
                            </div>
                        ))
                    }
                </div>

                <div style={{ marginTop: "50px"}}>
                    <Pagination
                        pageIndex={pageIndex}
                        totalPage={Math.ceil(count / 6)}
                        onPageChange={(newPage) => setPageIndex(newPage)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Position;