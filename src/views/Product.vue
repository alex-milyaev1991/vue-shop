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
        <product-gallery :images="product.gallery"></product-gallery>
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
import ProductGallery from '../components/ProductGallery'
export default {
  components: {
    testimonials: Testimonials,
    productGallery: ProductGallery
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
                  isMain: false
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
