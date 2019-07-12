<template lang="pug">
  v-toolbar(app dense)
    v-toolbar-side-icon(
      v-if="$vuetify.breakpoint.smAndDown"
      @click="$emit('toggle-drawer')"
      )
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
          v-icon fas fa-globe
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
    this.$router.push({ params: { locale } })
  }
  private link(selector: string) {
    this.$router.replace({ hash: '' })
    this.$router.replace({ hash: selector })
  }
}
</script>

<style lang="css" scoped>
</style>
