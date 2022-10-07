<template>
    <div class="col-11 contenido2" >
        <div class="row ">  
            <div class="row g-5">
                <div class="row pt-4 mb-4 ">
            
                    <div class="col"><h4> <i class="  fa-solid fa-hotel icono"></i>{{habitacion.hotel.name}}</h4>
                        <h6 class="nh" style="padding-left: 42px">  Numero de Habitaciones: {{habitacion.hotel.num_rooms}}</h6>
                    </div>
                    <div class="col ">
                        
                    </div>

                </div> 
                    <div class="col-md-6">
                      <label for="Nombre" class="form-label">Tipo de Habitacion</label>
                        <select v-model="habitacion.room_type_id"  class="form-control select-picker">
                            <option v-for="tipoHab in tipoHabitaciones" :value="tipoHab.id" :key="tipoHab.id">
                                {{ tipoHab.name }}
                            </option>
                        </select>
                        <div v-if="errores.room_type_id" class="text-danger" :role="alert">{{errores.room_type_id[0]}}</div>
                      <div class="valid-feedback">
                        
                      </div>
                    </div>
                    <div class="col-md-6">
                        <label for="acomodacion" class="form-label">Acomodacion</label>
                        <select v-model="habitacion.accommodation_id" class="form-control select-picker">
                            <option v-for="acomodaciones in acomodaciones" :value="acomodaciones.id" :key="acomodaciones.id">
                                {{ acomodaciones.name }}
                            </option>
                        </select>
                        <div v-if="errores.accommodation_id" class="text-danger" :role="alert">{{errores.accommodation_id[0]}}</div>
                    </div>
                    <div class="col-6">
                      <label for="Cantidad" class="form-label">Cantidad</label>
                      <input v-model="habitacion.quantity" type="number" class="form-control" id="Cantidad" >
                      <div v-if="errores.quantity" class="text-danger" :role="alert">{{errores.quantity[0]}}</div>
                    </div>

                    <div class="container">
                        <div v-if="info" class="alert alert-success" role="alert"> {{info}} </div>
                        <div v-if="errores.simple" class="alert alert-danger" role="alert"> {{errores.simple}} </div>
                    </div>
                    
                    <div class="row pt-4 mb-4 ">
              
                      <div class="col"> </div> 
                      <div class="col-3 ">
                        <button @click="actualizar" class="btn btn-primary">Actualizar Habitacion</button>
                     </div>
     
                   
                  </div>
        </div>
        </div>            
    </div>
</template>

<script>
import axios from 'axios'

export default {
    beforeMount() {
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/show/'+this.$route.params.id)
        .then(response => (this.habitacion = response.data.data,
            this.success = response.data.success,
            (response.data.data==null)?document.getElementById("notId").classList.remove("d-none"):""
            ))

        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
        .then(response => (this.acomodaciones = response.data))
        
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
        .then(response => (this.tipoHabitaciones = response.data))
    },
    data() {
        return {
            hotel: Object,
            habitacion: {
                hotel_id: null,
                room_type_id: null,
                accommodation_id: null,
                quantity: null,
                hotel: {
                    name: null
                }
            },
            info: null,
            errores: {},
            acomodaciones: [],
            tipoHabitaciones: []
        }
    },
    methods: {
        actualizar() {
            this.errores = {}
            axios({
                method: 'put',
                url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id,
                data: this.habitacion,
                responseType: 'json', 
            }) 
            .catch(error => {
                this.errores = error.response.data.errors
            })
            .then(response => {
                this.info = response.data.message
            })
        }
    }
}
</script>