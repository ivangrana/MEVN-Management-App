<template>
  <VContainer style=" height: 800px;" >
    <VCol cols="12">
  
      <VRow>
    <VCard width="500" title="Notifications" color="#141414" style="color: #cacaca;">
      <VCardItem style="background-color: #3c3c3c;">
        <v-list lines="three" bg-color="#3c3c3c">
    
    <v-list-item style="color: #cacaca;"
      prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
      title="Notification example 1"
    >
      a
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item style="color: #cacaca;"
      prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg"
    >
      <template v-slot:title>
        Notification example 2<span class="text-grey-lighten-1"></span>
      </template>

      <template v-slot:subtitle>
        <span class="font-weight-bold">Infeliz nº3</span> &mdash; Wish I could come, but I'm out of town this weekend.
      </template>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item style="color: #cacaca;"
      prepend-avatar="https://cdn.vuetifyjs.com/images/lists/3.jpg"
      title="Notification example 3"
    >
      <template v-slot:subtitle>
        <span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?
      </template>
    </v-list-item>
  </v-list>
      
      </VCardItem>
    </VCard>
<VSpacer></VSpacer>
    <VCard width="500" title="New messages" color="#141414" style="color: #cacaca;">
      <VCardItem style="background-color: #3c3c3c;">a</VCardItem>
    </VCard>
  </VRow>

  <VRow style="margin-top: 50px;">
    <VCard width="500" title="Week Resume" color="#141414" style="color: #cacaca;">
      <VCardItem style="background-color: #3c3c3c;">a</VCardItem>
    </VCard>
<VSpacer></VSpacer>
    <VCard width="500" title="Statistics" color="#141414" style="color: #cacaca;">
      <VCardItem style="background-color: #3c3c3c;">a</VCardItem>
    </VCard>
  </VRow>

</VCol>
  </VContainer>
</template>



// Components



