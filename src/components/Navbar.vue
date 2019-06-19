<template>
   <v-navigation-drawer
    v-model="drawer"
    hide-overlay
    fixed
    clipped
    app
    class="cyan darken-1"
  >
    <v-toolbar flat class="transparent pa-3">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar size='60'>
              <img :src='avatar'>
            </v-list-tile-avatar>

            <v-list-tile-content class='ma-4'>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        <v-list-tile-action class='hidden-lg-and-up'>
            <v-btn
              icon
              @click.stop="drawer = !drawer"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list>
      </v-toolbar>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="$router.push(item.route)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'm-navbar',
  data: () => ({
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    title: 'Nikita Efimenko',
    items: [
      { 
        title: 'Home',
        icon: 'person',
        route: { name: 'home' }
      },
      { 
        title: 'Dashboard',
        icon: 'dashboard',
        route: { name: 'dashboard' }
      },
      { 
        title: 'Messages',
        icon: 'message',
        route: { name: 'twits' }
      },
      { 
        title: 'About',
        icon: 'question_answer',
        route: { name: 'about' }
      }
    ],
  })
}
</script>

<style scoped>
</style>
