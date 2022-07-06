import { connect } from 'react-redux'
import { setDogs, getDogs } from '../../redux/dogs-reducer'

import HeaderWall from '../../Header/HeaderWall/HeaderWall'
import AddDogButton from './AddDogButton/AddDogButton'
import style from './DogsList.module.scss'

const DogsList = (props: any) => {

  let elements = props.dogs.dogs_pictures.map((item: any) => <div className={style.dogs__card}>
    <img src={item} alt="dogs_picture" />
  </div>)

  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={props.dogs.main_wallpaper} />
      <div className={style.content}>
        <h2>dogs list</h2>
        <div className={style.dogs__cards}>
          <AddDogButton getDogs={props.getDogs} />
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