<template>
    <div class="container2">
              <div class="col-11 contenido" >
                <div class="row pt-4 mb-4 ">
              
                  <div class="col"><h4> <i class="  bi bi-bank2 icono"></i> Hoteles </h4></div>
                  <div class="col-2 ">
                   <button @click="crearHotel" class="btn btn-primary">Crear Hotel</button>
                </div>
 
              </div> 
                      
                  
                    <table class="table ">
                      <thead>
                        <tr>
                            <th scope="col">NIT</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col">APELLIDOS</th>
                            <th scope="col">CIUDAD</th>
                            <th scope="col">CAPACIDAD HAB</th>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="hotel in hoteles" :key="hotel.id">
                            <td scope="row"> {{hotel.nit}} </td>
                            <td> {{hotel.name}} </td>
                            <td> {{hotel.address}} </td>
                            <td> {{hotel.city.name}} </td>
                            <td> {{hotel.num_rooms}} </td>
                            <td>
                                <button @click="detallesHotel(hotel.id)" class="btn btn-danger"> Detalle</button>
                            </td>
                            <td>
                                <button @click="habitacionesHotel(hotel.id)" class="btn btn-outline-success"> Habitaciones</button>
                            </td>
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
        axios.get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
            .then(response => (
                this.hoteles = response.data.data
            ))
      },
      data() {
        return {
          hoteles: []
        }
      },
      methods: {
        detallesHotel(id) {
            this.$router.push({name: 'HotelDetallePage',
                params: { id: id }
            })
        },
        habitacionesHotel(id) {
            this.$router.push({name: 'HabitacionesPage',
                params: { id: id }
            })
        },
        crearHotel() {
            this.$router.push({ name: 'HotelCrearPage'})
        }
      }
    }
    </script>