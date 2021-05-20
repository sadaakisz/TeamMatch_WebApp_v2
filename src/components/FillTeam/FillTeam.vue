<template>
  <div class="fill">    
    
    <div class="nav-container">
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
    </div>

    <div class="title-container">
      <div class="title">Select Filters</div>
    </div>
    
      <div class="filters">     
        <div class="labels">
          <b-form-group id="input-group-1" class="form-text">Juego:</b-form-group>        
          <b-form-group id="input-group-2" class="form-text">Rango de edad:</b-form-group>                
          <b-form-group id="input-group-3" class="form-text">Región:</b-form-group>        
          <b-form-group id="input-group-4" class="form-text">Preferencia de país:</b-form-group>        
          <b-form-group id="input-group-5" class="form-text">Estilo de juego:</b-form-group>        
          <b-form-group id="input-group-6" class="form-text">Nivel de cuenta:</b-form-group>
        </div>
        <b-form class="inputs">
          <b-form-input class="input-game" id="input-1" placeholder="P. ej: TFT"></b-form-input>          
          <b-form-input class="input-age-left" id="input-2" placeholder="Ej. 18"></b-form-input>          
          <b-form-input class="input-age-right" id="input-2" placeholder="Ej. 24"></b-form-input>
          <b-form-group v-if="!regionChecked" class="region-left-selected"><b><u>LOCAL</u></b></b-form-group>
          <b-form-group v-else class="region-left"><b>LOCAL</b></b-form-group>
          <b-form-checkbox class="check-region" v-model="regionChecked" name="check-region" required switch></b-form-checkbox>              
          <b-form-group v-if="regionChecked" class="region-right-selected"><b><u>INTERNACIONAL</u></b></b-form-group>
          <b-form-group v-else class="region-right"><b>INTERNACIONAL</b></b-form-group>  
          <b-form-input class="input-country" id="input-4" placeholder="Perú"></b-form-input>
          <b-form-group v-if="!playstyleChecked" class="playstyle-left-selected"><b><u>CASUAL</u></b></b-form-group>
          <b-form-group v-else class="playstyle-left"><b>CASUAL</b></b-form-group>
          <b-form-checkbox class="check-playstyle" v-model="playstyleChecked" name="check-region" required switch></b-form-checkbox>
          <b-form-group v-if="playstyleChecked" class="playstyle-right-selected"><b><u>COMPETITIVO</u></b></b-form-group>
          <b-form-group v-else class="playstyle-right"><b>COMPETITIVO</b></b-form-group>
          <b-form-input class="input-level" id="input-6" placeholder="Ej. 55"></b-form-input>

          <b-btn class="btn-aceptar">Aceptar y filtrar</b-btn>
        </b-form>

           
    </div>  
  </div>


</template>

<script>

export default {
  name: 'FillTeam',
  data(){
    return {
      regionChecked: false,
      playstyleChecked: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/styles.scss";

  .fill {
    height: 100%;
    background-image: url("./assets/fill_team_BG.png");
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-rows: 10% 20% auto;
  }


  .title-container{
    display: grid;
    align-content: center;
    grid-row-start: 2;
    grid-template-columns: 15% 40% auto;
  }

  .title{
    color: #f2f2f2;
    font-size: 4.469rem;
    font-weight: 600;
    grid-column-start: 2;
    justify-self: left;    
  }

  .filters{    
    display: grid;
    grid-template-columns: 15% 20% 50% 15%;
    align-self: start;
    grid-row-start: 3;  
  }

  .labels{
    display: grid;
    grid-template-rows: 14.28% 14.28% 14.28% 14.28% 14.28% 14.28% 14.28%;
    grid-column-start: 2;
    grid-row-start: 2;
    row-gap: 5%;
  }

  .inputs{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 14.28% 14.28% 14.28% 14.28% 14.28% 14.28% 14.28%;
    column-gap: 2.5%;
    grid-column-start: 3;
    grid-row-start: 2;
    row-gap: 5%;
  }

  .form-text{
    color: #f2f2f2;
    font-size: 1.5rem;
    text-align: left;
  }

  .input-game{
    background-color: #232323;
    border-radius: 3.125vw;
    border-width: 0.12vw;
    color: #FFFF;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 4;
    width: 35vw;
  }

  .input-age-left{
    background-color: #232323;
    border-radius: 3.125vw;
    border-width: 0.12vw;
    color: #FFFF;
    text-align: center;
    grid-row-start: 2;
    grid-column-start: 1;
    width: 45%;
    justify-self: left;
  }

  .input-age-right{
    background-color: #232323;
    border-radius: 3.125vw;
    border-width: 0.12vw;
    color: #FFFF;
    text-align: center;
    grid-row-start: 2;
    grid-column-start: 1;
    width: 45%;
    justify-self: right;
  }

  .region-left{
    grid-row-start: 3;
    grid-column-start: 1;
    color: #f2f2f2;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .region-left-selected{
    grid-row-start: 3;
    grid-column-start: 1;
    color: #FC2C48;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .region-right{
    grid-row-start: 3;
    grid-column-start: 2;
    color: #f2f2f2;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .region-right-selected{
    grid-row-start: 3;
    grid-column-start: 2;
    color: #FC2C48;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .playstyle-left{
    grid-row-start: 5;
    grid-column-start: 1;
    color: #f2f2f2;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .playstyle-left-selected{
    grid-row-start: 5;
    grid-column-start: 1;
    color: #FC2C48;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .playstyle-right{
    grid-row-start: 5;
    grid-column-start: 2;
    color: #f2f2f2;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .playstyle-right-selected{
    grid-row-start: 5;
    grid-column-start: 2;
    color: #FC2C48;
    font-size: 1rem;
    justify-self: left;
    align-self: center;
  }

  .input-country{
    background-color: #232323;
    border-radius: 3.125vw;
    border-width: 0.12vw;
    color: #FFFF;
    grid-row-start: 4;
    grid-column-start: 1;
    grid-column-end: 4;
    width: 35vw;
  }

  .input-level{
    background-color: #232323;
    border-radius: 3.125vw;
    border-width: 0.12vw;
    color: #FFFF;
    text-align: center;
    grid-row-start: 6;
    grid-column-start: 1;
    grid-column-end: 2;
    width: 45%;
  }

  .check-region{
    grid-row-start: 3;
    grid-column-start: 1;
    width: 15%;
    justify-self: right;
    width: 60%;
    align-self: center;
    height: 75%;    
  }

  .check-playstyle{
    grid-row-start: 5;
    grid-column-start: 1;
    width: 60%;
    justify-self: right;
    align-self: center;
    height: 75%;
  }

  .btn-aceptar{
    font-family: Gilroy ☞;
    font-size: 1.65vw;    
    font-weight: 600;
    color: #fff;
    border-radius: 3.125vw;
    border-color: #FF994A;
    grid-row-start: 7;
    grid-column-start: 2;
    width: 21vw;
    text-align: center;
    background: #232323 url('../FillTeam/assets/Forward arrow.png');
    background-repeat: no-repeat;
    background-position-y:  center;
    background-position-x: 5%;
    align-self: center;
  }
</style>