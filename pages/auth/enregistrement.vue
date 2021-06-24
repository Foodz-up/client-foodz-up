<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">
            Register!
          </h2>

          <Notification v-if="error" :message="error" />

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">FirstName</label>
              <div class="control">
                <input
                  v-model="data.firstName"
                  type="text"
                  class="input"
                  name="firstname"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">SurName</label>
              <div class="control">
                <input
                  v-model="data.lastName"
                  type="text"
                  class="input"
                  name="lastname"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">CountryCode</label>
              <div class="control">
                <input
                  v-model="data.cityCode"
                  type="text"
                  class="input"
                  name="cityCode"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="data.email"
                  type="email"
                  class="input"
                  name="email"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="data.password"
                  type="password"
                  class="input"
                  name="password"
                  required
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Register
              </button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/auth/connexion">
              Login
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AuthStore from '~/store/auth'
import NotificationStore from '~/store/notification'

export default {
  auth: false,

  data () {
    return {
      data: {
        email: 'test@gmail.com',
        password: 'test',
        firstName: 'Thomas',
        lastName: 'CLEMENT',
        cityCode: 62000
      },
      error: null
    }
  },

  methods: {
    async register () {
      try {
        const response = await AuthStore.register(this.data)
        NotificationStore.addNotification({
          message: response.data.message,
          status: response.status
        })
        this.$router.push('/auth/connexion')
      } catch (error) {
        NotificationStore.addNotification({
          message: error.response.data.message,
          status: error.response.status
        })
      }
    }
  }
}
</script>
