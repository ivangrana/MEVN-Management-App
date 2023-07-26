<template>
  
<VContainer >
  <VRow justify="space-around" style="width: 1200px;">
  <VCard width="240" title="tasks done" color="red">
    <VCardItem style="background-color: azure;">
    <v-progress-circular color = "green" 
bg-color="red" 
:model-value="percent"
:size="200" 
:width="40"

>
  {{percent}}%
</v-progress-circular>
</VCardItem>
  </VCard>

  <VCard width="240" title="Progress" color="red">
    <VCardItem style="background-color: azure;">
    <v-progress-circular color = "black" 
bg-color="red" 
:model-value="30"
:size="200" 
:width="40"

>
  30%
</v-progress-circular>
</VCardItem>
  </VCard>

</VRow>


</VContainer>
</template>

<script>
export default{
data() {
  return {
    percent: (50/80)*100
  }
},
}
</script>