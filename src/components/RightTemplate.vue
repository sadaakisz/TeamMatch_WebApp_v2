<template>
  <b-navbar class="navbar navbar-dark bg-transparent">
    <b-navbar-nav id="nav-text">
      <b-navbar-brand href="#">
        <img src="../assets/TeamMatchLogo.png" class="d-inline-block align-top nav-logo" style="width: 1.8vw; height: auto" alt="TeamMatch">
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
            <img src="../assets/NotificationBell.png" style="margin-top: -0.56vw; width: 1.77vw; height: auto">
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
              <img src="../assets/ProfilePic.png" style="position:absolute; top: 0.32vw; left: 0.6vw; width: 2.86vw; height: auto">
              <div style="margin-left: 2vw">
                <p class="pr-name" style="position:absolute;top: 0.6vw; left: 4vw">Gino Quispe</p>
                <p class="pr-plan" style="position:absolute;top: 2vw; left: 3.75vw">Premium</p>
              </div>
              <div><img src="../assets/ProfileDropdown.png" style="position:absolute; left: 10.5vw; top: 1.8vw"></div>
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
</template>

<script>
export default {
  name: "RightTemplate"
}
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
body {
  height: 100%;
  display: grid;
  background-image: url("../assets/bg.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

</style>
