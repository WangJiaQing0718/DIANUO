import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const downloadDetailStore = createSlice({
    name:"downloadDetail",
    initialState: {
        downloadDetail: null,
        currentDownloadId: null,
        lastData: null,
        nextData: null
    },
    reducers: {
        setDownloadDetail(state, action) {
            state.downloadDetail = action.payload;
        },
        setCurrentDownloadId(state, action) {
            state.currentDownloadId = action.payload;
        },
        setLastData(state, action){
            state.lastData = action.payload;
        },
        setNextData(state,action){
            state.nextData = action.payload
        }
    }
})

const { setDownloadDetail, setCurrentDownloadId, setLastData, setNextData } = downloadDetailStore.actions

const getDownloadDetail = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`http://nas.wjq718.fun:10025/download-detail/${id}`);
        // console.log("res:", res.data);
        dispatch(setDownloadDetail(res.data));
        dispatch(setCurrentDownloadId(id));
    }
}

export { getDownloadDetail, setDownloadDetail, setLastData, setNextData }

const reducer = downloadDetailStore.reducer

export default reducer