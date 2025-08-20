import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const newsTypeStore = createSlice({
    name: 'newsType',
    // 状态集合
    initialState: {
        newsType: null,
        total_count: null,
        currentPage: 0,
        pageSize: 6
    },
    // 修改状态的方法
    reducers: {
        // 同步修改方法
        setNewsType(state, action) {
            state.newsType = action.payload;
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
const { setNewsType, setCount, setCurrentPage } = newsTypeStore.actions

// 异步请求数据(getNewsType用于页面调用)
const getNewsType = (type, pageIndex) => {
    return async (dispatch) => {
        const res = await axios.get(`http://nas.wjq718.fun:10025/news-type/${type}?skip=${pageIndex * 6}&limit=6`)
        console.log("res:", res.data);
        dispatch(setNewsType(res.data.data))
        dispatch(setCount(res.data.total_count))
        dispatch(setCurrentPage(pageIndex))
    }
}

export { getNewsType }

const reducer = newsTypeStore.reducer

export default reducer