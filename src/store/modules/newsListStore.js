import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const newsListStore = createSlice({
    name: 'newsList',
    // 状态集合
    initialState: {
        newsList: null,
        total_count: null,
        currentPage: 0,
        pageSize: 6
    },
    // 修改状态的方法
    reducers: {
        // 同步修改方法
        setNewsList(state, action) {
            state.newsList = action.payload;
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
const { setNewsList, setCount, setCurrentPage } = newsListStore.actions

// 异步请求数据(getNewsList用于页面调用)
const getNewsList = (pageIndex) => {
    return async (dispatch) => {
        const res = await axios.get(`http://nas.wjq718.fun:10025/news-list?skip=${pageIndex * 6}&limit=6`)
        // console.log("res:",res.data);
        dispatch(setNewsList(res.data.data))
        dispatch(setCount(res.data.total_count))
        dispatch(setCurrentPage(pageIndex))
    }
}

export { getNewsList }

const reducer = newsListStore.reducer

export default reducer