import LoadableImage from '../../LoadLabelImage/LoadableImage';
import style from './HeaderWall.module.scss'

const HeaderWall = (props: any) => {
  return (
    <div className={style.header__img}>
      <LoadableImage src={props.headerImg} />
    </div>
  )
}

export default HeaderWall;


//<img className={style.header__img}
 //     src={props.headerImg} alt="picture" />