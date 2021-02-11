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
       <v-text-field
       label="Имя"
       v-model="name"
       outlined
       ></v-text-field>
       <v-text-field
       label="Website"
       v-model="website"
       outlined
       ></v-text-field>
       <v-text-field
       label="E-mail"
       v-model="email"
       outlined
       ></v-text-field>
       <v-text-field
       label="Город"
       v-model="city"
       outlined
       ></v-text-field>
       <v-text-field
       label="Компания"
       v-model="company"
       outlined
       ></v-text-field>
       <v-text-field
       label="Фото"
       v-model="photo"
       outlined
       ></v-text-field>
       
        <v-btn @click="reg">
          Зарегистрироваться
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
      name: undefined,
      website: undefined,
      company: undefined,
      city: undefined,
      photo: undefined,
      email: undefined,


      storage: ''
    }
  },
  methods: {
    reg(){
        let reg_data = []
      axios.get('http://37.77.104.246/api/jsonstorage/?id=16ee4b9231531f6fae10c5eeabcbb8b9')
        .then(res=>
            {
              reg_data = res.data;
            }
        );
        reg_data.push({
            login: this.login,
            password: this.password,
            name: this.name,
            website: this.website,
            company: this.company,
            city: this.city,
            photo: this.photo,
            email: this.email,

        });
        axios.put('http://37.77.104.246/api/jsonstorage/?id=16ee4b9231531f6fae10c5eeabcbb8b9',
        {
            reg_data,
        })
        .then(res=>{
            console.log(res)
        })
    }
  }
}
</script>
