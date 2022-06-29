import style from './DogsList.module.scss'
import { connect } from 'react-redux'

const DogsList = (props: any) => {
  console.log('DogsList props:', props)
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        dogs list
        <img src={props.dogs.dogs_pictures[0]} alt="" />
      </div>
    </div>
  )
}


let mapStateToProps = (state: any) => {
  return {
    dogs: state.dogs,
  }
}

export default connect(mapStateToProps)(DogsList)