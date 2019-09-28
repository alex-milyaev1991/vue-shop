<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>{{ product.title }} ({{ product.category }})</h2>   
      </v-col>
    </v-row>
    <v-row
      class="mb-12"
      justify="center"
    >
      <v-col lg="4">  
        <div class="gallery">
            <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
        </div>
        <v-row>
            <v-col
              v-for="n in 3"
              :key="n"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
      </v-col>
      <v-col lg="8">
        <div class="text-left">
            <v-chip
                class="ma-2"
                color="green"
                outlined
            >
                {{ product.price }} $
            </v-chip>

            <v-chip
                class="ma-2"
                color="orange"
                label
                outlined
            >
                <span class="price old-price">{{ product.old_price }} $</span>
            </v-chip>
            <v-btn small color="success" dark>Buy</v-btn>
        </div>
        <div class="content" v-html="product.content"></div>
      </v-col>
    </v-row>
    <testimonials 
      :testimonials="testimonials"
      :product="product"
    ></testimonials>
  </v-container>
</template>

<script>
import { db } from '../main'
import Testimonials from '../components/Testimonials'
export default {
  components: {
    testimonials: Testimonials
  },
  data() {
    return {
      product: {
          id: '343',
          title: 'Product title',
          category: 'phone',
          price: 900,
          old_price: 700,
          gallery: [
              {
                  id: '32344',
                  url: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                  isMain: true
              },
              {
                  id: '32345',
                  url: 'https://picsum.photos/500/300?image=15',
                  isMain: true
              },
              {
                  id: '32346',
                  url: 'https://picsum.photos/500/300?image=20',
                  isMain: true
              }
          ],
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
          content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      },
       testimonials: [
          {
              id: '32423',
              id_product: '343',
              date: '23.12.2018',
              author: 'Alex',
              content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"

          },
            {
              id: '32427',
              id_product: '343',
              date: '23.12.2018',
              author: 'Alex2',
              content: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"

          }
      ]
    }
  },
};
</script>

<style lang="scss">
    .old-price {
        text-decoration: line-through;
    }
</style>
