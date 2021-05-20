<template>
  <div class="createTeam">
    <b-navbar class="navbar navbar-dark bg-transparent">
      <b-navbar-nav id="nav-text">
        <b-navbar-brand href="#">
          <img
            src="../../assets/TeamMatchLogo.png"
            class="d-inline-block align-top nav-logo"
            style="width: 1.8vw; height: auto"
            alt="TeamMatch"
          />
        </b-navbar-brand>
        <b-nav-item class="text-primary">
          <span class="active">FILL MY TEAM</span>
        </b-nav-item>
        <b-nav-item>FIND A TEAM</b-nav-item>
        <b-nav-item>CHAT</b-nav-item>
        <b-nav-item>PROFILE</b-nav-item>
        <b-nav-item>
          <b-dropdown
            variant="link"
            toggle-class="text-decoration-none"
            class="nav-notification"
            no-caret
            right
          >
            <template
              #button-content
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <img
                src="../../assets/NotificationBell.png"
                style="margin-top: -0.56vw; width: 1.77vw; height: auto"
              />
            </template>
            <p class="not-title">Panel de<br />notificaciones</p>
            <b-card
              bg-variant="Light"
              title="• Solicitud de team"
              class="not-card"
              style="border-radius: 20px; font-size: 1vw"
            >
              <b-card-text class="not-card-text"
                >José Sanchez te ha invitado a unirse a su team.</b-card-text
              >
            </b-card>
          </b-dropdown>
        </b-nav-item>
        <b-nav-item>
          <b-dropdown
            variant="link"
            toggle-class="text-decoration-none"
            class="nav-profile"
            right
            no-caret
          >
            <template #button-content>
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: -0.84vw;
                "
              >
                <img
                  src="../../assets/ProfilePic.png"
                  style="
                    position: absolute;
                    top: 0.32vw;
                    left: 0.6vw;
                    width: 2.86vw;
                    height: auto;
                  "
                />
                <div style="margin-left: 2vw">
                  <p
                    class="pr-name"
                    style="position: absolute; top: 0.6vw; left: 4vw"
                  >
                    <!-- {{ fullName.split(" ").slice(0, 2).join(" ") }} -->hola
                  </p>
                  <p
                    class="pr-plan"
                    style="position: absolute; top: 2vw; left: 3.75vw"
                  >
                    Premium
                  </p>
                </div>
                <div>
                  <img
                    src="../../assets/ProfileDropdown.png"
                    style="position: absolute; left: 10.5vw; top: 1.8vw"
                  />
                </div>
              </div>
            </template>
            <p class="not-title pr-title">Acciones</p>
            <b-button class="pr-action" href="/profile">
              <div
                class="pr-text"
                id="show-btn"
                @click="$bvModal.show('bv-modal-example')"
              >
                <p>• Editar Perfil</p>
              </div>
            </b-button>
            <b-button class="pr-action" to="/">
              <div class="pr-text"><p>• Cerrar sesión</p></div>
            </b-button>
          </b-dropdown>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-row class="row1">
      <b-col>
        <div class="ali">
          <b-card class="card" text-variant="white">
            <h1>Buscando: {{ game }}</h1>
            <div v-for="game in filterByTerm" :key="game.id">
              <div v-on:click="juegoSeleccionado(game.name)">{{ game.name }}</div>
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div class="ali">
          <b-row class="widthrow-end">
            <b-progress :value="value" class="progress" variant="dark">
              <b-progress-bar :value="value">
                <span
                  ><strong>{{ value }} %</strong></span
                >
              </b-progress-bar>
            </b-progress>
          </b-row>
          <b-row class="widthrow-end">
            <h1 class="subtitle2">1/2</h1>
          </b-row>
          <b-row class="widthrow-end">
            <h1 class="Titulo">Team Settings</h1>
          </b-row>
          <b-row class="widthrow-end">
            <h2 class="subtitle">
              Selecciona el juego y los miembros de tu equipo
            </h2>
          </b-row>
          <b-row class="widthrow">
            <b-form-group class="group" invalid-feedback="Game is required">
              <b-form-input
                id="game-input"
                class="input"
                v-model="game"
                placeholder="Busque el juego aqui"
                required
              ></b-form-input>
            </b-form-group>
          </b-row>
          <b-row class="widthrow">
            <b-button class="continuar">Continuar</b-button>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title> Editar Perfil </template>
      <div class="d-block text-center">
        <h3>Hello {{ fullName }}!</h3>
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
      <b-button
        class="mt-3"
        block
        @click="
          $bvModal.hide('bv-modal-example');
          putData();
        "
        >Guardar</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateTeam",
  created() {},
  data: () => ({
    value: 50,
    max: 2,
    game: "",
    games: [{ name: "Fortnite" }, { name: "League of Legends" }, { name: "Dota 2" }, { name: "CSGO" }
    , { name: "Rocket League" }],
  }),
  methods: {
    route(location) {
      this.$router.push(location);
    },
    juegoSeleccionado(game) {
        alert(game)
        this.game = game
    },
  },
  computed: {
    filterByTerm() {
      return this.games.filter(game => {
        return game.name.toLowerCase().includes(this.game);
      });
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/styles.scss";

.group {
  width: 100%;
}

.Titulo {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 800;
}

.continuar {
  background-color: #252525;
  width: 100%;
  height: 3rem;
  border-color: #ff994a;
  border-radius: 20px;
}
.subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
}
.subtitle2 {
  font-size: 1rem;

  margin-top: 1rem;
}

.createTeam {
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

.row1 {
  margin: 5rem;
  height: 80%;
}
.widthrow {
  width: 80%;
  align-items: center;
  justify-content: center;
}
.widthrow-end {
  width: 80%;
  align-items: flex-end;
  justify-content: flex-end;
}
.progress {
  height: 1.5rem;
  width: 80%;
}
.card {
  margin: 1rem;
  width: 80%;
  height: 100%;
  background-color: #232323;
  border-radius: 80px 80px 0 0;
}
.input {
  background-color: #232323;
  color: white;
  width: 100%;
  height: 3rem;
  border-radius: 20px;
}
.ali {
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  flex-direction: column;
}
</style>
