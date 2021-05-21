<template>
  <div class="results">
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

    <div class="found-players">
        
        <div class="title-container">
            <h1 class="title">Found players</h1>
            <h2 class="subtitle">Jugadores encontrados según filtros<br>aplicados:</h2>
        </div>
        
        <div class="player-list">
            <div class="player-card">      
                <div class="username">empe_leycal</div>
                <div class="details">Lv 110 - 20 years old</div>
                <div class="invite">
                    <b-button>
                        Invite to team
                    </b-button>
                </div>
                <div class="view">
                    <b-button>
                        View details
                    </b-button>
                </div>
                <div class="favorite">
                    <b-button>
                        fav
                    </b-button>
                </div>
            </div>

            <div class="player-card2">      
                <div class="username">calixto21</div>
                <div class="details">Lv 110 - 20 years old</div>
                <div class="invite">
                    <b-button>
                        Invite to team
                    </b-button>
                </div>
                <div class="view">
                    <b-button>
                        View details
                    </b-button>
                </div>
                <div class="favorite">
                    <b-button>
                        fav
                    </b-button>
                </div>
            </div>



        </div>
        
    </div>

  </div>
</template>


<script>
export default {
  name: 'FillTeamResults'
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/styles.scss";

.results {
    height: 100%;
    background-image: url("./assets/fill_team_BG.png");
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 15% 70% 15%;
}

.found-players{
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: 100%;    
    justify-content: left;
    grid-row-start: 2;
    grid-column-start: 2;
}

.title-container{
    align-self: start;
    grid-row-start: 1;
}

.title{    
    color: #f2f2f2;
    font-size: 4.469rem;
    font-weight: 600;
    text-align: left;
    
}

.subtitle{
    color: #f2f2f2;
    font-size: 1.75rem;
    text-align: left;
    
}

.player-list{
    grid-column-start: 1;
    grid-row-start: 2;    
    display: grid;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 45% 10% 45%;
    align-self: stretch;
    justify-self: stretch;
    row-gap: 10%;
}

.player-card{
    display: grid;
    background: #f2f2f2; 
    grid-column-start: 1;
    grid-row-start: 1;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: 50% 50%;
    grid-template-areas: 
        "info1 action1 favorite"
        "info2 action2 favorite";
    place-items: center;
}

.player-card2{
    display: grid;
    background: #f2f2f2; 
    grid-column-start: 1;
    grid-row-start: 2;
    grid-template-columns: 50% 25% 25%;
    grid-template-rows: 50% 50%;
    grid-template-areas: 
        "info1 action1 favorite"
        "info2 action2 favorite";
    place-items: center;
}

.username{
    grid-column-start: info1-start;
    grid-column-end: action1-start;
    grid-row-start: info1-start;
    text-align: left;
}

.details{
    grid-column-start: info2-start;
    text-align: left;
}

.invite{
    grid-column-start: action1-start;
    grid-row-start: info1-start;
    align-self: center;
}

.view{
    grid-column-start: action2-start;
    grid-row-start: info2-start;
    align-self: center;
}

.favorite{
    grid-column-start: favorite-start;
    grid-row-start: favorite-start;
    grid-row-end: info2-end;
    align-self: center;
}



</style>