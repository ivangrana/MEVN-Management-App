<template>
  <v-app style="height: 800px;">
    <v-card >
    <v-container fluid >
      <v-navigation-drawer
        expand-on-hover
        rail
        color="red"
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
          <v-list-item prepend-icon="mdi-chart-donut" title="Dashboard" value="myfiles" to="/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="My team" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-clipboard" title="Notations" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main  style="height: max-content;">
      <RouterView></RouterView>
      </v-main>
    </v-container>
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

