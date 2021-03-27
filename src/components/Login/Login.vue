<template>
  <div class="login">
      <div class="container">
        <div class = "row no-gutters">
          <div class = "col-lg-6">
            <img src ="./login-image.jpeg" class = "img-fluid" alt ="">
          </div>
          <div class = "col-lg-6 px-5 pt-5">
              <b-form name="login-form">
                  <div class="form-row pt-5"> 
                    <h3 class="pt-5">Inicia sesión</h3>
                  </div>
                  <div class="form-row"> 
                    <a>No tienes cuenta? <a href="#" style="color: #4D56D1; text-decoration: underline">  Registrate aqui</a></a> 
                  </div>
                  <div class="form-row  my-5 pt-3">
                      <div class="group">      
                        <input class="inp" type="text" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label class="lbl">Email o Username</label>
                      </div>
                  </div>
                  <div class="form-row  my-3">
                    <div class="group">      
                      <input class="inp" type="password" required>
                      <span class="highlight"></span>
                      <span class="bar"></span>
                      <label class="lbl">Password</label>
                    </div>
                  </div>
                  <div class="form-row my-3">
                    <label>
                      <input type="checkbox">
                      <h7 class="px-3"> Mantener la sesión iniciada</h7>
                    </label>
                  </div>  
                  <div class="form-row my-2 pt-3">
                      <button  type ="button" class = "btn mt-2">Iniciar Sesión</button>
                  </div>
                  <div class="form-row pt-5">
                      <a href="#" style="color: #4D56D1; text-decoration: underline">No recuerdas tu username o contraseña?</a>
                  </div>
              </b-form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
}
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  background-image: url("./img-background-login.jpeg");
  background-size: cover;
  background-position: center;
}

.row{
  background-color: #FFFFFF;
  position: absolute;
  top: 75px;
}
.btn{
    text-align: center;
    border-radius: 40px !important;
    outline: none;
    height: 50px;
    width: 100%;
    color: white !important;
    background-image: linear-gradient(to right, #7591FF 0%, #62B0DF  51%,#4DD1BE 100%);
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    &:hover{
        background: linear-gradient(to right, #6285af 0%, #678bb6  51%, #65acaa  100%);
        border: 1px  #f0f7f4;
        color : #f0f7f4;;
    }
}

.group 			  { 
  position:relative; 
  margin-bottom:45px; 
}
.inp 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}
.inp:focus 		{ outline:none; }

/* LABEL ======================================= */
.lbl 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

/* active state */
.inp:focus ~ .lbl, .inp:valid ~ .lbl 		{
  top:-20px;
  font-size:14px;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:300px; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#4D56D1; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
.inp:focus ~ .bar:before, .inp:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
.inp:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#4D56D1; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#4D56D1; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#4D56D1; }
  to 	{ width:0; background:transparent; }
}

input[type=checkbox] {
    transform: scale(1.5);
    color: #7591FF;
}
</style>