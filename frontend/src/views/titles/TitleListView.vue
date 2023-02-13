<template>
    <div>
      <v-text-field
      v-model="titlesearch"
      placeholder="Digite aqui o nome de um título"></v-text-field>
      <v-container fluid>
        <div v-if="titleList.length == 0" class="d-flex-column text-center">
          <v-icon class="mx-auto mt-16" style="font-size: 300px; color: gray">mdi-camera</v-icon>
          <h1 style="color: gray; text-align: center">Procure filmes e séries</h1>
        </div>
        <div v-else>
          <v-row dense>
          <v-col
            v-for="title in titleList"
            :key="title.id"
            :cols="4"
          >
            <v-card>
              <v-img
                :src="title.image"
                class="white--text align-end card-img"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="600px"
              >
                <v-card-title v-text="title.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <Modal :title="title"></Modal>
                <v-spacer></v-spacer>
  
                <v-btn icon @click="addTitle(title.id)">
                  <v-icon>mdi-bookmark</v-icon>
                  <v-tooltip
                  activator="parent"
                  location="bottom"
                  >Salvar
                  </v-tooltip>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        </div>
        
      </v-container>
    </div>
  </template>
      
  <script>
  
    import {debouncedecorator} from '@/helpers/debouncer.js'
    import {apijs} from '@/api/titles.api-fk.js'
    import Modal from '@/components/TitleModal.vue'
    import TitlesApi from "@/api/titles.api.js"
    import { useTitleCounter } from "@/stores/mytitlesStore"
    import { mapState } from 'pinia'
    import api from "@/api/titles.api.js"
    export default {
        components: {
          Modal
        },
        setup() {
          const titleCounter = useTitleCounter()
          return {titleCounter}
        },
        data: () => ({
          imdbtitle: null,
          titlesearch: null,
          titleList: [],
          titleLoading: false,
          bookmarkSelected: false,
          userTitleList: [],
          titleSelected: null,
          search: false,
        }),
        computed: {
          ...mapState(useTitleCounter, ["contador"])
        },
        watch: {
          titlesearch() {
            if (this.titlesearch) {
              this.searchImdbTitles()
            } else {
              this.titleList = []
            }
          },
        },
        mounted() {
          this.getSeries()
        },
        methods: {
          async getSeries() {
            const count = await api.getNumberOfTitles()
            this.titleCounter.setContador(count)
          },
          searchImdbTitles: debouncedecorator(async function() {
            this.titleLoading = true
            const data = await apijs.search_titles(this.titlesearch)
            this.titleList = data.results
            this.titleLoading = false
            }, 500),
          async addTitle(id) {
            const data = await apijs.get_title(id)
            this.titleSelected = data
            console.log(this.titleSelected)
          TitlesApi.addNewTitle(
              this.titleSelected.id,
              this.titleSelected.title,
              this.titleSelected.type,
              this.titleSelected.image,
              this.titleSelected.imDbRating,
              this.titleSelected.images.items.image,
              this.titleSelected.stars,
              this.titleSelected.genres,
              this.titleSelected.plot
              )
            const count = await api.getNumberOfTitles()
            this.titleCounter.setContador(count)
          },
         },
    }
  </script>
  
  <style>
    .card-img:hover {
      opacity: 80%;
    }
  </style>