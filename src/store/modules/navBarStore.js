import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const navBarStore = createSlice({
    name: 'navBar',
    initialState: {
        navBarList: []
    },
    reducers: {
        // 同步修改方法
        setNavBarList(state, action) {
            state.navBarList = action.payload
        }
    }
})

// 解构action函数
const { setNavBarList } = navBarStore.actions

// 异步请求数据
const getNavBarList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://nas.wjq718.fun:10022/router')
        // console.log("res:",res)
        dispatch(setNavBarList(res.data.data))
    }
}

export { getNavBarList }

const reducer = navBarStore.reducer

export default reducer