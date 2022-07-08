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

//samurai social network

const instanceSN = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "6f963ccd-4e56-4cbf-a84f-25642038e51e"
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanceSN.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => { return response.data });
  },

  getUserProfile(userId: any) {
    console.warn('Old method. Please update')
    return profileAPI.getProfile(userId)
  },

  getAuth() {
    return instanceSN.get(`auth/me`)
      .then(response => { return response });
  },

  login(email: string, password: string, rememberMe: boolean = false) {
    return instanceSN.post('/auth/login', { email, password, rememberMe })
  },

  logout() {
    return instanceSN.delete('/auth/login')
  },

  follow(userId: any) {
    return instanceSN
      .post(`follow/${userId}`)
  },

  unfollow(userId: any) {
    return instanceSN
      .delete(`follow/${userId}`)
  },
}

export const profileAPI = {
  getProfile(userId: any) {
    return instanceSN.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      });
  },

  getStatus(userId: any) {
    return instanceSN.get(`profile/status/${userId}`)
  },

  updateStatus(update: any) {
    return instanceSN.put('profile/status', { status: update })
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