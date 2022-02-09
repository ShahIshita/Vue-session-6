const app = Vue.createApp({
    data() {
        return {
            
            friends: [
               { 
               id: 'ishita', 
               name: 'Ishita Shah',
               phone: '0897 567 991', 
               email: 'ishita@gmail.com' 
               },
               { 
                id: 'disha', 
                name: 'Disha Shastri',
                phone: '09876 543 221', 
                email: 'disha@gmail.com' 
                },
           ],
        };
    },
   
  

});

app.component('user-contact', {
    template: `
    <li >
          <h2>{{ friend.name }}</h2>
          <button @click="toggledetails">
             {{ detailsvisible ? 'Hide' : 'Show' }} Details
            </button>
          <ul v-if="detailsvisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
        `,
    data() {
        return { 
            detailsvisible: false,
            friend: { 
                id: 'ishita', 
                name: 'Ishita Shah',
                phone: '0897 567 991', 
                email: 'ishita@gmail.com' 
                },
        };
        },
    methods: {
        toggledetails() {
            this.detailsvisible = !this.detailsvisible;
          } 
    }
});

app.mount('#app');