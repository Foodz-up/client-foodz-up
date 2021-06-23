<template>
  <div>
    <ButtonLogOut />
  </div>
</template>

<script>
import ButtonLogOut from '~/components/Buttons/ButtonLogOut.vue'

export default {
  components: { ButtonLogOut },

  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
