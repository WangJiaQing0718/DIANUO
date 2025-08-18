// 组合子模块，导出store实例
import navBarReducer from './modules/navBarStore'
import recruitPositionReducer from './modules/recruitPositionStore'
import serviceVideoReducer from './modules/serviceVideoStore'
import jobDetailReducer from './modules/jobDetailStore'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        navBar: navBarReducer,
        recruitPosition: recruitPositionReducer,
        serviceVideo: serviceVideoReducer,
        jobDetail: jobDetailReducer
    }
})

export default store