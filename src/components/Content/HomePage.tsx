import style from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={style.content__wrapper}>
      <img className={style.header__img}
        src="https://i.stack.imgur.com/SvWWN.png" alt="picture" />
      <div className={style.banner}>
        <div>some textsome textf</div>
        <button>some button</button>
      </div>
      <div className={style.content}>
        <div>My Resume</div>
        <div>push test11</div>
        <div>text color test</div>
        <div>text end test</div>
      </div>
    </div>
  )
}

export default HomePage;