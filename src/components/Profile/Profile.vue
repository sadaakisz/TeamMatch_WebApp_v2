<template>
  <div class="profile">
    <b-nav class="nav justify-content-between align-items-center" pills>
      <b-nav-item
        ><p @click="route('/')"><img class="logo" src="./assets/logo.png" /></p
      ></b-nav-item>
      <b-nav-item><p class="item" @click="route('/fillteam')">FILL MY TEAM</p></b-nav-item>
      <b-nav-item><p class="item" @click="route('/findteam')">FIND A TEAM</p></b-nav-item>
      <b-nav-item><p class="item" @click="route('/')">CHAT</p></b-nav-item>
      <b-nav-item><p class="item2" @click="route('/profile')">PROFILE</p></b-nav-item>
      <b-dropdown
        text="Gino Quispe"
        class="dropd"
        right
        variant="outline-light"
        
      >
        <b-dropdown-item>Editar Perfil</b-dropdown-item>
        <b-dropdown-item>Configuracion</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Cerrar Sesion</b-dropdown-item>
      </b-dropdown>
    </b-nav>

    <div class="title1 align-items-center justify-content-end d-flex">
      <h1 class="marg">Profile</h1>
    </div>

    <div class="ali">
      <b-card class="card" text-variant="white">
        <b-row>
          <b-col cols="4">
            <img class="gino" src="./assets/gino.png" />
            <h1>Gino Quispe</h1>
            <h2>Premium</h2>
            <b-row class="my-3 espacio">
              <b-col >Edad</b-col>
              <b-col>19 años</b-col>
            </b-row>
            <b-row class="my-3 espacio">
              <b-col >Horas Jugadas</b-col>
              <b-col>320 h</b-col>
            </b-row>
            <b-row class="my-3 espacio">
              <b-col >K/D</b-col>
              <b-col>3.5</b-col>
            </b-row>
          </b-col>

          <b-col cols="8">
            <b-row class="my-5">
              <b-col ><p class="subt">Game List</p></b-col>
              <b-col ><p class="subt">My Rating</p></b-col>
              <b-col ><p class="subt">Discord</p></b-col>
            </b-row>
            <b-row class="my-5">
              <b-col><img src="./assets/game.png" /></b-col>
              <b-col><img src="./assets/rating.png" /></b-col>
              <b-col><img src="./assets/discord.png" /></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    route(location) {
      this.$router.push(location);
    },
  },
};
</script>

<style scoped lang="scss">
.profile {
  height: 100%;
  width: 100%;
  background-image: url("assets/background.png");
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 0 !important;
  margin: 0;
  align-items: center;
  justify-content: center;
}

.gino{
  height: 35%;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}

.ali {
  display: flex;
  align-items: center;
  justify-content: center;
}

.subt {
  font-size: 2rem;
  border-bottom: 1px solid #FFF;
  display: inline;
}

.espacio {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.card {
  width: 80%;
  height: 70%;
  background-color: #232323;
  border-radius: 80px 80px 0 0;
}

.der {
  display: flex;
  align-items: right;
  justify-content: right;
}

.nav {
  width: 80%;
  height: 15%;
  margin: 0 auto;
}

.title1 {
  height: 10%;
  width: 80%;
  margin: 0 auto;
}

.marg {
  margin-right: 2rem;
  font-size: 5rem;
  font-weight: 650;
}

.item {
  color: #FFF;
  margin: 0;
  font-weight: 500;
  font-size: .9rem;
    &:hover {
    color: #FF283D;
    cursor: pointer;
    border-bottom: 1px solid #FF283D;
  }
}

.item2 {
  color: #FF283D;
  margin: 0;
  font-weight: 500;
  font-size: .9rem;
  border-bottom: 1px solid #FF283D;
  display: inline;

  
}

.dropd{
  border:none;
}
</style>