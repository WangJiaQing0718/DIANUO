import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const serviceVideoStore = createSlice({
    name: 'serviceVideo',
    initialState: {
        serviceVideoList: [],
        total_count: null,
        currentPage: 0,
        pageSize: 6
    },
    reducers: {
        setServiceVideoList(state, action) {
            state.serviceVideoList = action.payload;
        },
        setCount(state, action) {
            state.total_count = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
})

// 解构action函数
const { setServiceVideoList, setCount, setCurrentPage } = serviceVideoStore.actions

// 异步请求数据
const getServiceVideoList = (pageIndex) => {
    return async (dispatch) => {
        const res = await axios.get(`http://nas.wjq718.fun:10025/service-video?skip=${pageIndex * 6}&limit=6`)
        // console.log("res：", res.data.data);
        dispatch(setServiceVideoList(res.data.data))
        dispatch(setCount(res.data.total_count))
        dispatch(setCurrentPage(pageIndex))
    }
}

export { getServiceVideoList }

const reducer = serviceVideoStore.reducer

export default reducer