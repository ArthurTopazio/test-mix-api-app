import axios from 'axios'

//dogs-page
const dogsInstance = axios.create({
  baseURL: 'https://dog.ceo/api/',
})

export const dogsAPI = {
  getRandomDogs(quantity = 1) {
    return dogsInstance.get(`breeds/image/random/${quantity}`)
      .then(response => { return response.data });
  },
}

// Jokes-page
const jokeInstance = axios.create({
  baseURL: 'https://v2.jokeapi.dev/joke/',
})

export const jokesAPI = {
  getJokes() {
    return jokeInstance.get(`Any?type=single`)
      .then(response => { return response.data });
  },
}
//category: string = 'Any', lang?: string, blacklistFlags?: string,
//type = 'single', contains?: string, amount?: number

//category (Any, Programming, Miscellaneous,Dark, Pun, Spooky, Christmas) Категория
//lang=de, cs, es, fr, pt (язык)
//blacklistFlags=nsfw,religious,political,racist,sexist,explicit (ограничений)
//type=single / twopart (сэтап/панчлайн)
//&contains=dddcscsdc включает слово
//amount=5 количество


/*
  getUserProfile(userId) {
    console.warn('Old method. Please update')
    return profileAPI.getProfile(userId)
  },

  getAuth() {
    return instance.get(`auth/me`)
      .then(response => { return response });
  },

  login(email, password, rememberMe = false) {
    return instance.post('/auth/login', { email, password, rememberMe })
  },

  logout() {
    return instance.delete('/auth/login')
  },

  follow(userId) {
    return instance
      .post(`follow/${userId}`)
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
  },*/