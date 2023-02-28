//全部引入会导致大量不需要的资源被浪费，所以可以选择部分引入
//引入的element-ui全放在main.js中不美观，因此创建plugins来存放element样式
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//部分引入
// import Vue from 'vue';
// import { Button } from 'element-ui';

// Vue.use(Button);