import { dogsAPI } from './../../api/api'

let initialState = {
  main_wallpaper: 'https://s1.1zoom.me/big3/61/421295-Kycb.jpg',
  dogs_pictures: [],
}

const SET_DOGS = 'SET_DOGS'

const dogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DOGS: {
      return {
        ...state,
        dogs_pictures: [...state.dogs_pictures, action.newDogs],
      }
    }
    default:
      return state;
  }
}

export const setDogs = (newDogs: any) => ({ type: SET_DOGS, newDogs })

export const getDogs = (quantity: number = 1) => {
  return (dispatch: any) => {
    dogsAPI.getRandomDogs(quantity).then((data: any) => {
      data.message.map((item: any) => dispatch(setDogs(item)));
    });
  }
};



export default dogsReducer