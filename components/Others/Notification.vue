<template>
  <div class="notification is-danger">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

    @Component
export default class Notification extends Vue {
        @Prop()
        message!: string
}
</script>

<style scoped>

</style>
