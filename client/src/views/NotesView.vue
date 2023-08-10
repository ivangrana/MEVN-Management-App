<template>
{{ info }}
</template>

<script>
import axios from 'axios'

export default {

    data() {
    return {
      info: []
    };
  },

    methods: {
        getNote(){
            axios.get('http://localhost:3000/api/items')
        .then(response => {
            this.info = response.data
        })
        
        }
    
    },

   mounted() {
    this.getNote()
   },

}
</script>