<template>
  <div>
    <h1>
      Pas de cours de construction
    </h1>
    <pre>
      {{ itemsInCart }}
    </pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CartStore from '~/store/cart'
import { ICart } from '~/store/interfaces'

@Component({})
export default class Home extends Vue {
  get itemsInCart ():Array<ICart> {
    return CartStore.items
  }
}
</script>

<style>

</style>
