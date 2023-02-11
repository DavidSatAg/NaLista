<template>
  <v-container class="fill-height home">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="card mx-auto pb-6">
        <v-img contain class="pt-8" height="240" src="@/assets/logo_nalista.png" />
        <blockquote class="blockquote text-h5">
        &#8220;Vou deixar na lista, depois eu assisto&#8221;
        <footer>
          <small>
            <em>&mdash; David Aguina &mdash;</em>
          </small>
        </footer>
        </blockquote>
      


        <!-- <div class="text-body-1 mb-n1 pt-4">Bem-vindo ao template</div> -->
        <h1 class="text-h2 font-weight-bold">NaLista</h1>
        <!-- <code>Vue3 + Vuetify + Vite</code> -->
      </div>
      <div class="py-6" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <!-- <v-btn
            color="primary"
            :to="{ name: 'base-getstarted' }"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            class="my-4">
            <v-icon icon="mdi-speedometer" size="large" start />
            Get Started
          </v-btn> -->
          <v-btn
            v-if="!loggedUser"
            color="red"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            :to="{ name: 'accounts-login' }"
            class="my-4">
            <v-icon icon="mdi-account-arrow-right-outline" size="large" start />
            Login
          </v-btn>
          <v-btn
            v-else
            color="red"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            :to="{ name: 'accounts-logout' }">
            <v-icon icon="mdi-account-arrow-right-outline" size="large" start />
            Logout
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="loggedUser"
            color="red"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            variant="flat"
            :to="{ name: 'titles-list' }"
            class="my-4">
            <v-icon icon="mdi-folder-star-multiple" size="large" start />
            Lista de títulos
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapState } from "pinia"
import { useAccountsStore } from "@/stores/accountsStore"

export default {
  computed: {
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
}
</script>

<style scoped>
.home {
  /* background: url('frontend/src/assets/cinema.jpg') no-repeat center center fixed !important; */
  background-image: url('@/assets/cinema.jpg');
  /* background-color: red; */
  background-size: cover;
  background-position: center;
}

.card {
  background: rgba(0, 0, 0, 0.642);
  max-width: 600px;
  border-radius: 15px
}
</style>