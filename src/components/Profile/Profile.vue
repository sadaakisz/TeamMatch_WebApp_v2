<template>
  <div class="profile">
    <b-nav class="nav justify-content-between align-items-center" pills>
      <b-nav-item
        ><p @click="route('/')"><img class="logo" src="./assets/logo.png" /></p
      ></b-nav-item>
      <b-nav-item
        ><p class="item" @click="route('/fillteam')">
          FILL MY TEAM
        </p></b-nav-item
      >
      <b-nav-item
        ><p class="item" @click="route('/findteam')">FIND A TEAM</p></b-nav-item
      >
      <b-nav-item><p class="item" @click="route('/')">CHAT</p></b-nav-item>
      <b-nav-item
        ><p class="item2" @click="route('/profile')">PROFILE</p></b-nav-item
      >
      <b-dropdown
        text="Gino Quispe"
        class="dropd"
        right
        variant="outline-light"
      >
        <b-dropdown-item
          id="show-btn"
          @click="$bvModal.show('bv-modal-example')"
          >Editar Perfil</b-dropdown-item
        >
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
          <h3>Hello {{this.fullName}}!</h3>
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
  margin: 0 auto;
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