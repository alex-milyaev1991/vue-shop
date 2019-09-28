<template>
  <div class="testimonials">
        <h2 class="testimonials-title">
            <span>Testimonials</span>
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                    <v-btn color="secondary" dark v-on="on">Add feedback</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col md="12">
                                <v-text-field
                                    label="Name"
                                ></v-text-field>
                            </v-col>
                            <v-col md="12">
                                <v-textarea
                                    name="input-7-1"
                                    label="Text"
                                ></v-textarea>
                            </v-col>    
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </h2>
        <div class="testimonials-item" v-for="item of testimonials" :key="item.id">
            <div class="testimonials-item_info">
                <span class="date">{{ item.date }}</span>
                <div class="span author">{{ item.author }}</div>
            </div>
            <div class="testimonials-item_content" v-html="item.content"></div>
            <div class="testimonials-item_control">
                <v-btn small color="primary" dark>Read more</v-btn>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        'testimonials',
        'product'
    ],
    data() {
        return {
            dialog: false,
        }
    }
};
</script>

<style lang="scss">
    .testimonials {
        &-title {
            text-align: left;
            display: flex;
            justify-content: space-between;
        }
        &-item {
            margin-bottom: 15px;
            &_info {
                display: flex;
                & > * {
                    margin-right: 10px;
                }
            }
            &_control {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>
