import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const jobDetailStore = createSlice({
    name: 'jobDetail',
    initialState: {
        jobDetail: null,
        currentJobId: null,
    },
    reducers: {
        setJobDetail(state, action) {
            state.jobDetail = action.payload;
        },
        setCurrentJobId(state, action) {
            state.currentJobId = action.payload;
        }
    }
})

// 解构action函数
const { setJobDetail, setCurrentJobId } = jobDetailStore.actions

// 异步请求数据
const getJobDetail = (jobId) => {
    return async (dispatch) => {
        const res = await axios.get(`http://nas.wjq718.fun:10025/recruit-detail/${jobId}`)
        // console.log("res：", res.data);
        dispatch(setJobDetail(res.data));
        dispatch(setCurrentJobId(jobId));
    }
}

export { getJobDetail }

const reducer = jobDetailStore.reducer

export default reducer