import { createApp } from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import router from './router'
import './index.scss'

import App from './App.vue'
const app = createApp(App)  

//app.config.globalProperties.$usertoken = "XXXXXXX"

// autmatic import component folder
// require.context(The relative path of the components folder , Whether or not to look in subfolders, The regular expression used to match base component filenames)
const requireComponent = require.context('./components/global',  false,  /\.vue$/) 
requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
        // Gets the file name regardless of folder depth
        fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    )

    app.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    )  
})

app.use(router).mount('#app')