<template lang="pug">
.subpage.mx-0.px-0
  v-layout(column fill-height)
    v-flex(xs1).pb-5.title
      .teal.display-3.white--text {{title}}
    v-flex(xs10)
      slot
    v-spacer
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
})
export default class extends Vue {
  @Prop()
    public title!: string
}
</script>

<style lang="css" scoped>
.subpage{
  height: 100vh;
}
</style>
