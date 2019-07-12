<template lang="pug">
  SubPage(:title="$t('title')")#timeline
    v-timeline.fill-height
      v-timeline-item(v-for="(career, idx) in $t('career')" :key="idx" )
        template(v-slot:opposite)
        v-card
          v-card-title
            div
              h3 {{career.date}}
              h2.headline  {{career.title}}
          v-card-text
            p {{career.detail}}
</template>

<i18n>
  {
    "ja":{
      "title":"経歴",
      "career":[
        {
          "date": "2013",
          "title": "Life is Tech! 参加",
          "detail": ""
        },
        {
          "date": "2015年3月",
          "title": "横須賀総合高校入学",
          "detail": ""
        },
        {
          "date": "2015-2017",
          "title": "​パソコン甲子園参加",
          "detail": ""
        },
        {
          "date": "2016,2017",
          "title": "高校生セキュリティコンテスト参加",
          "detail": ""
        },
        {
          "date": "​2018年3月",
          "title": "横須賀総合高等学校卒業",
          "detail": ""
        },
        {
          "date": "2018年5月",
          "title": "アメリカへ留学",
          "detail": ""
        },
        {
          "date": "2018年9月",
          "title": "ロサンゼルスシティカレッジに入学",
          "detail": ""
        }
      ]
    },
    "en":{
      "title":"Timeline",
      "career":[
        {
          "date": "2013",
          "title": "my first time to participate in Tech Event",
          "detail": ""
        },
        {
          "date": "March, 2015",
          "title": "entrance into Yokosuka Sogo High School",
          "detail": ""
        },
        {
          "date": "2015-2017",
          "title": "participation in programming competition",
          "detail": ""
        },
        {
          "date": "2016,2017",
          "title": "participation in cybersecurity event",
          "detail": ""
        },
        {
          "date": "​March, 2018",
          "title": "graduation from Yokosuka Sogo High School",
          "detail": ""
        },
        {
          "date": "May, 2018",
          "title": "arrival at Los Angeles",
          "detail": ""
        },
        {
          "date": "Sept., 2018",
          "title": "entrance into Los Angeles City College",
          "detail": ""
        }
      ]
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
export default class extends Vue {}
</script>

<style scoped>
#timeline {
  height: auto;
  min-height: 100vh;
}
</style>
