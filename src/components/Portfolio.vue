<template lang="pug">
  SubPage(:title="$t('title')")#portfolio
</template>

<i18n>
  {
    "ja":{
      "title":"今まで作ったもの"
    },
    "en":{
      "title":"Portfolio"
    }
  }
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SubPage from '@/components/SubPage.vue'


@Component({
  components: {
    SubPage
  }
})
export default class extends Vue {}
</script>

<style scoped>
</style>