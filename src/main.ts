import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Styles
import './assets/header/header.css'
import './assets/main.css'

import './assets/variables.css'
import './assets/fonts.css'
import 'material-icons/iconfont/material-icons.css';
import '@glidejs/glide/dist/css/glide.core.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app');
