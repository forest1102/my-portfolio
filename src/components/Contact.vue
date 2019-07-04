<template lang="pug">
  SubPage(:title="$t('title')")
    v-list(two-line).transparent
      v-list-tile(avatar v-for="(contact,i,key) in contacts" :key="key")
        v-list-tile-avatar.mr-4
          v-btn(fab dark medium :href="contact.href || contact.title").brown.lighten-2
            v-icon {{contact.icon}}
        v-list-tile-content 
          v-list-tile-title
            a(:href="contact.href || contact.title").teal--text  {{contact.title}}
</template>

<i18n>
  {
    "ja":{
      "title":"コンタクト"
    },
    "en":{
      "title":"Contact"
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
export default class extends Vue {
  private readonly contacts = [
    {
      icon: 'email',
      title: 'murabito1ss1@gmail.com',
      href: 'mailto:murabito1ss1@gmail.com'
    },
    {
      icon: 'fab fa-linkedin-in',
      title: 'https://www.linkedin.com/in/issei-morita-6054ab187/'
    },
    {
      icon: 'fab fa-github',
      title: 'https://github.com/forest1102'
    }
  ]
}
</script>

<style scoped>
</style>
