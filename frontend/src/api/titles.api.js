import api from "./config.js"
import apiHelpers from "./helpers.js"
import API_KEY from "../../../.env"

export const apijs = {
    async search_titles(searchstring) {
        const url = `https://imdb-api.com/en/API/SearchTitle/${API_KEY}/${searchstring}`
        const result = await fetch(url)
        console.log('passei aqui')
        return await result.json()
    },
    async get_title(id) {
        const url = `https://imdb-api.com/en/API/Title/${API_KEY}/${id}/FullActor,FullCast,Posters,Images,Ratings,Wikipedia,`
        const result = await fetch(url)
        console.log('tô voando')
        return await result.json()
    }
}

export default {
  getTitles: () => {
    return new Promise((resolve, reject) => {
      api
        .get("/api/titles/list")
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  addNewTitle: (title_id, title, type, image, imDbRating, images, stars, genres, plot) => {
    return new Promise((resolve, reject) => {
      api
        .post("/api/titles/add", apiHelpers.dataToForm({ title_id, title, type, image, imDbRating, images, stars, genres, plot }))
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  getNumberOfTitles() {
    return new Promise((resolve, reject) => {
      api
        .get("/api/titles/titlescounter")
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  }
  // addNewTitle: (titleInfo) => {
  //   return new Promise((resolve, reject) => {
  //     api
  //       .post("/api/titles/add", apiHelpers.dataToForm({ titleInfo }))
  //       .then((response) => {
  //         return resolve(response.data)
  //       })
  //       .catch((error) => {
  //         return reject(error)
  //       })
  //   })
  // },
}
