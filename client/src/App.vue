<template>
  <v-app>
    <v-navigation-drawer
        expand-on-hover
        rail
        color="#141414"
        style="color: #cacaca;"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://avatars.githubusercontent.com/u/89265428?v=4"
            title="Ivan"
            subtitle="Manager"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-chart-donut" title="Dashboard" value="myfiles" to="/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="My team" value="shared" to="/team"></v-list-item>
          <v-list-item prepend-icon="mdi-clipboard" title="Notations" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-main style="background-color: #787878;">
      
        <RouterView></RouterView>
      
  
    </v-main>

  </v-app>
</template>

<script>


export default {
  name: "App",
  data() {
    return {
      item: [{ id: "product id", number: "number" }],
      drawer: true,
      group: null,
      dialog: false,
      ID: "",
      category: "",
      qtd: "",
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.v-text-field input::placeholder {
  color: rgba(185, 185, 185, 0.74);
  opacity: 100;
}

.v-text-field {
  color: white;
}
</style>