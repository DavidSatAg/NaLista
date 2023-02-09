<template>
  <v-app-bar>
    <v-app-bar-title class="title"><h1>{{ title }}</h1></v-app-bar-title>
    <template #append>
      <v-btn icon :to="{ name: 'mytitles-list' }">
        <v-icon color="grey-lighten-1">
          mdi-playlist-edit
        </v-icon>
        <v-tooltip
        activator="parent"
        location="bottom"
        >Minha lista</v-tooltip>
      </v-btn>
      <v-btn icon :to="{ name: 'titles-list' }">
        <v-icon color="grey-lighten-1">
          mdi-home-account
        </v-icon>
        <v-tooltip
        activator="parent"
        location="bottom"
        >Home
        </v-tooltip>
      </v-btn>
      <!-- <v-btn icon="mdi-magnify"></v-btn> -->
      <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click.stop="themeClick">
        <v-tooltip
        activator="parent"
        location="bottom"
        >Tema</v-tooltip>
      </v-btn>

      <v-btn icon="mdi-dots-vertical">
        <v-icon icon="mdi-dots-vertical" />
        <v-tooltip
        activator="parent"
        location="bottom"
        >Opções
        </v-tooltip>
        <v-menu activator="parent">
          <v-list>
            <v-list-item :to="{ name: 'accounts-logout' }"> Sair </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "NaLista",
    },
    theme: {
      type: String,
      required: true,
      default: "dark",
    },
  },
  emits: ["themeClick"],
  data: () => {
    return {}
  },
  methods: {
    themeClick() {
      this.$emit("themeClick")
    },
  },
}
</script>

<style scoped>
.title {
  font-weight: bolder;
  color: red;
}
</style>