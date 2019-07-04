<template lang="pug">
SubPage.about(
    :title="$t('title')"
  )
    v-layout(column fill-height)
      v-flex(xs2 grow).pb-3
        v-card
          v-layout(row wrap justify-center)
            v-flex(v-for="(f,idx,key) in $t('field')" :key="key" sm2 xs4)
              v-layout(column)
                v-flex(align-self-center)
                  v-avatar(color="teal")
                    v-icon(x-large dark) {{f.icon}}
                v-flex
                  p.text-xs-center.my-1 {{f.title}}
      v-flex(xs10)
        v-layout(row fill-height wrap="$vuetify.breakpoint.xsOnly")
          v-flex(align-self-center md4 xs12)
            v-avatar(size="288" ).justify-center
              v-img(:src="require('@/assets/profile.jpg')")
          v-flex(md8)
            v-card.fill-height
              v-card-text.headline(v-html="$t('profile')")
</template>

<i18n>
  {
    "ja":{
      "title":"自己紹介",
      "profile":"1999年生まれ</br>    現在はロサンゼルスシティカレッジに留学中</br>高校生の時からコンピュータ部に入部し、プログラミングの勉強を始める。<br>    部活動の一環として、プログラミングコンテストに出場や、文化祭で自作ゲームの展示を行なった。<br>高校生セキュリティコンテストに参加し、セキュリティについても学び始める。<br>    IoTについても勉強するため、小型コンピュータのラズベリーパイとGoogle Homeを使い、声でTVを操作するプログラムを開発。<br>またラズベリーパイとOwn Cloudを用いたGoogle Driveのようなクラウドドライブを自作する。<br>    高校三年生から海外でも仕事を受けて、経験を積むためクラウドワークス等のクラウドソーシングサイトを通じてフリーランスとして仕事を始める。<br>フリーランスとして主にNode.JSを用いたスクレイピングの業務を行う。<br>    その活動の中で、AWS開発などの経験を積む。<br>",
      "field":[
        {
          "icon": "fas fa-gamepad",
          "title": "ゲーム開発"
        },
        {
          "icon": "fas fa-database",
          "title": "サーバー・DB開発"
        },
        {
          "icon": "fab fa-aws",
          "title": "AWS開発"
        },
        {
          "icon": "computer",
          "title": "フロントサイド"
        },
        {
          "icon": "phone_iphone",
          "title": "iOSアプリ開発"
        },
        {
          "icon": "memory",
          "title": "IoT開発"
        }
      ]
    },
    "en":{
      "title":"About",
      "profile":"I was born in Japan, in 1999.<br /> Currently, I am in Los Angeles City College to learn computer-science.</br> I started to learn programming when I was in high school and I belonged to computer club.<br />As an club activity, I was participated in programming competition and I display my game in my school festival.<br />I was also participated in security contest, and I started to learn about cybersecurity. <br />In terms of IoT, by using raspberry PI, which is small computer and Google Home, I can control TV by voice.<br /> I also made Cloud Drive like Google Drive with raspberry PI and OwnCloud.<br />I started to have a job as a freelancer to get a job and experience when I was a high school senior.",
      "field":[
        {
          "icon": "fas fa-gamepad",
          "title": "Game development"
        },
        {
          "icon": "fas fa-database",
          "title": "Server/DB"
        },
        {
          "icon": "fab fa-aws",
          "title": "AWS development"
        },
        {
          "icon": "computer",
          "title": "Frontside"
        },
        {
          "icon": "phone_iphone",
          "title": "iOS App development"
        },
        {
          "icon": "memory",
          "title": "IoT device"
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
.about {
  height: auto;
  min-height: 100vh;
}
</style>
