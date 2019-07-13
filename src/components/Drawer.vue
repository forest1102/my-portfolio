<template lang="pug">
v-navigation-drawer(
    clipped
    app
    fixed
    floating
    :mobile-break-point="$vuetify.thresholds.sm"
    v-bind:value="$vuetify.breakpoint.mdAndUp?true:value" 
    v-on:input="$emit('input', $event)" 
  )
  v-toolbar(
    flat
    prominent
    ).transparent
    v-list(two-line)
      v-list-tile-content
        v-list-tile-title.bold.teal--text.headline.text-sm-center {{$t('name')}}
  v-list
    v-divider
    v-list-tile(
      v-for="menu in $t('menu')"
      :key="menu.title"
      @click="link(menu.to)"
      )
      v-list-tile-action
        v-icon(:color="(menu.to===$route.hash)? 'teal':''") {{menu.icon}}
      v-list-tile-content
        v-list-tile-title.subheading(:class="(menu.to===$route.hash)? 'teal--text':''") {{menu.title}}
</template>

<i18n>
  {
    "en":{
      "name":"Issei Morita",
      "menu":[
        {
          "title": "About",
          "to": "#about",
          "icon": "person"
        },
        {
          "title": "Skills",
          "to": "#skill",
          "icon": "format_list_bulleted"
        },
        {
          "title": "Timeline",
          "to": "#timeline",
          "icon": "show_chart"
        },
        {
          "title": "Contact",
          "to": "#contact",
          "icon": "share"
        }
      ]
    },
    "ja":{
      "name":"森田一世",
      "menu":[
        {
          "title": "自己紹介",
          "to": "#about",
          "icon": "person"
        },
        {
          "title": "開発可能言語",
          "to": "#skill",
          "icon": "format_list_bulleted"
        },
        {
          "title": "経歴",
          "to": "#timeline",
          "icon": "show_chart"
        },
        {
          "title": "コンタクト",
          "to": "#contact",
          "icon": "share"
        }
      ]
    }
  }
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import languages from '@/data/languages.json'

@Component({})
export default class extends Vue {
  @Prop() public value!: boolean
  private readonly languages = languages
  private link(to: string) {
    this.$vuetify.goTo(to)
    this.$router.replace({ hash: to })
  }
  private get curLocale() {
    return this.languages.find(e => e.locale === this.$i18n.locale) || { name: '', title: '' }
  }

  private changeLocale(locale: string) {
    this.$router.push({ params: { locale } })
  }
}
</script>

<style scoped>
</style>