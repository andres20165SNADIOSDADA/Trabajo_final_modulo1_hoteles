<template>
    <div class="col-11 contenido2" >
        <div class="row ">
            <div class="row g-5">
                <div class="row pt-4 mb-4 ">
              
                    <div class="col"><h4> <i class="bi bi-bank2 icono"></i> {{hotel.name}} </h4>
                        <h6 class="nh" style="padding-left: 42px">  Numero de Habitaciones: {{hotel.num_rooms}}</h6>
                    </div>
                    <div class="col ">
                     
                   </div>
   
                 </div> 
                    <div class="col-md-6">
                      <label for="Nombre" class="form-label">Tipo de Habitacion</label>
                        <select v-model="room.room_type_id" id="room_type_id" class="form-select">
                            <option v-for="room in room_types" :value="room.id" :key="room.id">{{room.name}}</option>
                        </select>
                        <div v-if="errores.room_type_id" class="text-danger">{{errores.room_type_id[0]}}</div>
                      <div class="valid-feedback">
                        
                      </div>
                    </div>
                    <div class="col-md-6">
                        <label for="acomodacion" class="form-label">Acomodacion</label>
                        <select class="form-select" id="accommodation_id" v-model="room.accommodation_id">
                            <option v-for="accommodation in accommodation_types" :value="accommodation.id" :key="accommodation.id">{{accommodation.name}}</option>
                        </select>
                        <div v-if="errores.accommodation_id" class="text-danger"> {{errores.accommodation_id[0]}}</div>
                    </div>
                    <div class="col-6">
                      <label for="Cantidad" class="form-label">Cantidad</label>
                      <input v-model="room.quantity" type="number" class="form-control" id="Cantidad" >
                      <div v-if="errores.quantity" class="text-danger">{{errores.quantity[0]}}</div>
                    </div>

                    <div class="container">
                        <div v-if="info" class="alert alert-success" role="alert"> {{info}} </div>
                        <div v-if="errores.simple" class="alert alert-danger" role="alert"> {{errores.simple}} </div>
                    </div>
                    
                    <div class="row pt-4 mb-4 ">
              
                      <div class="col"> </div> 
                      <div class="col-3 ">
                        <button @click="crearHabitacion" class="btn btn-primary">Crear Habitacion</button>
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
            // Obtener datos de hotel
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
                .then(response => (
                    this.hotel = response.data.data
                ))
            // Get tipos de habitaciones
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
                .then(response => (
                    this.room_types = response.data
                ))
            // Get tipos de acomodaciones
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
                .then(response => (
                    this.accommodation_types = response.data
                ))
        },
        data() {
            return {
                habitacion: [],
                hotel: {
                    name: null,
                    num_rooms: null
                },
                room: {
                    hotel_id: this.$route.params.id,
                    room_type_id: null,
                    accommodation_id: null,
                    quantity: null
                },
                errores: Object,
                info: null,
                room_types: [],
                accommodation_types: [],
                success: false,
            }
        },
        methods: {
            crearHabitacion() {
                this.errores = []
                axios({
                    method: 'post',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms',
                    data: this.room,
                    responseType: 'json',
                })
                    .catch(error => {
                        this.errores = error.response.data.errors
                        this.info = null
                    })
                    .then(response => {
                        this.info = response.data.message
                        this.errores = []
                    })
            }
        }
    }
    </script>