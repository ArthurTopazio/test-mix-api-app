import style from './HomePage.module.scss'
import headerImg from '../../../assets/images/header-photos/tech1.webp'
import HeaderWall from '../../HeaderWall/HeaderWall';

const HomePage = () => {
  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={headerImg} />
      <div className={style.banner}>
        <div>some textsome textf</div>
        <button>some button</button>
      </div>
      <div className={style.content}>
        <div>My Resume</div>
        <div>push test2</div>
        <div>text color test</div>
        <div>text end test</div>
      </div>
    </div>
  )
}

export default HomePage;