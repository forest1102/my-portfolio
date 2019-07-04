<template lang="pug">
  SubPage(title="今まで作ったもの")
</template>

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