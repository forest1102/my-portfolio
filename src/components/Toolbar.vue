<template lang="pug">
  v-toolbar(app)
    v-toolbar-title.headline.text-uppercase
      span Vuetify
      span.font-weight-light MATERIAL DESIGN
    v-spacer
    v-menu(
      bottom
      left
      offset-y
      )
      template(v-slot:activator="{ on: menu }")
        v-btn(
          flat
          v-on="menu"
          ) 
          span {{curLocale.name}}
          v-icon arrow_drop_down
      v-list(
        light
        )
        v-list-tile(
          v-for="lang in languages"
          :key="lang.locale"
          @click="changeLocale(lang.locale)"
          )
          v-list-tile-title(v-text="lang.name")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import languages from '@/data/languages.json'

@Component({})
export default class extends Vue {
  private readonly languages = languages
  private get curLocale() {
    return this.languages.find(e => e.locale === this.$i18n.locale) || { name: '', title: '' }
  }

  private changeLocale(locale: string) {
    this.$router.replace({ params: { locale } })
  }
}
</script>

<style lang="css" scoped>
</style>
