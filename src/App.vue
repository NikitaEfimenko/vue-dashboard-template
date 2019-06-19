<template>
  <v-app dark  class="cyan darken-2">
    <m-navbar/>
    <m-sidebar/>
    <m-toolbar/>
    <v-content fluid>
      <v-container fluid fill-height>
        <v-layout  justify-center align-center>
          <v-flex shrink>
            <transition mode='out-in' name='scale-transition'>
              <router-view/>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Toolbar from '@/components/Toolbar'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'app',
  components: {
    'm-navbar': Navbar,
    'm-toolbar': Toolbar,
    'm-sidebar': Sidebar
  }
}
</script>

<style scoped>
</style>
