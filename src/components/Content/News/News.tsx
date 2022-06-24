import style from './News.module.scss'
import headerImg from '../../../assets/images/header-photos/winter_space.jpg'
import HeaderWall from '../../HeaderWall/HeaderWall'

const News = () => {
  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={headerImg} />
      <div className={style.content}>
        <div>NEWS</div>
        <div>text color test</div>
        <div>text color test</div>
      </div>
    </div>
  )
}

export default News;