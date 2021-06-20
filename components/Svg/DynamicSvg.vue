<template>
  <div v-if="componentName">
    <component :is="componentName" :width="width" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    /*
      Importer tous les composants Strapi
    */

    // Titles
    profile: () => import('~/components/Svg/SvgProfile.vue'),
    card: () => import('~/components/Svg/SvgCard.vue'),
    covid: () => import('~/components/Svg/SvgCovid.vue'),
    deliver: () => import('~/components/Svg/SvgDeliver.vue'),
    favourite: () => import('~/components/Svg/SvgFavourite.vue'),
    help: () => import('~/components/Svg/SvgHelp.vue'),
    promote: () => import('~/components/Svg/SvgPromote.vue'),
    setting: () => import('~/components/Svg/SvgSetting.vue'),
    'master-card': () => import('~/components/Svg/SvgMasterCard.vue'),
    sponsor: () => import('~/components/Svg/SvgSponsor.vue')
  }
})
export default class DynamicZone extends Vue {
  @Prop({ required: true })
  componentName!: string

  @Prop({ default: 20 })
  width!: string
}

</script>
