import { dogsAPI } from './../../api/api'

let initialState = {
  main_wallpaper: 'https://s1.1zoom.me/big3/61/421295-Kycb.jpg',
  dogs_pictures: [],
  isFetching: false,
  fetchQuant: 0,
}

const SET_DOGS = 'SET_DOGS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_FETCH_QUANT = 'SET_FETCH_QUANT'

const dogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DOGS: {
      return {
        ...state,
        dogs_pictures: [...state.dogs_pictures, action.newDogs],
      }
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }

    case SET_FETCH_QUANT: {
      return {
        ...state,
        fetchQuant: action.fetchQuant,
      }
    }
    default:
      return state
  }
}

export const toggleIsFetching = (isFetching: boolean) => ({
  type: TOGGLE_IS_FETCHING, isFetching
})

export const setDogs = (newDogs: any) => ({ type: SET_DOGS, newDogs })

export const setFetchQuant = (fetchQuant: number) => ({ type: SET_FETCH_QUANT, fetchQuant })

export const getDogs = (quantity: number = 1) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setFetchQuant(quantity))
    dogsAPI.getRandomDogs(quantity).then((data: any) => {
      dispatch(toggleIsFetching(false))
      data.message.map((item: any) => dispatch(setDogs(item)));
    })
  }
}





export default dogsReducer