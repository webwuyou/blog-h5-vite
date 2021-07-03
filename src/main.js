import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style/index.less"
import { Button, NavBar, Tabbar, TabbarItem, PullRefresh, List } from 'vant';
// import 'vant/lib/index.css';
import router from "./router/index.js"
import $axios from "utils/axios.js"
import $config from "utils/config.js"
let app = createApp(App)
app.config.globalProperties.$axios = $axios
app.config.globalProperties.$config = $config
app.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(PullRefresh).use(List)
app.use(router).mount('#app')
