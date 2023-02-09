<template>
    <div>
      <!-- <v-autocomplete
          v-model="imdbtitle"
          :items="titlelist"
          :loading="titleLoading"
          item-text="title"
          clearable
      ></v-autocomplete> -->
      <v-text-field
      v-model="titlesearch"
      placeholder="Digite aqui o nome de um título"></v-text-field>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="title in titlelist"
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
                <!-- <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn> -->
  
                <v-btn icon @click="addTitle(title.id)">
                  <v-icon>mdi-bookmark</v-icon>
                  <v-tooltip
                  activator="parent"
                  location="bottom"
                  >Salvar
                  </v-tooltip>
                </v-btn>
  
                <!-- <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
      
  <script>
  
    import {debouncedecorator} from '@/helpers/debouncer.js'
    import {apijs} from '@/api/titles.api-fk.js'
    import Modal from '@/components/TitleModal.vue'
    import TitlesApi from "@/api/titles.api.js"
    export default {
        components: {
          Modal
        },
        data: () => ({
          imdbtitle: null,
          titlesearch: null,
          titlelist: [],
          titleLoading: false,
          bookmarkSelected: false,
          userTitleList: [],
          titleSelected: null
        //   cards: [
        //   { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        //   { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        //   { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        // ],
        }),
        watch: {
          titlesearch() {
            if (this.titlesearch) {
              this.searchImdbTitles()
            }
          },
          // imdbtitle() {
          //   if (this.imdbtitle) {
          //     console.log(this.imdbtitle)
          //   }
          // }
        },
        methods: {
          searchImdbTitles: debouncedecorator(async function() {
            this.titleLoading = true
            const data = await apijs.search_titles(this.titlesearch)
            this.titlelist = data.results
            this.titleLoading = false
            }, 500),
          async addTitle(id) {
            const data = await apijs.get_title(id)
            this.titleSelected = data
            console.log(this.titleSelected)
            TitlesApi.addNewTitle(
              // this.titleSelected
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
              // .then((title) => {
              //   this.appStore.showSnackbar(`Novo título adicionado #${title.id}`)
              // })
          }
         },
    }
  </script>
  
  <style>
    .card-img:hover {
      opacity: 80%;
    }
  </style>