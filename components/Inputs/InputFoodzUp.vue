<template>
  <div class="relative text-gray-800">
    <span v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" class="p-1">
        <DynamicSvg :component-name="icon" class="mr-4 text-gray-700" :width="35" />
      </button>
    </span>
    <input
      v-model="inputValue"
      type="text"
      :class="{'pl-16': icon}"
      class="pl-5 text-lg w-full placeholder-gray-500 py-2 font-medium text-gray-800 bg-gray-200 rounded-full"
      :placeholder="placeholder"
      @change="changeValue()"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DynamicSvg from '~/components/Svg/DynamicSvg.vue'

@Component({
  components: { DynamicSvg }
})
export default class InputFoodzUp extends Vue {
  @Prop()
  icon!: string

  @Prop({ required: true })
  inputVariable!: string

  @Prop({ required: true })
  placeholder!: string

  inputValue: string = ''

  changeValue () {
    this.$emit('changeInputValue', { value: this.inputValue, key: this.inputVariable })
  }
}
</script>

<style scoped>

</style>
