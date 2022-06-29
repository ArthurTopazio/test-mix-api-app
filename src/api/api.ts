import axios from 'axios'

const dogsInstance = axios.create({
  baseURL: 'https://dog.ceo/api/',
})

export const dogsAPI = {
  getRandomDogs(quantity = 1) {
    return dogsInstance.get(`breeds/image/random/${quantity}`)
      .then(response => { return response });
  },
}


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