//import SidebarMenuItem from '@/components/SidebarMenuItem.vue'

export default {
    name: 'Sidebar',    
    components: {
//    SidebarMenuItem
    },  

    data() {
        return {
            isOpen: false,
            items: [{ message: 'Foo' }, { message: 'Bar' }],
            nama : "Yussaq",
            umur : 5,                 
            menuItems: [
                {
                    id  : 1,
                    title : "Electronics",
                    link: "#",
                    children: [
                        {
                            id  : 2,
                            title : "TVs",
                            link: '/category/2/tvs',
                            children: []
                        },
                        {
                            id  : 3,
                            title : "Computers",
                            link: '#',
                            children: [
                                {
                                    id: 4,
                                    title: 'Dell',
                                    link: '/category/4/dell',
                                },
                                {
                                    id: 5,
                                    title: 'HP',
                                    link: '/category/5/hp',
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 6,
                    title : "Fashion",
                    link: '#',
                    children : [
                        {
                            id: 7,
                            title: 'Men',
                            link: '/category/7/men',
                            children: []
                        },
                        {
                            id: 8,
                            title: 'Women',
                            link: '/category/8/women',
                            children: []
                        }
                    ]
                },
                {
                    id: 9,
                    title: 'Accessories',
                    link: '/category/9/accessories',
                    children: []
                }
            ],
        }
    },

    methods: {
            toggleMenu() {
                this.isOpen = !this.isOpen
             }
    }    
}