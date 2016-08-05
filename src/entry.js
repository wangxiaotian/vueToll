// 测试下
document.getElementById('app').innerHTML = "这是我第一个打包成功的程序";


// 导入样式文件
import 'css/bootstrap';

// 导入Vue 模块
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 载入组件
import nav from './components/navbar';

// 注册组件
Vue.component('navbar',nav);

// 使用Vue插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 初始化路由
var router = new VueRouter();

