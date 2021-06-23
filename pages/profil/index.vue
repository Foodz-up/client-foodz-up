<template>
  <div class="m-4">
    <div class="flex items-center">
      <SvgProfile width="40" class="mr-3" />
      <span class="mt-1">
        Thomas CLEMENT
      </span>
    </div>

    <hr class="mt-4">

    <div class="bg-primary-15 py-2 flex items-center">
      <SvgBurger width="30" class="mx-4" />
      <span class="text-primary font-medium">
        Récupérez 15€ sur votre prochaine commande avec le code : M3rciF00dzUp
      </span>
    </div>

    <div class="grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-4">
      <CardNavigation
        v-for="(item, index) in items"
        :key="index"
        :description="item.description"
        :title="item.title"
        :icon="item.icon"
        :route="item.route"
        class="pl-4"
      />
    </div>

    <div class="mt-7">
      <nuxt-link class="text-gray-500 hover:underline w-full mr-2" to="/about">
        A propos de FoodzUp
      </nuxt-link>

      <button class="w-auto cursor-pointer text-red-pastel hover:underline font-medium" @click="logout()">
        Se déconnecter
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SvgProfile from '~/components/Svg/SvgProfile.vue'
import SvgBurger from '~/components/Svg/SvgBurger.vue'
import CardNavigation from '~/components/Cards/CardNavigation.vue'

@Component({
  components: { SvgProfile, CardNavigation, SvgBurger }
})
export default class Profile extends Vue {
  // TODO: need type (description not required)
  items: Array<{ icon: string, route: string, title: string, description: string }> = [
    { icon: 'covid', route: '/profil/covid', title: 'Covid-19', description: '' },
    { icon: 'card', route: '/profil/cartes', title: 'Cartes bancaire', description: 'Editer vos moyens de paiement' },
    { icon: 'favourite', route: '/profil/favoris', title: 'Vos favoris', description: '' },
    { icon: 'sponsor', route: '/profil/parrainage', title: 'Pairrainage', description: 'Récuperz votre code parainage' },
    { icon: 'help', route: '/profil/Aide', title: 'Aide', description: '' },
    { icon: 'promote', route: '/profil/promotions', title: 'Promotions', description: 'Récuperz des coupon de réduction' },
    { icon: 'deliver', route: '/profil/livreur', title: 'Devenez livreur', description: 'Inscivez-vous en quelques minutes' },
    { icon: 'setting', route: '/profil/reglages', title: 'Informations du compte', description: '' }
  ]

  // TODO: logout function
  logout () {}
}
</script>

<style scoped>

</style>
