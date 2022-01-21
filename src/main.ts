/*
 * @GitHub: https://github.com/MaleWeb/vvtp
 * @version:
 * @Author: 扫地盲僧
 * @Date: 2022-01-19 16:19:27
 * @LastEditors: BlindMonk
 * @LastEditTime: 2022-01-21 19:31:49
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'
import './index.css'
import ArcoVue from '@arco-design/web-vue'

// 支持SVG
import 'virtual:svg-icons-register'

createApp(App).use(router).use(ArcoVue).use(piniaStore).mount('#app')
