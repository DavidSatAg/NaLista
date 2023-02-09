import api from "./config.js"

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
    deleteTitles: (id) => {
      return new Promise((resolve, reject) => {
        api
          .post("/api/titles/delete", {id})
          .then((response) => {
            return resolve(response.data)
          })
          .catch((error) => {
            return reject(error)
          })
      })
    },
    getTitleInfo: (id) => {
      return new Promise((resolve, reject) => {
        api
          .post("/api/titles/getinfo", {id})
          .then((response) => {
            return resolve(response)
          })
          .catch((error) => {
            return reject(error)
          })
      })
    },
}