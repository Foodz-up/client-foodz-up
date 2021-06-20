<template>
  <form>
    <InputFoodzUp :input-variable="'cardNumber'" :icon="'master-card'" :placeholder="'•••• •••• •••• ••••'" @changeInputValue="valueChange" />
    <InputFoodzUp :input-variable="'expDate'" class="mt-2" :placeholder="'Ex: 09/08'" @changeInputValue="valueChange" />
    <InputFoodzUp :input-variable="'cvv'" class="mt-2" :placeholder="'Ex: 123'" @changeInputValue="valueChange" />
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import InputFoodzUp from '~/components/Inputs/InputFoodzUp.vue'

@Component({
  components: { InputFoodzUp }
})
export default class FormsCard extends Vue {
    @Prop({ required: true })
    formCard!: {cardNumber: string, expDate: string, cvv: string}

    valueChange (event:{key:string, value:string}) {
      // @ts-ignore
      this.formCard[event.key] = event.value
    }
}
</script>

<style scoped>

</style>
