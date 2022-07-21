let initialState = {
  main_wallpaper: 'https://cutewallpaper.org/22/wires-wallpapers/2831313428.jpg',
  it_skills: {
    name: 'SKILLS',
    cards: [
      {
        id: 1,
        card_name: 'HTML/CSS',
        card_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png',
        items: ['adaptive layout', 'manual style settings', 'CSS basic animation']
      },
      {
        id: 2,
        card_name: 'Sass/SCSS',
        card_logo: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png',
        items: ['adherence to architecture principles', 'mixins/variables']
      },
      {
        id: 3,
        card_name: 'JavaScript',
        card_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
        items: ['ES6+', 'assynch programming', 'arrow functions',]
      },
      {
        id: 4,
        card_name: 'Git',
        card_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png',
        items: ['branch management', 'GitHub', 'GitLub']
      },
      {
        id: 5,
        card_name: 'TypeScript',
        card_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png',
        items: ['generic', 'interface', 'enum', 'types']
      },
      {
        id: 6,
        card_name: 'React JS/TS',
        card_logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        items: ['SPA-princeples', 'JSX/TSX func & class component', 'hooks', 'library/react-router-dom/redux/react-redux/axios/redux-thunk/formik+yup/reselect', 'UI library/MUI/Ant']
      }
    ]
  },
  employment_history: {
    name: 'EMPLOYMENT HISTORY',
    cards: [
      {
        id: 1,
        card_name: 'Sportteam Supervisor',
        card_logo: 'https://toppng.com/uploads/preview/olympic-rings-11548793934lheom8bgpy.png',
        items: ['July 2007', `Palace of Sports/'Sportstyle'`, 'Kharkiv']
      },
      {
        id: 2,
        card_name: 'Payroll project manager',
        card_logo: 'https://w7.pngwing.com/pngs/493/941/png-transparent-bnp-paribas-fortis-bank-financial-services-bnp-paribas-asset-management-bank-company-text-service.png',
        items: ['July 2012 – March 2015', 'BNP Paribas - Ukrsibbank', 'Kharkiv']
      },
      {
        id: 3,
        card_name: 'International Sales Manager',
        card_logo: 'https://www.in-formality.com/wiki/images/e/e7/Ias.png',
        items: ['July 2011 – May 2012', 'IAS(Inter-avia service)', 'Kharkiv']
      },
      {
        id: 4,
        card_name: 'Marketing and International Sales Manager',
        card_logo: 'https://toppng.com/uploads/preview/pegasus-airlines-eps-vector-logo-free-download-11574055006d3mbkdgg7j.png',
        items: ['September 2010 – July 2011', 'Pegasus Airlines Turkey/CMPT Ukraine', 'Kharkiv-Istanbul']
      }
    ]
  },
  other_information: {
    name: 'OTHER INFORMATION',
    cards: [
      {
        id: 1,
        card_name: 'Architecture principles',
        card_logo: 'https://banner2.cleanpng.com/20180606/cgr/kisspng-gear-clip-art-option-5b178fced1e987.4500329215282707988598.jpg',
        items: ['OOP', 'functional programming', 'SOLID', 'FLUX',]
      },
      {
        id: 2,
        card_name: 'Languages',
        card_logo: 'https://toppng.com/uploads/preview/language-icon-language-icon-11553496424d3qvaoxcq1.png',
        items: ['English', 'Portugues', 'Ukrainian', 'Russian']
      },
    ]
  },
}

const homeReducer = (state = initialState, action: any) => {

  return state;
}

export default homeReducer;