export default{
    name: 'Header',

    data() {
        return {
            //state loggedIn with localStorage
            loggedIn: localStorage.getItem('loggedIn'),
            //state token
            token: localStorage.getItem('token'),
            //state user logged In
        }
    },
    methods: {
        sidebarcollapse(){
            console.log('sidebarcollapse')
        },
    },
}