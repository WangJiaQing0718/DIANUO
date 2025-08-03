// 组合子模块，导出store实例
import navBarReducer from './modules/navBarStore'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        navBar: navBarReducer
    }
})

export default store