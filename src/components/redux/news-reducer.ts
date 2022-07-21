import { dogsAPI } from './../../api/api'

let initialState = {
  main_wallpaper: 'https://hdwallsource.com/img/2016/5/new-york-times-square-wallpaper-51014-52710-hd-wallpapers.jpg',

}

const newsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default newsReducer