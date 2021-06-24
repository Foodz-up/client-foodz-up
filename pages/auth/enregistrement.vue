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
import Notification from '~/components/Others/Notification.vue'

export default {
  auth: false,
  components: {
    Notification
  },

  data () {
    return {
      data: {
        email: '',
        password: '',
        firstName: 'Thomas',
        lastName: 'ttt',
        cityCode: null
      },
      error: null
    }
  },

  methods: {
    async register () {
      try {
        await this.$axios.post('auth/register', this.data)
        // const response = await this.$auth.loginWith('local', {
        //   data: {
        //     email: this.email,
        //     password: this.password
        //   }
        // })

        // await this.$auth.$storage.setUniversal('email', response.data.email)
        // await this.$auth.setUserToken(response.data.accessToken.accessToken, response.data.refreshToken)
        this.$router.push('/auth/connexion')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
