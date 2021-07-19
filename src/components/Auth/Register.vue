<template>
  <div>
    <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Registation form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation>
                    <v-text-field
                      label="email"
                      name="email"
                      prepend-icon="mdi-account"
                      type="email"
                      :rules="emailRules"
                      v-model="email"
                    ></v-text-field>
                    <v-text-field
                      label="password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      :counter="6"
                      :rules="passRules"
                      v-model="password"
                    ></v-text-field>
                    <v-text-field
                      label="confirm-password"
                      name="confirm-password"
                      prepend-icon="repeat"
                      type="password"
                      :counter="6"
                      :rules="confirmPasswordRules"
                      v-model="confirmPassword"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  color="primary"
                  @click="onSubmit"
                  :loading="loading"
                  :disabled="!valid || loading"
                  >Create account</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passRules: [
        v => !!v || 'pass is required',
        v => (v && v.length >= 6) || 'pass must be more than 4 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required!',
        v => v === this.password || 'Password should match'

      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  }
}
</script>
