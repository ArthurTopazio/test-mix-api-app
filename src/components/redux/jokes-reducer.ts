import { jokesAPI } from './../../api/api'

let initialState = {
  jokes: [],
}

const SET_JOKES = 'SET_JOKES'

const jokesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_JOKES: {
      return {
        ...state,
        jokes: [...state.jokes, action.newJokes],
      }
    }
    default:
      return state;
  }
}

export const setJokes = (newJokes: any) => ({ type: SET_JOKES, newJokes })

export const getJokes = (category: string = 'Any', lang?: string, blacklistFlags?: string,
  type = 'single', contains?: string, amount?: number) => {
  return (dispatch: any) => {
    jokesAPI.getJokes(category, lang, blacklistFlags, type, contains, amount)
      .then((data: any) => {
        dispatch(setJokes(data.joke || data.jokes));
      });
  }
};



export default jokesReducer