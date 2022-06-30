import { dogsAPI } from './../../api/api'

let initialState = {
  dogs_pictures: ['https://images.dog.ceo/breeds/bluetick/n02088632_2364.jpg',],
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
      dispatch(setDogs(data.message[0]));
    });
  }
};



export default dogsReducer