import style from './DogsList.module.scss'
import { connect } from 'react-redux'
import { setDogs, getDogs } from '../../redux/dogs-reducer'

const DogsList = (props: any) => {
  console.log('DogsList props:', props)
  let addDog = (quantity: number) => {
    props.getDogs(quantity)
  }

  let testClick = () => {
    alert('say hello')
    addDog(1)
  }

  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        dogs list
        <img src={props.dogs.dogs_pictures[0]} alt="" />
        <button onClick={testClick}>add dog</button>
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