<template>
    <div class="container">
        
            
        <div class="col-11 contenido2" >
          <div class="row ">
            
             <div class="row g-5">
                <div class="row pt-4 mb-4 ">
            
                    <div class="col"><h4> <i class="bi bi-bank2  icono"></i> {{hotel.name}}</h4></div>
                    <div class="col-2 ">
                    
                </div>

                </div> 
                    <div class="col-md-6">
                        <label for="Nombre" class="form-label">NOMBRE</label>
                        <input v-model="hotel.name" type="text" class="form-control" id="Nombre" required>
                        <div class="valid-feedback">
                        </div>
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
                        <select v-model="hotel.city_id" id="city_id" class="form-control select-picker">
                            <option v-for="city in cities" :value="city.id" :key="city.id">{{city.name}}</option>
                        </select>
                        <div v-if="errores.city_id" class="text-danger" :role="alert">{{errores.city_id[0]}}</div>
                    </div>

                    <div class="container">
                        <div v-if="info" class="alert alert-success" role="alert"> {{info}} </div>
                        <div v-if="errores.simple" class="alert alert-danger" role="alert"> {{errores.simple}} </div>
                    </div>

                    <div class="row pt-4 mb-4 ">
                        <div class="col"><button @click="eliminar(this.$route.params.id)" type="button" class="btn btn-outline">Eliminar hotel</button></div>
                        <div class="col-3"><button @click="editar" class="btn btn-primary">Actualizar Hotel</button></div>
                    </div> 
              </div>
        </div>    
    </div>

</div>
</template>


<script>

    import axios from 'axios';
    
    export default {
        beforeMount() {
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
                .then(response => ( 
                    this.cities = response.data 
                ))
            
            axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id)
                .then(response => ( 
                    this.hotel = response.data.data
                ))
        },
        data() {
            return {
                errores: {},
                info: null,
                cities: {},
                hotel: {
                    name: null,
                    nit: null,
                    address: null,
                    num_rooms: null,
                    city_id: null,
                    city: {
                        name: null 
                    }
                },
            }
        },
        methods: {
            editar() {
                this.error = false
                this.info = false
                axios({
                    method: 'put',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+this.$route.params.id,
                    data: this.hotel,
                    responseType: 'json', 
                }) 
                .then(response => { 
                    this.info = response.data.message
                    this.errores = {}
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    this.info = null
                })
            },
            eliminar(id) {
                this.errores = {}
                if (confirm('¿Esta seguro que desea eliminar este hotel?')) {
                    axios({
                        method: 'delete',
                        url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+id,
                        responseType: 'json', 
                    }) 
                    .then(response => {  
                        this.info = response.data.message
                        this.hotel = [] 
                    })
                    .catch(error => {
                        this.errores = error.response.data.errors
                        this.info = null
                    })       
                }
            }
        }
        
    }
    
    </script>