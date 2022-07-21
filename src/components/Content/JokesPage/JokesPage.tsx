import style from './JokesPage.module.scss'
import { connect } from 'react-redux'
import { getJokes } from '../../redux/jokes-reducer'

const JokesPage = (props: any) => {
  console.warn('Jokes page updates')
  let addJoke = () => {
    props.getJokes()
  }

  /*
  let paramTest = (category: string = 'Any', lang?: string, blacklistFlags?: string,
    type = 'single', contains?: string, amount?: number) => {
    console.log(`${category}?${lang ? `lang=${lang}` : ''}${blacklistFlags ? `&blacklistFlags=${blacklistFlags}` : ''}${type ? `&type=${type}` : ''}${contains ? `&contains=${contains}` : ''}${amount ? `&amount=${amount}` : ''}`)
  }*/

  let testClick = () => {
    // paramTest('Any', undefined, undefined, 'WithPunch', undefined, 5)
    addJoke()
  }

  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <h2>jokes list</h2>
        <div className={style.dogs__cards}>
          <div className={style.dogs__card}><button className={style.add__dog}
            onClick={testClick}>add joke</button>
            <div>{props.jokes.jokes[props.jokes.jokes.length - 1]}</div>
          </div>
        </div>

      </div>
    </div>
  )
}


let mapStateToProps = (state: any) => {
  return {
    jokes: state.jokes,
  }
}

export default connect(mapStateToProps, { getJokes })(JokesPage)