// 新闻详情页最新三条数据获取、上一页、下一页数据
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

// 异步请求数据
const getLatestNews = () => {
    return async (dispatch) => {
        const res = await axios.get("http://nas.wjq718.fun:10025/latestnews-list")
        // console.log("res：", res.data.data);
        dispatch(setLatestNews(res.data.data));
    }
}

const { setLatestNews, setLastData, setNextData } = latestNewsStore.actions
const reducer = latestNewsStore.reducer

export { setLatestNews,setLastData, setNextData, getLatestNews }
export default reducer