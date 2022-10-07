<template>
    <nav class="navbar navbar-dark bg-primary navbar-expand-lg ">
        <div class="container">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <img src="@/assets/IMG/logo.png" alt="logo" class="img">
              <router-link to="/" class="nav-link active" aria-current="page" href="inicio.html">Inicio</router-link>
              <router-link to="/hoteles" class="nav-link" href="hoteles.html">Hoteles</router-link>
              <router-link to="/habitaciones-tipo" class="nav-link" href="tipohabitacion.html">Tipos de habitaciones</router-link>
              <router-link to="/acomodaciones-tipo" class="nav-link " href="acomodaciones.html">Acomodaciones</router-link>
            </div>
          </div>
        </div>
    </nav>
    <div class="row shadow">
      <div class=" pt-2 mb-4 "><h5 style="padding-left: 100px; margin: auto;">Panel de Administracion</h5></div>
    </div>
    <br>
</template>

<style>
    .users{
      padding-left: 10px;
      padding-top: 2%;
      
    }
    .panel{
      margin: auto;
      padding-left: 100px;
    }
  
    .contenido {
      background: rgb(232, 240, 243);
      margin: auto;
    }
    .contenido2 {
      background: rgb(221, 227, 235);
      margin: auto;
    }
    .icono{
      padding-left: 13px;
    }
    .crear-hotel{
    margin: auto;
    justify-self: center;
    border-radius: 2em;
    width: 150px;
    }
    .img{
      width: 100px;
      height: 45px;
      border-radius: 0.3em;
    }
</style>