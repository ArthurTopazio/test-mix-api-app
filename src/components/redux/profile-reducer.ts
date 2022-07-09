import { usersAPI, profileAPI } from "../../api/api"

const ADD_POST = 'add-post'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  postsData: [
    {
      id: 1, message: 'Hey boy\'s, hwr You?', time: '15:45', likeQuant: 15
    },
    { id: 2, message: 'Feel so sad, write my anybodyv', time: '16:45', likeQuant: 25 },
    { id: 3, message: 'I\'m 32 today...weeee', time: '17:45', likeQuant: 30 },
    { id: 4, message: 'Is anybody now something about new Iphone', time: '18:45', likeQuant: 48 }
  ],
  profile: null,
  status: '',
};


const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newText,
        time: '00:00',
        likeQuant: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (text: string) => {
  return {
    type: ADD_POST,
    newText: text,
  }
};

export const setUserProfile = (profile: any) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  }
};

export const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    status: status,
  }
};

export const getUserProfile = (userId: number) => {
  return (dispatch: any) => {
    usersAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
};

export const getStatus = (userId: number) => {
  return (dispatch: any) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data.data));
    });
  }
};

export const updateStatus = (status: string) => {
  return (dispatch: any) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
};

export default profileReducer;