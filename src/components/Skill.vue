<template lang="pug">
SubPage#skill(
    :title="$t('title')"
  )
    v-container
      v-layout(column fill-height)
        v-flex(v-for="(skillArr,rowKey,index) in skill2dArr" :key="rowKey" grow)
          v-card
            v-container(grid-list-lg).pa-0
              v-layout(row wrap)
                v-flex(v-for="(skill,colKey,colIdx) in skillArr" sm2 xs4 :key="colKey")
                  v-card(flat tile ).clickable
                    v-layout(column align-center)
                      v-flex.pb-0
                        v-img( :src="skill.logo" width="72px" height="72px")
                      v-flex.pt-0
                        p.text-xs-center {{skill.title}}
</template>

<i18n>
  {
    "ja":{
      "title":"開発可能言語"
    },
    "en":{
      "title":"Skills"
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
  private readonly skill2dArr: { title: string, logo: string } [][] = [
    [
      {
        title: 'C/C++',
        logo: this.impLogo('c++')
      }
    ],
    [
      {
        title: 'HTML',
        logo: this.impLogo('html')
      }
    ],
    [
      {
        title: 'JavaScript',
        logo: this.impLogo('js')
      },
      {
        title: 'TypeScript',
        logo: this.impLogo('ts')
      },
      {
        title: 'Node.JS',
        logo: this.impLogo('nodejs')
      },
      {
        title: 'Vue.JS',
        logo: this.impLogo('vuejs')
      },
      {
        title: 'Google Apps Script',
        logo: this.impLogo('gas')
      }
    ],
    [
      {
        title: 'Python',
        logo: this.impLogo('python')
      }
    ],
    [
      {
        title: 'Swift',
        logo: this.impLogo('swift')
      }
    ],
    [
      {
        title: 'AWS lambda',
        logo: this.impLogo('aws-lambda')
      },
      {
        title: 'AWS EC2',
        logo: this.impLogo('aws-ec2')
      }
    ],
    [
      {
        title: 'Firebase',
        logo: this.impLogo('firebase')
      }
    ],
    [
      {
        title: 'Raspberry PI',
        logo: this.impLogo('raspberry-pi')
      }
    ]
  ]

  private impLogo(name: string) {
    return require(`@/assets/${name}.svg`)
  }
}
</script>

<style lang="css" scoped>
#skill{
  height: auto;
  min-height: 100vh;
}
.clickable{
  cursor: pointer;
}
</style>
