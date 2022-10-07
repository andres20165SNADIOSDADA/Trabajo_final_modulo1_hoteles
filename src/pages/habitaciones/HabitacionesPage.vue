<template>
    <div class="container2">    
        <div class="col-11 contenido" >
            <div class="row pt-4 mb-4 ">
                <div class="col"><h4> <i class="bi bi-bank2  icono"></i>{{this.hotel.name}}</h4></div>
                <div class="col-3 ">
                    <button @click="crearHabitacion(this.hotel.id)" class="btn btn-primary">Crear Habitacion</button>
                </div>

            </div> 
                
            
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">TIPO</th>
                    <th scope="col">ACOMODACION</th>
                    <th scope="col">CANTIDAD</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="" v-for="habitacion in habitaciones" :key="habitacion.id">
                        <td scope="row">{{habitacion.type.name}}</td>
                        <td >{{habitacion.accommodation.name}}</td>
                        <td >{{habitacion.quantity}}</td>
                        <td  class="px-3 py-3"> <button @click="editarHabitacion(habitacion.id)" class="btn btn-warning"> Editar </button> </td>
                        <td  class="px-3 py-3"> <button @click="eliminarHabitacion(habitacion.id)" class="btn btn-danger"> Eliminar</button> </td>
                    </tr>
                </tbody>
              </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    beforeMount() {
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id)
        .then(response => (
            this.hotel = response.data.data
        ))

        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id)
        .then(response => (
            this.habitaciones = response.data.data
        ))
    },
    data() {
        return {
            habitaciones: [],
            hotel: [],
            info: null,
            errores: {}
        }
    },
    methods: {
        eliminarHabitacion(id) {
            this.errores = {}
            if (confirm('¿Esta seguro que desea eliminar esta habitacion?')) {
                axios({
                    method: 'delete',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+id,
                    responseType: 'json', 
                }) 
                .then(response => {  
                    this.success = response.data.success
                    axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id)
                        .then(response => (
                            this.habitaciones = response.data.data
                        ))
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    this.info = null
                })       
            }
        },
        crearHabitacion(id) {
            this.$router.push({ name: 'HabitacionCrearPage',
                params: { id: id } 
            })
        },
        editarHabitacion(id) {
            this.$router.push({ name: 'HabitacionEditarPage',
                params: { id: id }
            })
        },
    }
}
</script>