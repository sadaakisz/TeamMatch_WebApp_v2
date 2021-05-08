<template>
  <div class="fill">    
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
        </b-form>

          <b-btn class="btn-aceptar">Aceptar y filtrar</b-btn>
      
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
  .fill {
    height: 100%;
    background-image: url("./assets/fill_team_BG.png");
    background-size: cover;
    background-position: center;
    display: grid;
    align-content: center;
  }

  .title-container{
    display: grid;
    grid-template-columns: 15% 40% auto;
    
    
  }

  .title{
    color: #f2f2f2;
    font-size: 4.469rem;
    font-weight: 600;
    grid-column-start: 2;
    justify-self: left;
    
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
    grid-template-columns: 15% 20% 50% 15%;
    align-self: center;    
  }

  .labels{
    display: grid;
    grid-template-rows: 16.67%;
    grid-column-start: 2;
    grid-row-start: 2;
    row-gap: 5%;
  }

  .inputs{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 16.67% 16.67% 16.67% 16.67% 16.67% 16.67%;
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
    font-size: 1.8rem;    
    font-weight: 600;
    color: #fff;
    border-radius: 3.125vw;
    border-color: #FF994A;
    grid-row-start: 3;
    grid-column-start: 3;
    padding-left: 6.5%;
    justify-self: right;
    text-align: center;
    background: #232323 url('../FillTeam/assets/Forward arrow.png');
    background-repeat: no-repeat;
    background-position-y:  center;
    background-position-x: 5%;
  }
</style>