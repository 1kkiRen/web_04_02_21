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
      axios.get('http://37.77.104.246/api/jsonstorage/?id=16ee4b9231531f6fae10c5eeabcbb8b9')
        .then(res=>
            {
              let found = false;
                for(let i = 0; i<res.data.length; i++){
                  console.log(res.data)
                    if (res.data[i].login == this.login && this.password == res.data[i].password) {                      
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
