<template>
  <div class="home d-flex flex-column justify-content-start align-items-center">
    <div class="nav justify-content-around align-items-center">
      <img class="logo" src="../../assets/TeamMatchLogo.png">
      <p class="nav-link" @click="route('fillteamselectfilters')">FILL MY TEAM</p>
      <p class="nav-link" @click="route('findteamselectfilters')">FIND MY TEAM</p>
      <p class="nav-link" @click="route('chat')">CHAT</p>
      <p class="nav-link" @click="route('profile')">PROFILE</p>
      <b-button class="signup-btn" @click="route('signup')">REGISTRARSE</b-button>
      <b-button class="login-btn" variant="outline-light" @click="route('login')">INICIAR SESIÓN</b-button>
    </div>
    <div class="content d-flex flex-column justify-content-around align-items-start">
      <div class="title-container">
        <h1 class="content-title"><span>Search</span> for the last <span>member</span> of your squad.</h1>
      </div>
      <p class="help-text">Utiliza esta opción si ya posees un equipo pero necesitas completarlo con uno o más jugadores.</p>
      <div class="button-container d-flex justify-content-around">
        <b-button class="create-btn" @click="createTeam">Create team</b-button>
        <b-button class="select-btn" variant="outline-light" @click="selectFilters">Select filters</b-button>
        <b-button class="fill-btn" @click="fillTeam">Fill my team</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    route(location) {
      this.$router.push(location)
    },
    createTeam() {
      alert("event for creating team...");
    },
    selectFilters() {
      alert("event for selecting filters...");
    },
    fillTeam() {
      alert("event for filling team...");
    }
  }
}
</script>

<style scoped lang="scss">

* {
  margin: 0;
  box-sizing: border-box;
}

span {
  padding-bottom: 1px solid #fff;
}

.home {
  height: 100%;
  background-image: url("./bg1.png");
  background-size: cover;
  background-position: center;
  color: #fff;
}

.nav {
  height: 20%;
  width: 80%;
  font-weight: 500;
  font-size: .9rem;
  margin: 0 auto;
  min-height: 100px;
}

.nav-link {
  padding: 0;
  transition: all .1s ease-in-out;
  &:hover {
    color: #FF283D;
    cursor: pointer;
  }
}

@mixin nav-button {
  padding: .8rem 2rem;
  font-size: .75rem;
  font-weight: 600;
}

.signup-btn { 
  background: rgb(255,117,135);
  background: linear-gradient(103deg, rgba(255,117,135,1) 0%, rgba(255,153,74,1) 100%);
  border: none;
  @include nav-button;
  transition: all .1s ease-in-out;
  &:hover {
    filter: brightness(.6);
  }
}

.login-btn {
  box-sizing: border-box;
  background: none;
  @include nav-button;
  &:hover {
    background: #fff;
  }
}

.logo {
  height: 25%;
}

.content {
  height: 75%;
  width: 80%;
  margin-left: 2rem;
}

.title-container {
  width: 50%;
}

.content-title {
  font-size: 4.5rem;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0px;
}

.help-text {
  text-align: center;
  font-size: 1.25rem;
}

.button-container {
  width: 100%;
}

@mixin footer-button {
  border-radius: 50px;
  padding: .75rem 4rem;
  font-size: 1.75rem;
  font-weight: 400;
}

.create-btn {
  @include footer-button;
  background: #202020;
  color: #fff;
  border: 1px solid #FF994A;
  &:hover {
    background: #FF994A;
  }
}

.select-btn {
  @include footer-button;
  background: #202020;
  &:hover {
    background: #fff;
  }
}

.fill-btn {
  @include footer-button;
  background: rgb(255,117,135);
  background: linear-gradient(103deg, rgba(255,117,135,1) 0%, rgba(255,153,74,1) 100%);
  transition: all .1s ease-in-out;
  border: none;
  &:hover {
    filter: brightness(.6);
  }
}


</style>