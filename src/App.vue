<template>
  <HeaderComponent />
  <main>
    <router-view>
      
    </router-view>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

