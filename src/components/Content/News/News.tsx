import style from './News.module.scss'
import headerImg from '../../../assets/images/header-photos/winter_space.jpg'

const News = () => {
  return (
    <div className={style.content__wrapper}>
      <img className={style.header__img}
        src={headerImg} alt="picture" />
      <div className={style.banner}>
        <div>some textsome textf</div>
        <button>some button</button>
      </div>
      <div className={style.content}>
        <div>NEWS</div>
        <div>text color test</div>
        <div>text color test</div>
      </div>
    </div>
  )
}

export default News;