<template>
    <component :is="layout" />
</template>

<script>
import BlankLayout from "@/layouts/blank/Blank";
import MainLayout from "@/layouts/main/Main";

export default {
    name: 'App',
    components: {
        MainLayout,
        BlankLayout
    },
    data() {
        return {
            layout: null,
        };
    },
    watch: {
        $route(to) {
            // set layout by route meta
            if (to.meta.layout !== undefined) {
                this.layout = to.meta.layout
                document.body.classList.add('login-page');
            } else {
                this.layout = "MainLayout" // this is default layout if route meta is not set
                document.body.classList.remove('login-page');
            }
        },
    },    
}
</script>