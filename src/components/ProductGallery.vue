<template>
  <div class="gallery-component">
      <template v-if="mainImg">
        <div class="gallery">
          <v-img @click="dialog = !dialog"
              class="white--text"
              height="200px"
              :src="mainImg.url"
          >
          </v-img>
        </div>
        <v-row>
            <v-col
              v-for="image of dop_images"
              :key="image.id"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="image.url"
                  :lazy-src="image.url"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  @click="dialog = !dialog"
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
        <v-dialog v-model="dialog" persistent max-width="100%">
          <v-card>
            <v-card-title>
              <span class="headline">Gallery</span>
            </v-card-title>
            <v-container>
              <v-carousel hide-delimiters>
                <v-carousel-item
                  v-for="(item,i) in images"
                  :key="i"
                  :src="item.url"
                ></v-carousel-item>
              </v-carousel>
            </v-container>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
  </div>
</template>

<script>

export default {
    props: [
        'images'
    ],
    data() {
        return {
            dialog: false,
            mainImg: '',
            dop_images: []
        }
    },
    created() {
        let images = this.images;
        let mainImg = images.find(function(value){return value.isMain == true;});;
        let dop_images = [];

        if(mainImg) {
          this.mainImg = mainImg;
        } else {
          this.mainImg = this.images[0];
        }

        images.forEach(function(item, i, images) {
          if(item.url != mainImg.url) {
            dop_images.push(item);
          }
        });
        this.dop_images = dop_images;
    }
};
</script>

<style lang="scss">
    
</style>
