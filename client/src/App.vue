<template>
  <v-app>
    <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        color="orange"
        width="300"
        
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://avatars.githubusercontent.com/u/89265428?v=4"
            title="Ivan Grana"
            subtitle="Manager"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-chart-donut" title="Dashboard" value="myfiles" to="/about"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="My team" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-clipboard" title="Notations" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 800px">
      <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-card>
  </v-app>
</template>


<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
