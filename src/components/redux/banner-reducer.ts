let initialState = [
  {
    id: 1,
    name: 'Home Page',
    h1: 'App created by Arthur Mishiev',
    text: `Thanks for visit my application, I realy hope You enjoy it.
    If You interest in cooperation, send me message`,
    button_name: 'send message',
    button_link: '/form',
  },
  {
    id: 2,
    name: 'News',
    h1: 'News from around the world',
    text: `G-7 Leaders at Summit Weakened by Inflation, Impatience at Home`,
    button_name: 'read more',
    button_link: '/form',
  },
  {
    id: 3,
    name: 'Dogs',
    h1: 'Dogs are the bests friends',
    text: `If You wanna help to our valanters, please go for donate`,
    button_name: 'DONATE',
    button_link: '/form',
  },
]

const bannerReducer = (state = initialState, action: any) => {

  return state;
}

export default bannerReducer;