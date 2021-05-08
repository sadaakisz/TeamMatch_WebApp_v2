<template>
  <div class="profile">
   <b-navbar class="navbar navbar-dark bg-transparent">
    <b-navbar-nav id="nav-text">
      <b-navbar-brand href="#">
        <img src="../../assets/TeamMatchLogo.png" class="d-inline-block align-top nav-logo" style="width: 1.8vw; height: auto" alt="TeamMatch">
      </b-navbar-brand>
      <b-nav-item class="text-primary">
        <span class="active">FILL MY TEAM</span>
      </b-nav-item>
      <b-nav-item>FIND A TEAM</b-nav-item>
      <b-nav-item>CHAT</b-nav-item>
      <b-nav-item>PROFILE</b-nav-item>
      <b-nav-item>
        <b-dropdown variant="link" toggle-class="text-decoration-none" class="nav-notification" no-caret right>
          <template #button-content style="display: flex; justify-content: center; align-items: center">
            <img src="../../assets/NotificationBell.png" style="margin-top: -0.56vw; width: 1.77vw; height: auto">
          </template>
          <p class="not-title">Panel de<br>notificaciones</p>
          <b-card bg-variant="Light" title="• Solicitud de team" class="not-card" style="border-radius: 20px; font-size: 1vw">
            <b-card-text class="not-card-text">José Sanchez te ha invitado a unirse a su team.</b-card-text>
          </b-card>
        </b-dropdown>
      </b-nav-item>
      <b-nav-item>
        <b-dropdown variant="link" toggle-class="text-decoration-none" class="nav-profile" right no-caret>
          <template #button-content>
            <div style="display: flex; align-items: center; justify-content: center; margin-top: -0.84vw">
              <img src="../../assets/ProfilePic.png" style="position:absolute; top: 0.32vw; left: 0.6vw; width: 2.86vw; height: auto">
              <div style="margin-left: 2vw">
                <p class="pr-name" style="position:absolute;top: 0.6vw; left: 4vw">{{fullName.split(' ').slice(0,2).join(' ')}}</p>
                <p class="pr-plan" style="position:absolute;top: 2vw; left: 3.75vw">Premium</p>
              </div>
              <div><img src="../../assets/ProfileDropdown.png" style="position:absolute; left: 10.5vw; top: 1.8vw"></div>
            </div>
          </template>
          <p class="not-title pr-title">Acciones</p>
          <b-button class="pr-action" href="/profile">
            <div class="pr-text" id="show-btn"
          @click="$bvModal.show('bv-modal-example')"
          ><p>• Editar Perfil</p></div>
          </b-button>
          <b-button class="pr-action" to="/">
            <div class="pr-text"><p>• Cerrar sesión</p></div>
          </b-button>
        </b-dropdown>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>

    <div class="title1 align-items-center justify-content-end d-flex">
      <h1 class="marg">Profile</h1>
    </div>

    <div class="ali">
      <b-card class="card" text-variant="white">
        <b-row>
          <b-col cols="4">
            <img class="gino" src="./assets/gino.png" />
            <h1>{{ fullName }}</h1>
            <h2>Premium</h2>
            <b-row class="my-3 espacio">
              <b-col>Edad</b-col>
              <b-col>{{ this.yearsOld }} años</b-col>
            </b-row>
            <b-row class="my-3 espacio">
              <b-col>Horas Jugadas</b-col>
              <b-col>{{ this.hours }}</b-col>
            </b-row>
            <b-row class="my-3 espacio">
              <b-col>K/D</b-col>
              <b-col>3.5</b-col>
            </b-row>
          </b-col>

          <b-col cols="8">
            <b-row class="my-5">
              <b-col><p class="subt">Game List</p></b-col>
              <b-col><p class="subt">My Rating</p></b-col>
              <b-col><p class="subt">Discord</p></b-col>
            </b-row>
            <b-row class="my-5">
              <b-col><img src="./assets/game.png" /></b-col>
              <b-col><img src="./assets/rating.png" /></b-col>
              <b-col><img src="./assets/discord.png" /></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title> Editar Perfil </template>
        <div class="d-block text-center">
          <h3>Hello {{fullName}}!</h3>
        </div>
        <form ref="form">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="fullName"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Username"
          label-for="username-input"
          invalid-feedback="Username is required"
        >
          <b-form-input
            id="username-input"
            v-model="username"
            required
          ></b-form-input>
        </b-form-group>
                <b-form-group
          label="description"
          label-for="description-input"
          invalid-feedback="description is required"
        >
          <b-form-input
            id="description-input"
            v-model="description"
            required
          ></b-form-input>
        </b-form-group>
                <b-form-group
          label="Gender"
          label-for="gender-input"
          invalid-feedback="gender is required"
        >
          <b-form-input
            id="gender-input"
            v-model="gender"
            required
          ></b-form-input>
        </b-form-group>
                <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="email is required"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            required
          ></b-form-input>
        </b-form-group>
                <b-form-group
          label="PhoneNumber"
          label-for="phoneNumber-input"
          invalid-feedback="phoneNumber is required"
        >
          <b-form-input
            id="phoneNumber-input"
            v-model="phoneNumber"
            required
          ></b-form-input>
          </b-form-group>
      </form>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example'); putData() "
          >Guardar</b-button
        >
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  created() {
    this.getProfile();
  },
  data: () => ({
    fullName: null,
    hours: null,
    date: null,
    year: null,
    yearsOld: null,
    username: null,
    description: null,
    gender: null,
    email: null,
    phoneNumber: null,
  }),
  methods: {
    route(location) {
      this.$router.push(location);
    },

    getProfile() {
      axios
        .get("https://teammatch-backend.herokuapp.com/api/players/1/profiles")
        .then((response) => {
          this.fullName = response.data.fullName;
          this.date = response.data.birthDate;
          this.year = new Date(this.date);
          this.yearsOld = 2021 - parseInt(this.year.getFullYear());
          this.username = response.data.username;
          this.description = response.data.description;
          this.gender = response.data.gender;
          this.email = response.data.email;
          this.phoneNumber = response.data.phoneNumber;
        });
      axios
        .get("https://teammatch-backend.herokuapp.com/api/players/1")
        .then((response) => {
          this.hours = response.data.hours;
        });
    },
    putData() {
      axios.put(
        "https://teammatch-backend.herokuapp.com/api/players/1/profiles",
        {
          fullName: this.fullName,
          username: this.username,
          description: this.description,
          gender: this.gender,
          email: this.email,
          phoneNumber: this.phoneNumber,
          birthDate: "2000-05-01T22:02:53.000+00:00",
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/styles.scss";
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

.gino {
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
  border-bottom: 1px solid #fff;
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
  margin: 7rem auto 0 auto;
}

.marg {
  margin-right: 2rem;
  font-size: 5rem;
  font-weight: 650;
}

.item {
  color: #fff;
  margin: 0;
  font-weight: 500;
  font-size: 0.9rem;
  &:hover {
    color: #ff283d;
    cursor: pointer;
    border-bottom: 1px solid #ff283d;
  }
}

.item2 {
  color: #ff283d;
  margin: 0;
  font-weight: 500;
  font-size: 0.9rem;
  border-bottom: 1px solid #ff283d;
  display: inline;
}

.dropd {
  border: none;
}
</style>