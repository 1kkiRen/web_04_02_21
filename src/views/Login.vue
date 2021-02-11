<template>
  
    <v-card width="600px" class="mt-12 pa-10" style="margin: 20px">
      <v-text-field
       label="Логин"
       v-model="login"
       outlined
       ></v-text-field>
        <v-text-field
       label="Пароль"
       v-model="password"
       outlined
       ></v-text-field>
        <v-btn @click="auth">
          Вход
        </v-btn>
    </v-card>   
      
    
  
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      login: undefined,
      password: undefined,
      storage: ''
    }
  },
  methods: {
    auth(){
      axios.get('http://37.77.104.246/api/jsonstorage/?id=ab4968e2190d51c3c6ebab50b0631d9e')
        .then(res=>
            {
              console.log(res.data)
              let found = false;
                for(let i = 0; i<res.data.length; i++){
                  console.log("===========")
                    if (this.login == res.data[i].login && this.password == res.data[i].password) {                      
                        this.$router.push('/users/'+res.data[i].login);
                        this.$emit('auth', res.data[i])
                        found = true;
                        break;
                    }
                }
                if(!found){
                    window.alert('Error')
                }
            }
        )
    }
  }
}
</script>
