// 新闻详情页最新三条数据获取、上一页、下一页数据
import { createSlice } from "@reduxjs/toolkit";

const latestNewsStore = createSlice({
    name: 'latestNews',
    initialState: {
        latestNews: null,
        lastData: null,
        nextData: null
    },
    reducers: {
        setLatestNews(state, action) {
            state.latestNews = action.payload
        },
        setLastData(state, action){
            state.lastData = action.payload;
        },
        setNextData(state,action){
            state.nextData = action.payload
        }
    }
})

const { setLatestNews, setLastData, setNextData } = latestNewsStore.actions
const reducer = latestNewsStore.reducer

export { setLatestNews,setLastData, setNextData }
export default reducer