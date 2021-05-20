<template>
    <div class="fillhp d-flex flex-column justify-content-start align-items-center">
        <b-navbar class="navbar navbar-dark bg-transparent">
        <b-navbar-nav id="nav-text">
        <b-navbar-brand href="#">
            <img src="../../assets/TeamMatchLogo.png" class="d-inline-block align-top nav-logo" style="width: 1.8vw; height: auto" alt="TeamMatch">
        </b-navbar-brand>
        <b-nav-item>FILL MY TEAM</b-nav-item>
        <b-nav-item class="text-primary">
            <span class="active">FIND MY TEAM</span>
        </b-nav-item>
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
                    <p class="pr-name" style="position:absolute;top: 0.6vw; left: 4vw">Gino Quispe</p>
                    <p class="pr-plan" style="position:absolute;top: 2vw; left: 3.75vw">Premium</p>
                </div>
                <div><img src="../../assets/ProfileDropdown.png" style="position:absolute; left: 10.5vw; top: 1.8vw"></div>
                </div>
            </template>
            <p class="not-title pr-title">Acciones</p>
            <b-button class="pr-action" href="/profile">
                <div class="pr-text"><p>• Editar Perfil</p></div>
            </b-button>
            <b-button class="pr-action" to="/">
                <div class="pr-text"><p>• Cerrar sesión</p></div>
            </b-button>
            </b-dropdown>
        </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
        <div class="content d-flex flex-column justify-content-around align-items-start">
        <div class="title-container">
            <h1 class="content-title"><span>Find your next</span> squad to get <span> the game going.</span></h1>
        </div>
        <p class="help-text">Utiliza esta opción si no posees un equipo y necesitas buscar un nuevo compañero o tu nuevo equipo.</p>
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
  name: "HomePage"
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/styles.scss";

.fillhp {
  height: 100%;
  width: 100%;
  background-image: url("./fill_team_BG.png");
  background-size: cover;
  background-position: center;
}

.content {
  margin-top: 6.5rem;
  height: 65%;
  width: 70%;
  margin-left: 2rem;
}

.title-container {
  width: 50%;
  height: 40%
}

.content-title {
  font-size: 4.5rem;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0px;
  color: #fff;
}

.help-text {
  text-align: center;
  font-size: 1.25rem;
  color: #fff;
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