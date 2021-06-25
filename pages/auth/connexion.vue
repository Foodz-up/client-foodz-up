<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">
            Welcome back!
          </h2>

          <Notification v-if="error" :message="error" />

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="data.email"
                  type="email"
                  class="input"
                  name="email"
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
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Log In
              </button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/auth/enregistrement">
                Register
              </nuxt-link>
            </p>
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
  data () {
    return {
      data: {
        email: 'test2@gmail.com',
        password: 'test'
      },
      error: null
    }
  },

  // mounted () {
  //   this.$auth.logout()
  // },

  methods: {
    async login () {
      try {
        const response = await this.$auth.loginWith('local', { data: this.data })
        await this.$auth.$storage.setUniversal('email', response.data.token.email)
        await this.$auth.setUserToken(response.data.token.accessToken.accessToken, response.data.token.refreshToken)
        AuthStore.setToken({ accessToken: response.data.token.accessToken.accessToken, refreshToken: response.data.token.refreshToken })
        AuthStore.setUser(this.$auth.user)

        NotificationStore.addNotification({
          message: response.data.message,
          status: response.status
        })
        this.$router.push('/')
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
