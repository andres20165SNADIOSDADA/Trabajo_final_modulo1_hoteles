<template>
    <div class="col-11 contenido2" >
        <div class="row ">   
            <div class="row g-5">
                <div class="row pt-4 mb-4 ">
                    <div class="col"><h4><i class="bi bi-node-plus icono"></i> Crear Nuevo  Hotel </h4></div>
                    <div class="col-2 "> </div>
                </div> 
                <div class="col-md-6">
                    <label for="Nombre" class="form-label">NOMBRE</label>
                    <input v-model="hotel.name" type="text" class="form-control" id="Nombre" required>
                    <div class="valid-feedback"> </div>
                    <div v-if="errores.name" class="text-danger" :role="alert">{{errores.name[0]}}</div>
                </div>
                <div class="col-md-6">
                    <label for="nit" class="form-label">NIT</label>
                    <input v-model="hotel.nit" type="number" class="form-control" id="nit">
                    <div v-if="errores.nit" class="text-danger" :role="alert">{{errores.nit[0]}}</div>
                </div>
                <div class="col-6">
                    <label for="inputAddress" class="form-label">Dirección</label>
                    <input v-model="hotel.address" type="text" class="form-control" id="direccion" >
                    <div v-if="errores.address" class="text-danger" :role="alert">{{errores.address[0]}}</div>
                </div>
                <div class="col-md-6">
                    <label for="habitaciones" class="form-label">Numero de habitaciones</label>
                    <input v-model="hotel.num_rooms" type="text" class="form-control" id="Habitaciones">
                    <div v-if="errores.num_rooms" class="text-danger" :role="alert">{{errores.num_rooms[0]}}</div>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Ciudad</label>
                    <select v-model="hotel.city_id" class="form-select" id="ciudad">
                        <option v-for="ciudad in ciudades" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name }}
                        </option>
                    </select>
                    <div v-if="errores.city_id" class="text-danger" :role="alert">{{errores.city_id[0]}}</div>
                </div>

                <div class="container">
                    <div v-if="info" class="alert alert-primary mt-3" role="alert"> {{info}} </div>
                </div>

                <div class="row pt-4 mb-4 ">
            
                    <div class="col"> </div> 
                    <div class="col-2 ">
                        <button @click="crearHotel" class="btn btn-primary">Crear Hotel</button>
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
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
                .then(response => (
                    this.ciudades = response.data
                ))
        },
        data() {
            return {
                hotel: {
                    name: null,
                    nit: null,
                    address: null,
                    num_rooms: null,
                    city_id: null
                },
                errores: {},
                info: null,
                ciudades: []
            }
        },
        methods: {
            crearHotel() {
                this.errores = {}
                this.info = null
                axios({
                    method: 'post',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels',
                    data: this.hotel,
                    responseType: 'json',
                })
                .then(response => {
                    
                    this.hotel.name = null
                    this.hotel.nit = null
                    this.hotel.address = null
                    this.hotel.num_rooms = null
                    this.hotel.city_id = null
                    
                    this.info = response.data.message
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                })
            }
        },
    }
    </script>