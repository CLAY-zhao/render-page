import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// other
import naive from 'naive-ui'
import 'normalize.css'

const app = createApp(App)

// inject
app.use(store)
app.use(router)
app.use(naive)

// mount node
app.mount('#app')
