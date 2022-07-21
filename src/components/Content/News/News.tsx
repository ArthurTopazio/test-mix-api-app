import { connect } from 'react-redux'

import style from './News.module.scss'
import HeaderWall from '../../Header/HeaderWall/HeaderWall'

const News = (props: any) => {

  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={props.news.main_wallpaper} />
      <div className={style.content}>
        <div>NEWS</div>
        <div>text color test</div>
        <div>text color test</div>
      </div>
    </div>
  )
}

let mapStateToProps = (state: any) => ({
  news: state.news
})

export default connect(mapStateToProps)(News)