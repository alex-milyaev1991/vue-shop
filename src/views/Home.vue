<template>
  <div>
    <HelloWorld></HelloWorld>
    
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';

export default {
  components: {
    HelloWorld,
  },
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
