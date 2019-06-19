export const AppState = {
    computed: {
      drawer: {
        get(){
          return this.$store.state.app.drawer
        },
        set(v){
          this.$store.commit('app/drawer', v)
        }
      }
    }
  }