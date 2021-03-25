<template>
  <div class="login">
    <section class="Form">
      <div class="container">
        <div class = "row no-gutters">
          <div class = "col-lg-5">
            <img src ="./login-image.jpeg" class = "img-fluid" alt ="">
          </div>
          <div class = "col-lg-7 px-5 pt-5">
              <b-form name="login-form">
                  <div class="form-row pt-5"> 
                    <h3>Inicia sesión</h3>
                  </div>
                  <div class="form-row"> 
                    <a>No tienes cuenta? <a href="#">  Registrate aqui</a></a> 
                  </div>
                  <div class="form-row  my-5">
                    <h6>Email o Username</h6>
                    <input v-model="Email" type = "email" name="email" id="email" placeholder ="Correo-Electronico" class ="form-control" required>
                  </div>
                  <div class="form-row  my-5">
                     <h6>Contraseña</h6>
                      <input v-model="Password" type = "password" name="password" id="password" placeholder ="Contraseña" class ="form-control" required>
                  </div>
                  <div class="form-row  my-3">
                    <b-form-checkbox>Mantener la sesión iniciada</b-form-checkbox>
                  </div>  
                  <div class="form-row my-3">
                      <button  type ="button" class = "btn mt-3 mb-5">Inicicar Sesion</button>
                  </div>
                  <div class="form-row">
                      <a href="#">No recuerdas tu username o contraseña?</a>
                  </div>
              </b-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Login',
}
</script>

<style scooped lang="scss">
.login {
  height: 100%;
  background-image: url("./img-background-login.jpeg");
  background-size: cover;
  background-position: center;
}

.row{
  background-color: #FFFFFF;
  position: absolute;
  top: 140px;
}
.btn{
  text-align: center;
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    color: white !important;
    background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
    border-radius: 10px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    &:hover{
        background: linear-gradient(to right, #6285af 0%, #65acaa  51%, #678bb6  100%);
        border: 1px  #f0f7f4;
        color : #f0f7f4;;
    }
}
</style>