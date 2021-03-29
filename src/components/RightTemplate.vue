<template>
  <b-navbar class="navbar navbar-dark bg-transparent">
    <b-navbar-nav id="nav-text">
      <b-navbar-brand href="#">
        <img src="../assets/TeamMatchLogo.png" class="d-inline-block align-top nav-logo" style="width: 41px; height: auto" alt="TeamMatch">
      </b-navbar-brand>
      <b-nav-item class="text-primary">
        <span class="text active">AÑADE CLIENTES</span>
      </b-nav-item>
      <b-nav-item>VER CUENTAS</b-nav-item>
      <b-nav-item>REGISTRAR PAGOS</b-nav-item>
      <b-nav-item>REGISTRAR VENTAS</b-nav-item>
      <b-nav-item>
        <b-button size="lg" class="nav-btn-registrarse">
          <p class="text">REGISTRARSE</p>
        </b-button>
      </b-nav-item>
      <b-nav-item>
        <b-button size="lg" class="nav-btn-iniciar">
          <p class="text">INICIAR SESIÓN</p>
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "RightTemplate"
}
</script>

<style lang="scss">
body {
  height: 100%;
  display: grid;
  background-image: url("../assets/bg.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.text {
  position: relative;
  font-family: Gilroy ☞, Avenir, Helvetica, Arial, sans-serif;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 700;
  color: #fff;
  margin: auto;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  margin: 0 auto;
  height: 3.6vw;
  width: 100vw;
}

#nav-text > * {
  margin-left: 2vw;
  display: grid;
  place-items: center;
}
.text-primary {
  //background-image: url("../assets/ActiveTab.png");
  background-size: 12vw auto;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-position: center 1.4em;
  width: 12em;
  .active {
    color: #eee;
    font-size: 1em;
    position: relative;
    left: 1em;
  }
}
.nav-btn-registrarse {
  transition: 0.3s;
  width: 11.5vw;
  height: 3.5vw;
  border-radius: 4px;
  background: linear-gradient(90deg, #4bc8f8 0%, #6e93f9 100%);
}

.nav-btn-registrarse:hover {
  border: 3px solid #648dff;
  background: transparent;
}

.nav-btn-iniciar {
  transition: 0.3s;
  width: 11.5vw;
  height: 3.5vw;
  border: 2px solid #fff;
  border-radius: 4px;
  background: transparent;
}

.nav-btn-iniciar:hover {
  border-radius: 4px;
  border: none;
  background: linear-gradient(90deg, #4d56d1 0%, #da71ff 100%);
}
</style>
