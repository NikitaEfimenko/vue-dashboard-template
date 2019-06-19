<template>
<div>
	<v-btn
    dark
    fab
    color="pink"
		@click='add'
  ><v-icon>add </v-icon>
	</v-btn>
  <v-timeline>
			<v-slide-y-transition group>
		<v-timeline-item
      v-for="tick in serias"
      :key="tick.time"
			left
			:color='tick.color'
			class='pa-5'
    >
      <template v-slot:icon>
        <v-icon>{{tick.icon}}
        </v-icon>
      </template>
      <template v-slot:opposite>
        <span>{{tick.time}}</span>
      </template>
     
    </v-timeline-item>
			</v-slide-y-transition>
  </v-timeline>
	</slide-x-transition>
</div>
</template>

<script>
export default {
	name: 'timeseries',
	data: () => ({
		avatar: "https://randomuser.me/api/portraits/men/85.jpg",
		serias: [
			{
				icon: "message",
				time: "28.12.2017",
				color: "cyan",
				title: "Main info",
				post: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
			},
			{
				icon: "delete",
				color: "pink",
				time: "28.12.2017",
				title: "Main info",
				post: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
			}
		]
	}),
	methods: {
		add(){
			this.serias.push({
				icon: "check",
				color: "green",
				time: "28.12.2017",
				title: "Main info",
				post: "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
			})
		}
	}
}
</script>

<style>

</style>
