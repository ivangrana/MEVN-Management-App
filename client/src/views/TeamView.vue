<template>
  
    <v-card
      class="md-auto"
      max-width="1325"
      height="400"
      elevation="8"
      title="My team"
      
    >
    <v-divider style="opacity: 0.6;" color="green" thickness="3"></v-divider>
      <v-list lines="three">
    
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="Infeliz nº1"
        >
          <template v-slot:subtitle>
            <span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
          </template>
        </v-list-item>
  
        <v-divider inset></v-divider>
  
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg"
        >
          <template v-slot:title>
            Infeliz nº2<span class="text-grey-lighten-1"></span>
          </template>
  
          <template v-slot:subtitle>
            <span class="font-weight-bold">Infeliz nº3</span> &mdash; Wish I could come, but I'm out of town this weekend.
          </template>
        </v-list-item>
  
        <v-divider inset></v-divider>
  
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/3.jpg"
          title="Infeliz nº3"
        >
          <template v-slot:subtitle>
            <span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?
          </template>
        </v-list-item>
      </v-list>
    </v-card>
 

  </template>

