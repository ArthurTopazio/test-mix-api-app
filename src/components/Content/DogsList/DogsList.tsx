import style from './DogsList.module.scss'
import { connect } from 'react-redux'
import { setDogs, getDogs } from '../../redux/dogs-reducer'

import headerImg from '../../../assets/images/header-photos/winter_space.jpg'
import HeaderWall from '../../Header/HeaderWall/HeaderWall'

const DogsList = (props: any) => {
  console.log('DogsList props:', props)
  let addDog = (quantity: number) => {
    props.getDogs(quantity)
  }

  let testClick = () => {
    addDog(1)
  }
  let elements = props.dogs.dogs_pictures.map((item: any) => <div className={style.dogs__card}><img
    src={item} alt="dogs_picture" /></div>)
  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={props.dogs.main_wallpaper} />
      <div className={style.content}>
        <h2>dogs list</h2>
        <div className={style.dogs__cards}>
          <div className={style.dogs__card}><button className={style.add__dog} onClick={testClick}>add dog</button></div>
          {elements}
        </div>
      </div>
    </div>
  )
}


let mapStateToProps = (state: any) => {
  return {
    dogs: state.dogs,
  }
}

export default connect(mapStateToProps, { setDogs, getDogs })(DogsList)