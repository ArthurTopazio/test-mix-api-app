import { connect } from 'react-redux'
import { setDogs, getDogs } from '../../redux/dogs-reducer'

import HeaderWall from '../../Header/HeaderWall/HeaderWall'
import Skeleton from '@mui/material/Skeleton'
import AddDogButton from './AddDogButton/AddDogButton'
import style from './DogsList.module.scss'

const DogsList = (props: any) => {
  function imgLoaded(img: any) {
    //var $img = $(img);
    console.log(img)
    //$img.parent().addClass('loaded');
  };

  let elements = props.dogs.dogs_pictures.map((item: any) => <div key={item} className={style.dogs__card}>
    <img src={item} alt="dogs_picture" loading="eager" />
  </div>)

  let skeletonElements: any = []

  for (let i = props.dogs.fetchQuant; i > 0; i--) {
    skeletonElements.push(<div key={i} className={style.dogs__card}>
      <Skeleton
        sx={{
          width: '100%', height: '100%'
        }}
        variant="rectangular"
        animation="wave"
      />
    </div>)
  }

  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={props.dogs.main_wallpaper} />
      <div className={style.content}>
        <h2>dogs list</h2>
        <div className={style.dogs__cards}>
          <AddDogButton getDogs={props.getDogs} isFetching={props.dogs.isFetching} />
          {elements}
          {props.dogs.isFetching ? skeletonElements : null}
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