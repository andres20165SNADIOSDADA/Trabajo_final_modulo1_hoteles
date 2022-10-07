<template>
    <div class="container2">    
        <div class="col-9 contenido" >
          <div class="row pt-15 mb-15">
        
            <div class="col"><h4><i class="bi bi-door-open-fill icono"></i> Tipos de habitaciones </h4>

              <table class="table">
                <thead>
                  <br>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="habitacion in habitaciones " :key="habitacion.id">
                        <th scope="row"> {{habitacion.id}} </th>
                        <td> {{habitacion.name}} </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div> 
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        beforeMount() {
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
            .then(response => (
                this.habitaciones = response.data
            ))
        },
        data() {
            return {
                habitaciones: []
            }
        }
    }
</script>