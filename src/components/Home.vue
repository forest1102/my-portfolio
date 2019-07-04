<template lang="pug">
v-jumbotron.ma-0(gradient="to right, #2979FF, #BBDEFB" dark height="100vh")
  v-container(fill-height wrap)
    v-layout(column)
      v-spacer
      v-flex(xs3)
        h1.display-4.font-weight-bold 森田一世
      v-flex(xs-3)
        h2.display-3 プログラマー
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component()
export default class extends Vue{
  
}
</script>

<style scoped>
.home{
  height:100vh;
}
</style>
