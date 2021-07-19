<template>
  <v-dialog width="400" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" class="headline" v-on="on">Edit</v-btn>
    </template>
    <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h1 class="text--primary">Edit product</h1>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                <v-text-field
                      label="title"
                      name="title"
                      type="text"
                      v-model="editedTitle"
                    ></v-text-field>
                    <v-textarea
                      label="description"
                      name="description"
                      type="text"
                      v-model="editedDescription"
                    ></v-textarea>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="light-blue darken-4" outlined @click="onCancel">cancel</v-btn>
                <v-btn dark color="light-blue darken-4" @click="onSave">save</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      dialog: false,
      editedTitle: this.product.title,
      editedDescription: this.product.description
    }
  },
  methods: {
    onCancel () {
      this.editedTitle = this.product.title
      this.editedDescription = this.product.description
      this.dialog = false
    },
    onSave () {
      if (this.editedTitle !== '' && this.editedDescription !== '') {
        this.$store.dispatch('updateProduct', {
          title: this.editedDescription,
          description: this.editedDescription,
          id: this.product.id
        })
        this.dialog = false
      }
    }
  }
}
</script>
