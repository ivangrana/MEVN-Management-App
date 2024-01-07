<template>
  <v-container class="mx-auto">
    <VCol v-for="(item, index) in info" :key="index">
    <VCard>
      <VCardTitle>{{ info[index]["title"] }}</VCardTitle>
      <VCardText>description</VCardText>
      <VCardSubtitle>{{ info[index]["content"] }}</VCardSubtitle>
      <VBtn color="red">Delete</VBtn>
    </VCard>
  </VCol>
  </v-container>
  
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      info: [Object]
    };
  },


  mounted() {
    axios.get('http://192.168.15.14:3000/api/notes')
      .then(response => {
        (this.info = response.data)
      })

  }

}
</script>