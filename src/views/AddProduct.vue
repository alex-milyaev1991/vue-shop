<template>
  <v-container>
      <h2>Add product</h2>
      <v-row>
        <v-col md="6">
            <v-text-field
                label="Title"
                solo
            ></v-text-field>
        </v-col>
        <v-col md="6">
            <v-select
                label="Category"
                solo
                :items="categories"
                v-model="category"
            ></v-select>
        </v-col>
      </v-row>
      <v-row>
          <v-col md="3">
            <v-text-field
                label="Price"
                solo
                v-model="price"
            ></v-text-field>
          </v-col>
          <v-col md="3">
            <v-text-field
                label="Old price"
                solo
                v-model="old_price"
            ></v-text-field>
          </v-col>
          <v-col>
              <v-row>
                <v-checkbox class="mx-2" label="Sale" v-model="sale"></v-checkbox>
                <v-checkbox class="mx-2" label="Top sales" v-model="top_sale"></v-checkbox>
              </v-row>
          </v-col>
      </v-row>
      <v-row>
          <v-col md="6">
            <v-file-input
                solo-inverted
                v-model="images"
                color="deep-purple accent-4"
                counter
                label="File input"
                multiple
                placeholder="Select your images"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000"
                @change="uploadImage"
            >
                <template v-slot:selection="{ index, text }">
                <v-chip
                    v-if="index < 2"
                    color="deep-purple accent-4"
                    dark
                    label
                    small
                >
                    {{ text }}
                </v-chip>

                <span
                    v-else-if="index === 2"
                    class="overline grey--text text--darken-3 mx-2"
                >
                    +{{ files.length - 2 }} File(s)
                </span>
                </template>
            </v-file-input>
            <!--<img v-for="image of images" :key="image.name" :src="image.name" alt="">-->
            <img :src="imageSrc" alt="">
          </v-col>
      </v-row>
      <v-row>
        <v-textarea
          label="Description"
          auto-grow
          outlined
          rows="5"
          row-height="15"
          v-model="description"
        ></v-textarea>
      </v-row>
      <v-row>
          <v-col class="text-center btns">
            <v-btn>Cancel</v-btn>
            <v-btn 
                color="success"
                @click="addProduct()"
            >Save</v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { db, storage, storageRef } from '../main'
export default {
    data() {
        return {
            categories: [
                "category 1",
                "category 2"
            ],
            title: "dsfdsfs",
            category: "",
            price: "",
            old_price: "",
            sale: false,
            top_sale: false,
            description: "",
            content: "",
            images: [],
            image: null,
            imageSrc: ""
        }
    },
    methods: {
        uploadImage() {
            const reader = new FileReader();
            reader.onload = e => {
                this.imageSrc = reader.result;
            }
            reader.readAsDataURL(this.images[0])
            this.image = this.images[0]
        },
        async addProduct() {
            let newProduct = {
                title: this.title,
                category: this.category,
                price: this.price,
                old_price: this.old_price,
                sale: this.sale,
                top_sale: this.top_sale,
                description: this.description,
                content: this.content
            }

            const image = this.images[0];

            const product = await db.collection('products').add(newProduct);
            const imageExt = image.name.slice(image.name.lastIndexOf('.'));

            const fileData = await storage.ref(`products/${image.name}`).put(image);
            const imageSrc = await storage.ref().child(fileData.ref.fullPath).getDownloadURL();
            console.log(imageSrc,product)
            await db.collection('products').doc(product.id).update({
                gallery: imageSrc
            })
            
        }
    }
};
</script>

<style lang="scss">
    .btns {
        .v-btn {
            margin: 0 10px;
        }
    }
</style>
