<template>
  <v-toolbar color="cyan" app absolute clipped-left>
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    <span class="title ml-3 mr-5">Sonder</span>
    	<v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
	name: 'm-toolbar'
}
</script>

<style scoped>

</style>
