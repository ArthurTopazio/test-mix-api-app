let initialState = {
  it_skills: {
    name: 'SKILLS',
    cards: [
      {
        id: 1,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation']
      },
      {
        id: 2,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'bla']
      },
      {
        id: 3,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation', 'manual style settings']
      },
      {
        id: 4,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation']
      },
      {
        id: 5,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation']
      },
    ]
  },
  employment_history: {
    name: 'EMPLOYMENT HISTORY',
    cards: [
      {
        id: 1,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation']
      },
      {
        id: 2,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation']
      },
    ]
  },
  other_information: {
    name: 'OTHER INFORMATION',
    cards: [
      {
        id: 1,
        card_name: 'HTML/CSS',
        card_logo: 'https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation']
      },
    ]
  },
}

const homeReducer = (state = initialState, action: any) => {

  return state;
}

export default homeReducer;