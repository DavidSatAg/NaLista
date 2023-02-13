<template>
  <div>
    <v-btn text @click.stop="dialog = true" @click="getTitle(title.id)">Saiba mais</v-btn>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card
        class="mx-auto"
        min-width="450px"
        max-width="500px"
      >
      <v-img
        :src="titleInfo.poster_image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
      </v-img>
    <v-card-title>
      <h2>{{ titleInfo.title }}</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-subtitle>
      {{ titleInfo.stars }}
    </v-card-subtitle>
    <div class="pl-4">
      <span class="grey--text text--lighten-2 text-caption mr-2 align-center">
      ({{ rating }})
      </span>
      <v-rating
        v-model="ratingStars"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
        readonly
      ></v-rating>
    </div>
    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        Sinopse
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ titleInfo.plot }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
      </v-dialog>
  </div>
</template>
  
<script>
import apijs from '@/api/mytitles.api.js'
export default {
    props: {
    'title': {
        'type': Object,
        'default': null
    }
    },
    data () {
    return {
        dialog: false,
        show: false,
        titleInfo: {},
        rating: 0,
        ratingStars :0
    }
    },
    methods: {
    async getTitle(id) {
        console.log('alo ' + id)
        const data = await apijs.getTitleInfo(id)
        this.titleInfo = data.data
        this.rating = this.titleInfo.rating
        this.ratingStars = this.rating / 2
    },
  },
}
</script>