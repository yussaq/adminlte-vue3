import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from '../pages/dashboard/Dashboard';
import Infopage from '../pages/components/Infobox';

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/infobox",
        name: "Infobox",
        component: Infopage,
    }, 

    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;

