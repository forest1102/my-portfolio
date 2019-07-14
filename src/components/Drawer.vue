<template lang="pug">
v-navigation-drawer(
    clipped
    app
    fixed
    floating
    :mobile-break-point="$vuetify.thresholds.sm"
    v-bind:value="$vuetify.breakpoint.mdAndUp?true:value" 
    v-on:input="$emit('input', $event)" 
    v-scroll="scroll"
  )
  v-toolbar(
    flat
    prominent
    ).transparent
    v-list
      v-list-tile(@click="toTop")
        v-list-tile-content
          v-list-tile-title.bold.teal--text.headline.text-sm-center {{$t('name')}}
  v-list
    v-divider
    v-list-tile(
      v-for="menu in menus"
      :key="menu.to"
      @click="link(menu.to)"
      )
      v-list-tile-action
        v-icon(:color="(menu.to===curViewElement)? 'teal':''") {{menu.icon}}
      v-list-tile-content
        v-list-tile-title.subheading(:class="(menu.to===curViewElement)? 'teal--text':''") {{$t(`menu['${menu.to}']`)}}
</template>

<i18n>
  {
    "en":{
      "name":"Issei Morita",
      "menu":{
          "#about": "About",
          "#skill": "Skills",
          "#timeline": "Timeline",
          "#contact": "Contact"
      }
    },
    "ja":{
      "name":"森田一世",
      "menu":{
          "#about": "自己紹介",
          "#skill": "開発可能言語",
          "#timeline": "経歴",
          "#contact": "コンタクト"
      }
    }
  }
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import languages from '@/data/languages.json'

@Component({})
export default class extends Vue {
  @Prop() public value!: boolean

  private readonly menus = [
    {
      to: '#about',
      icon: 'person'
    },
    {
      to: '#skill',
      icon: 'format_list_bulleted'
    },
    {
      to: '#timeline',
      icon: 'show_chart'
    },
    {
      to: '#contact',
      icon: 'share'
    }
  ]
  private readonly languages = languages

  private isMounted = false

  private scrollCenter: number = 0

  protected mounted() {
    this.isMounted = true
  }

  private get selectors(): { selector: HTMLElement, to: string } [] {
    return (this.isMounted) ?
      this.menus
      .map(({ to }) => ({
        selector: (document.querySelector(to) as HTMLElement),
        to
      }))
      .filter(({ selector }) => selector) : []
  }

  private get curViewElement() {
    return (this.selectors
      .find(({ selector, to }) => {
        const top = selector.offsetTop
        const bottom = top + selector.offsetHeight
        return top < this.scrollCenter && this.scrollCenter < bottom
      }) || { to: '' }).to
  }

  private toTop() {
    this.$vuetify.goTo('#home')
    this.$router.replace({ hash: '' })
  }

  private link(to: string) {
    this.$vuetify.goTo(to)
    this.$router.replace({ hash: to })
  }
  private get curLocale() {
    return this.languages.find(e => e.locale === this.$i18n.locale) || { name: '', title: '' }
  }

  private offset(id: string) {
    return document.querySelector(id)
  }

  private changeLocale(locale: string) {
    this.$router.push({ params: { locale } })
  }

  private scroll() {
    this.scrollCenter = (window.pageYOffset || document.documentElement.scrollTop) + this.$vuetify.breakpoint.height / 2
  }
}
</script>

<style scoped>
</style>