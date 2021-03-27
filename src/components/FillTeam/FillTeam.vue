<template>
  <div class="fill">
    <div class="navarea">
      <b-navbar  class="nav">
      <b-nav-item>
        <img src="../../assets/TeamMatchLogo.png">
      </b-nav-item>
      <b-nav-item><router-link class="nav-text" to=/fillteam>FILL MY TEAM</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-text" to=/findteam>FIND A TEAM</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-text" to=/chat>CHAT</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-text" to=/profile>PROFILE</router-link></b-nav-item>
      <b-nav-item>
        <div class="profile-menu">
          <img src="./assets/NewNotificationsBell.png">
          <img src="./assets/ProfilePic.png">
          <p class="name">Gino Quispe</p>
          <p class="subscription">Premium</p>
          <img src="./assets/Forward arrow small.png">
        </div>
      </b-nav-item>
    </b-navbar>
    </div>
    <div class="title">Select filters</div>
    <div class="filters">      
      <b-form class="form">
        <div class="form-group">
        <b-form-group id="input-group-1" class="form-text">Juego:</b-form-group>        
        <b-form-group id="input-group-2" class="form-text">Rango de edad:</b-form-group>                
        <b-form-group id="input-group-3" class="form-text">Región:</b-form-group>        
        <b-form-group id="input-group-4" class="form-text">Preferencia de país</b-form-group>        
        <b-form-group id="input-group-5" class="form-text">Estilo de juego:</b-form-group>        
        <b-form-group id="input-group-6" class="form-text">Nivel de cuenta:</b-form-group>        
        </div>

        <div class="form-inputs">
          <b-form-input class="input" id="input-1" placeholder="P. ej: TFT"></b-form-input>
          <b-form-input class="input-small" id="input-2"></b-form-input>
          <b-form-input class="input-small" id="input-2"></b-form-input>
          <p class="input-region" id="input-3">LOCAL</p><p class="input-region" id="input-3">INTERNACIONAL</p>
          <!--b-form-input class="input" id="input-4"></!--b-form-input-->
          <b-form-input class="input-country" id="input-4"></b-form-input>
          <p class="input-playstyle">CASUAL</p><p class="input-playstyle">COMPETITIVO</p>
          <b-form-input class="input-smallest" id="input-6"></b-form-input>
        </div>
      </b-form>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'FillTeam',
}
</script>

<style scoped lang="scss">
  .fill {
    height: 100%;
    background-image: url("./assets/fill_team_BG.png");
    background-size: cover;
    background-position: center;    
  }

  .title{
    color: #f2f2f2;
    font-size: 4.469rem;
    font-weight: 500;    
  }

  .navarea{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav{
    font-size: 1.0426rem;
    background: transparent;
  }

  .nav-text{
    color: #f2f2f2;
  }

  .profile-menu{
    display: grid;
    grid-template-columns: 15% 25% 25% 25% 10%;
    font-size: 0.781rem;
    .name{
      color: #f2f2f2;
    }
    .subscription{
      color: #B4B4B4;
    }
  }

  .filters{    
    display: grid;
    place-items: center;
  }

  .form{
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 16.67%;
  }

  .form-inputs{
    display: grid;    
    grid-template-columns: 50% 50%;
  }

  .form-text{
    color: #f2f2f2;
    font-size: 1.5rem;
    text-align: left;
  }

  .input{
    background-color: #232323;
    border-radius: 3.125vw;
    width: 90%;
  }

  .input-small{
    background-color: #232323;
    border-radius: 3.125vw;
    width: 40%;
    display: inline-block;
    grid-row-start: 2;
  }

  .input-smallest{
    background-color: #232323;
    border-radius: 3.125vw;
    width: 20%;
    display: inline-block;
    grid-row-start: 6;
  }

  .input-country{
    background-color: #232323;
    border-radius: 3.125vw;
    width: 90%;
    grid-row-start: 4;    
  }

  .input-region{
    grid-row-start: 3;
    color: #f2f2f2;
  }
  .input-playstyle{
    grid-row-start: 5;
    color: #f2f2f2;
  }
</style>