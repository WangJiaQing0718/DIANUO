import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const recruitPositionStore = createSlice({
    name: 'recruitPosition',
    initialState: {
        recruitPositionList: [],
        total_count: 0,
    },
    reducers: {
        // 同步修改方法
        setRecruitPositionList(state, action) {
            state.recruitPositionList = action.payload;
        },
        setCount(state, action) {
            state.count = action.payload;
        },
    }
})

// 解构action函数
const { setRecruitPositionList, setCount } = recruitPositionStore.actions

// 异步请求数据
const getRecruitPositionList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://nas.wjq718.fun:10025/recruit-list')
        // console.log("res:",res.data.total_count);
        dispatch(setRecruitPositionList(res.data.data))
        dispatch(setCount(res.data.total_count))
    }
}

export { getRecruitPositionList }

const reducer = recruitPositionStore.reducer

export default reducer