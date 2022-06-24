import style from './HomePage.module.scss'
import headerImg from '../../../assets/images/header-photos/tech1.webp'
import HeaderWall from '../../HeaderWall/HeaderWall'
import HeaderBanner from '../../HeaderBanner/HeaderBanner'

const HomePage = () => {
  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={headerImg} />
      <HeaderBanner />
      <div className={style.content}>
        <div>My Resume</div>
        <div>push test2</div>
        <div>text color test</div>
        <div>text end test</div>
        <div>text end test</div>
        <div>lorem*2000</div>
      </div>
    </div>
  )
}

export default HomePage;