console.log('Vue', Vue);

const root = new Vue({
    el: "#root",
    data: {
        emails: [],
    },
    methods: {},
    computed: {
        sortedEmails(){
            return this.emails.sort();
        }
    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res)=>{
            const email = res.data.response;
            // console.log(response);
            this.emails.push(email);
            })
        }    
    },
})