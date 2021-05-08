<template>
  <div class="loginSuccess">
      <div class="container">
        <div class = "row no-gutters">
          <div class = "col-lg-6">
            <img src ="./login-image.jpeg" class = "img-fluid" alt ="">
          </div>
          <div class = "si col-lg-6 px-5 mt-5">
            <b-form name="loginSuccess-form mt-5">
              <div class="form-row mt-5">
                <img src="./check_icon.png" class = "img-check mt-5" alt ="">
              </div>
              <div class="form-row"> 
                <h3 class="pt-5">Inicio de Sesion Satisfactorio!</h3>
              </div>
              <div class="form-row pt-5">
                <p>Has iniciado sesion como : </p>
              </div>
              <div class="form-row">
                <p>{{pUsername}}</p>
              </div>
              <div class="form-row">
                <p>Redirigiendo a la pagina principal</p>
              </div>
            </b-form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { baseURL } from '@/baseURL';
import axios from "axios";
export default {
  name: 'Login',
  data: ()=>{
    return{
      player: null,
      pUsername: null
    }
  },
  mounted() {
    axios.get(baseURL + 'players/1').then(response => {
      this.player = response.data
      this.pUsername = this.player.username;
    })
  },
  methods:{
  }
}
</script>

<style scoped lang="scss">
.si{
  padding-top: 10%;
}
.form-row h3{
  font-weight: 600;
  text-decoration-line:underline;
}

.loginSuccess {
  height: 100%;
  background: url("./img-background-login.jpeg");
  background-size: cover;
  background-position: center;
}

.row{
  background-color: #FFFFFF;
  position: absolute;
  top: 6%;
}

.img-check{
  width: 50px;
  height: 50px;
  margin: auto;
  display: block;
  margin-left: 0;
}

</style>