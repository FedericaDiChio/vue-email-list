console.log('Vue', Vue);

const root = new Vue({
    el: "#root",
    data: {
        email: "",
    },
    methods: {},
    created(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res)=>{
            const { response } = res.data;
            console.log(response);
            this.email = response;
        })
    }
})