<template lang="pug">
v-jumbotron.ma-0(gradient="to right, #2979FF, #BBDEFB" dark height="100vh")
  v-container(fill-height wrap)
    v-layout(column)
      v-spacer
      v-flex(xs3)
        h1.display-4.font-weight-bold {{ $t('name') }}
      v-flex(xs-3)
        h2.display-3 {{ $t('job') }}
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

@Component()
export default class extends Vue {}
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>
