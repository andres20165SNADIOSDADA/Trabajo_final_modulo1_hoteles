<template>
    <div class="container2">      
        <div class="col-9 contenido" >
          <div class="row pt-15 mb-15">
        
            <div class="col"><h4><i class="bi bi-house-door-fill users"></i> Tipos de habitaciones </h4>

              <table class="table">
                <thead>
                  <br>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="acomodacion in acomodaciones" :key="acomodacion.id">
                        <th scope="row"> {{acomodacion.id}} </th>
                        <td> {{acomodacion.name}} </td>
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
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
            .then(response => (
                this.acomodaciones = response.data
            ))
        },
        data() {
            return {
                acomodaciones: []
            }
        }
    }
</script>

