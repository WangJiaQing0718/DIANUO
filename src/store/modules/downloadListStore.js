import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const downloadListStore = createSlice({
    name: 'downloadList',
    // 状态集合
    initialState: {
        downloadList: null,
        total_count: null,
        currentPage: 0,
        pageSize: 6
    },
    // 修改状态的方法
    reducers: {
        // 同步修改方法
        setDownloadList(state, action) {
            state.downloadList = action.payload;
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
const { setDownloadList, setCount, setCurrentPage } = downloadListStore.actions

// 异步请求数据
const getDownloadList = (pageIndex) => {
    return async (dispatch) => {
        const res = await axios.get(`http://nas.wjq718.fun:10025/download-list?skip=${pageIndex * 6}&limit=6`)
        // console.log("res:",res.data);
        dispatch(setDownloadList(res.data.data))
        dispatch(setCount(res.data.total_count))
        dispatch(setCurrentPage(pageIndex))
    }
}

export { getDownloadList }

const reducer = downloadListStore.reducer

export default reducer