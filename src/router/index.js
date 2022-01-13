import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from '../pages/dashboard/Dashboard';
import Infopage from '../pages/components/Infobox';
import Card from '../pages/components/Card';

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
    {
        path: "/card",
        name: "Card",
        component: Card,
    },     

    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;

