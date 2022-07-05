import style from './HeaderWall.module.scss'

const HeaderWall = (props: any) => {
  return (
    <img className={style.header__img}
      src={props.headerImg} alt="picture" />
  )
}

export default HeaderWall;