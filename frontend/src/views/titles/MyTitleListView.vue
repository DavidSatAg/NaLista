<template>
  <div>
    <h2 class="pl-4 pt-4">
      Minha lista de títulos
    </h2>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="title in titlelist"
          :key="title.id"
          :cols="4"
        >
          <v-card>
            <v-img
              :src="title.poster_image"
              class="white--text align-end card-img"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="600px"
            >
              <v-card-title v-text="title.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <Modal :title="title"></Modal>
              <v-spacer></v-spacer>
              <v-btn icon @click="removeTitle(title.id)">
                <v-icon>mdi-close-circle</v-icon>
                <v-tooltip
                activator="parent"
                location="bottom"
                >Remover
                </v-tooltip>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
    
<script>
  import api from '@/api/mytitles.api.js'
  import Modal from '@/components/MyTitleModal.vue'
  // import TitlesApi from "@/api/titles.api.js"
  // import Counter from '@/components/Counter.vue'
  // import { useCounterStore } from '@/stores/mytitlesStore'

  // const storeCounter = useCounterStore()
  import { mapState } from 'pinia'
  import { useTitleCounter } from "@/stores/mytitlesStore"
  import apijs from "@/api/titles.api.js"

  export default {
    components: {
      Modal
    },
  setup() {
    const titleCounter = useTitleCounter()
    return {titleCounter}
  },
  data: () => ({
    titlelist: [],
  }),
  computed: {
    ...mapState(useTitleCounter, ['contador'])
  },
  mounted() {
    this.getTitles()
  },
  methods: {
    async getTitles() {
      const data = await api.getTitles()
      this.titlelist = data.titles
      this.titleCounter.secondTitleCounter()
    },
    async removeTitle(id) {
      console.log(id)
      const data = await api.deleteTitles(id)
      const count = await apijs.getNumberOfTitles()
      this.titleCounter.setContador(count)
      this.getTitles()
    },
  },
}
</script>

<style>
.card-img:hover {
  opacity: 80%;
}
</style>