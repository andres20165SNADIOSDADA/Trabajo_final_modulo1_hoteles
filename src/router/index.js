import { createRouter, createWebHistory } from 'vue-router'

import InicioPage from '@/pages/otras/InicioPage.vue'
import HabitacionesTipoPage from '@/pages/otras/HabitacionesTipoPage.vue'
import AcomodacionesTipoPage from '@/pages/otras/AcomodacionesTipoPage.vue'
import HotelesPage from '@/pages/hoteles/HotelesPage.vue'
import HotelDetallePage from '@/pages/hoteles/HotelDetallePage.vue'
import HotelCrearPage from '@/pages/hoteles/HotelCrearPage.vue'
import HabitacionesPage from '@/pages/habitaciones/HabitacionesPage.vue'
import HabitacionEditarPage from '@/pages/habitaciones/HabitacionEditarPage.vue'
import HabitacionCrearPage from '@/pages/habitaciones/HabitacionCrearPage.vue'



const routes = [
  {
    path: '/',       
    name:'InicioPage', 
    component: InicioPage},
  {
    path: '/habitaciones-tipo',  
    name:'HabitacionesTipoPage',  
    component: HabitacionesTipoPage},
  {
    path: '/acomodaciones-tipo', 
    name:'AcomodacionesTipoPage', 
    component: AcomodacionesTipoPage},
  {
    path: '/hoteles', 
    name:'HotelesPage', 
    component: HotelesPage},
  {
    path: '/hotel-detalle/:id', 
    name:'HotelDetallePage', 
    component: HotelDetallePage},
  {
    path: '/hotel-crear', 
    name:'HotelCrearPage', 
    component: HotelCrearPage},
  {
    path: '/habitaciones/:id', 
    name:'HabitacionesPage', 
    component: HabitacionesPage},
  {
    path: '/habitaciones-editar/:id', 
    name:'HabitacionEditarPage', 
    component: HabitacionEditarPage},
  {
    path: '/habitacion-crear/:id', 
    name:'HabitacionCrearPage', 
    component: HabitacionCrearPage}
  
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router