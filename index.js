const app = Vue.createApp({
    data() {
        return{
             firstName: 'Fortune',
             lastName: 'Nwajikau',
             email: 'johndoe@gmail.com',
             gender: 'male',
             picutre: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
      async getUser() {
         const res = await fetch('https://randomuser.me/api')
         const { results} = await res.json()
            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last 
            this.email  = results[0].email
            this.gender = results[0].gender
            this.picutre = results[0].picutre.large
        }
    }
})

app.mount("#app")
