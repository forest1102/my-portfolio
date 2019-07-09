<template lang="pug">
//-v-img.ma-0(gradient="to right, #2979FF, #BBDEFB" height="100vh" src="//")
div.home
  v-container(fill-height wrap)
    v-layout(column)
      v-spacer
      v-flex(xs3)
        h1.display-4.font-weight-bold.white--text {{ $t('name') }}
      v-flex(xs-3)
        h2.display-3.white--text {{ $t('job') }}
</template>

<i18n>
  {
    "ja":{
      "name":"森田一世",
      "job":"プログラマー"
    },
    "en":{
      "name":"Issei Morita",
      "job":"programmer"
    }
  }
</i18n>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  height: 100vh;
  background-image: linear-gradient(to top right, #2979FF, #BBDEFB);
}
</style>
