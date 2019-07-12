<template lang="pug">
  v-app.grey.lighten-3
    Toolbar(@toggle-drawer="drawer=!drawer")
    Drawer(v-model="drawer")
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
import Drawer from '@/components/Drawer.vue'
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
    Drawer
  }
})
export default class extends Vue {
  private drawer: boolean = false
}
</script>
