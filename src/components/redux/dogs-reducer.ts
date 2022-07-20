import { dogsAPI } from './../../api/api'

let initialState = {
  main_wallpaper: 'https://s1.1zoom.me/big3/61/421295-Kycb.jpg',
  dogs_pictures: [],
  isFetching: false,
  fetchQuant: 0,
  allBreedsList: null,
  breedPicture: null,
}

const SET_DOGS = 'SET_DOGS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_FETCH_QUANT = 'SET_FETCH_QUANT'
const SET_ALL_BREEDS_LIST = 'SET_ALL_BREEDS_LIST'
const SET_BREED_PICTURE = 'SET_BREED_PICTURE'

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

    case SET_ALL_BREEDS_LIST: {
      return {
        ...state,
        allBreedsList: action.breedsList,
      }
    }

    case SET_BREED_PICTURE: {
      return {
        ...state,
        breedPicture: action.breedPicture,
      }
    }

    default:
      return state
  }
}

export const toggleIsFetching = (isFetching: boolean) => ({
  type: TOGGLE_IS_FETCHING, isFetching
})

export const setBreedPicture = (breedPicture: string) => ({
  type: SET_BREED_PICTURE, breedPicture
})

export const setDogs = (newDogs: any) => ({ type: SET_DOGS, newDogs })

export const setFetchQuant = (fetchQuant: number) => ({ type: SET_FETCH_QUANT, fetchQuant })

export const setDogsBreedsList = (breedsList: any) => ({ type: SET_ALL_BREEDS_LIST, breedsList })

export const getDogsBreedsList = () => {
  return (dispatch: any) => {
    dogsAPI.getAllBreedsList().then((data: any) => {
      dispatch(setDogsBreedsList(data.message))
    })
  }
}

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

export const getBreedPicture = (name: string) => {
  return (dispatch: any) => {
    dogsAPI.getBreedPicture(name).then((data: any) => {
      dispatch(setBreedPicture(data['message']));
      debugger
    })
  }
}

export default dogsReducer