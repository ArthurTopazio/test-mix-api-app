import { usersAPI } from "./../../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  error: ''
};

const authReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state;
  }
};

export const setAuthUserData = (id: any, email: any, login: any, isAuth: any) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth }
});

export const setError = (error: any) => ({
  type: SET_ERROR,
  error,
})

export const getAuth = () => {
  return (dispatch: any) => {
    return usersAPI.getAuth().then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  }
}

export const login = (email: any, password: any, rememberMe: any) => {
  console.log('its login request with:', email, password, rememberMe)
  return (dispatch: any) => {
    usersAPI.login(email, password, rememberMe)
      .then(response => {
        console.log(response)
        if (response.data.resultCode === 0) {
          dispatch(getAuth());
        } else {
          dispatch(setError(response.data.messages))
          console.log("response with mistake", response.data.messages)
        }
      });
  }
}

export const logout = () => {
  return (dispatch: any) => {
    usersAPI.logout()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
      });
  }
}


export default authReducer