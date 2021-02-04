<template>
  
    <v-card width="600px" class="mt-12 pa-10">
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
      this.axios.get('http://37.77.104.246/api/jsonstorage/?id=16ee4b9231531f6fae10c5eeabcbb8b9')
        .then(
            (response=>{
                let users=response.data;
                let found=false;
                for(let index in users){
                    if (this.login == users[index].login && this.password == users[index].password) {
                        this.$router.push('/users/'+this.myId);
                        found = true;
                        break;
                    }
                }
                if(!found){
                    window.alert('Error')
                }
            })
        )
    }
  }
}
</script>
