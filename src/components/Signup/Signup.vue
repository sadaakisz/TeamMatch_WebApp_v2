<template>
  <div class="signup d-flex justify-content-center align-items-center">
            <div class="container ">
                <div class = "row no-gutters">
                    <div class = "col-lg-5">
                        <img src ="./SUassets/image1.png" class = "imagen img-fluid" alt ="">
                    </div>
                    <div class = "col-lg-7 px-5 pt-5">
                        <br/><br/>
                        <div class="sub">
                        <h3>Regístrate en TeamMatch</h3>
                        <p>Ya tienes cuenta? <router-link to="/login">Inciar sesión aquí</router-link></p>
                        </div>
                        <form name="login-form">
                            <div class="group form-row">
                                <div class = "col-lg-7">
                                    <input type="text" required>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Name</label>
                                </div>
                            </div>
                            <div class="group form-row">
                                <div class = "col-lg-7">
                                    <input type="email" required>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Email</label>
                                </div>
                            </div>
                            <div class="group form-row">
                                <div class = "col-lg-7">
                                    <input type="password" required>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Password</label>
                                </div>
                            </div>
                            <div class="group form-row">
                                <div class = "col-lg-7">
                                    <input type="password" required>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Confirm Password</label>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button type ="button" class = "btn-grad mt-3 mb-5">Registrarse</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  </div>
</template>

<script>

export default {
  name: 'Signup',
  
  data() {
      return {
        value: ''
      }
  }

 
}
</script>

<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }
.sub{
  text-align: left;
}

.signup{
  height: 100%;
  width: 100%;
  background-image: url("./SUassets/bg.jpeg");
  background-size: cover;
  background-position: center;
  .row{
    max-height: 70vh ;
    background-color: #FFFFFF;
    box-shadow: 12px 12px 22px;
  }
}
.imagen{
  max-height: 70vh;
  width: 100%;
  object-fit: cover;
}

.group{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.btn-grad {
  background-image: linear-gradient(to right, #00C9FF 0%, #92FE9D  51%, #00C9FF  100%);
  border: none;
  outline: none;
  text-align: center;
  height: 50px;
  width: 100%;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 25px;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
}



/* LABEL ======================================= */
label 				 {
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
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#000000;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:300px; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#000000; 
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
input:focus ~ .bar:before, input:focus ~ .bar:after {
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
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#000000; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#000000; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#000000; }
  to 	{ width:0; background:transparent; }
}
  

</style>