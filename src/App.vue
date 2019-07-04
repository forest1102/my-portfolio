<template lang="pug">
  v-app.grey.lighten-3
    //-Toolbar
    v-content
      Home
      About
      Skill
      //- Portfolio
      Timeline
      Contact
</template>

<script lang="ts">
import Home from './components/Home.vue'
import Toolbar from './components/Toolbar.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Portfolio from './components/Portfolio.vue'
import Timeline from '@/components/Timeline.vue'
import Contact from '@/components/Contact.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Home,
    Toolbar,
    About,
    Skill,
    Portfolio,
    Timeline,
    Contact,
  }
})
export default class extends Vue {}
</script>
