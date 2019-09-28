<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>Popular products</h2>
        <span v-for="item of products" :key="item.key"> {{item.title}}</span>
      </v-col>
    </v-row>
    <v-row
      class="mb-6"
      justify="center"
    >
      <v-col lg="4">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>

          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn outlined>Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>

          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn outlined>Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>

          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn outlined>Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>

          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn outlined>Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>

          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn outlined>Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="4">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>

          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn outlined>Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '../main'
export default {
  data() {
    return {
      products: [],
      newReptile: ''
    }
  },
  firestore() {
    return {
      products: db.collection('products'),
    }
  },
  created() {
    /*console.log(products)*/
    console.log(this.products)
  }
};
</script>

<style lang="scss">
  h2 {
    text-align: center;
  }
</style>
