<template>
   <v-navigation-drawer
    v-model='drawer'
    hide-overlay
    fixed
    clipped
    app
		right
    class="cyan darken-1"
  >
	<div class="transparent pa-3">
   	<router-view name='sidemenu'/>
	</div> 
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'm-navbar',
  data: () => ({
	})
}
</script>

<style scoped>
</style>

</template>

<script>
export default {

}
</script>

<style>

</style>
