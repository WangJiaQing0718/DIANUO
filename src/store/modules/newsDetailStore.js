import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const newsDetailStore = createSlice({
    name:"newsDetail",
    initialState: {
        newsDetail: null,
        currentNewsId: null
    },
    reducers: {
        setNewsDetail(state, action) {
            state.newsDetail = action.payload;
        },
        setCurrentNewsId(state, action) {
            state.currentNewsId = action.payload;
        }
    }
})

const { setNewsDetail, setCurrentNewsId } = newsDetailStore.actions

const getNewsDetail = (newsId) => {
    return async (dispatch) => {
        const res = await axios.get(`http://nas.wjq718.fun:10025/news-detail/${newsId}`);
        // console.log("res:", res.data);
        dispatch(setNewsDetail(res.data));
        dispatch(setCurrentNewsId(newsId));
    }
}

export { getNewsDetail }

const reducer = newsDetailStore.reducer

export default reducer