import * as React from 'react'
import { connect } from 'react-redux'
import { getDogsBreedsList, getBreedPicture } from '../../redux/dogs-reducer'

import style from './DogsAllBreeds.module.scss'
import PetsIcon from '@mui/icons-material/Pets'
import LinearProgress from '@mui/material/LinearProgress'
import LoadableImage from '../../LoadLabelImage/LoadableImage'

const DogsAllBreeds = (props: any) => {

  let breedPict = props.breedPict

  let breeds = props.dogs

  console.log(props)

  let handlclick = (name: any) => { props.getBreedPicture(name) }

  let imgDg = "https://icons-for-free.com/download-icon-gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924_512.png"

  React.useEffect(() => {
    props.getDogsBreedsList()
  }, [])

  function DogsBreedsList(breeds: any) {
    let keys = Object.keys(breeds)
    let elements = keys.map(item => {
      return (
        <div className={style.list__item}>
          <div onClick={() => handlclick(item)} className={style.breed__main}>{item} <PetsIcon fontSize='small' color='primary' /></div>
          <div className={style.breed__sub}>{breeds[item].map((it: any) =>
            <div onClick={() => handlclick(it)} className={style.breed__sub_item}>{it} <PetsIcon fontSize='small' color='secondary' /></div>)}
          </div>
        </div>)
    })

    return (
      <div className={style.list}>
        <div className={style.list__i}>{elements}</div>
        <div className={style.image}>
          {breedPict ? <LoadableImage src={breedPict} /> : <img src={imgDg} alt="Dogy" />}
        </div>
      </div>)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h2>BREEDS:<PetsIcon fontSize='large' color='primary' /></h2>
        <h2>SUB-BREED: <PetsIcon fontSize='large' color='secondary' /></h2>
      </div>
      {breeds ? DogsBreedsList(breeds) : <LinearProgress />}
    </div>
  )
}

let mapStateToProps = (state: any) => {
  return {
    dogs: state.dogs.allBreedsList,
    breedPict: state.dogs.breedPicture,
  }
}

export default connect(mapStateToProps, { getDogsBreedsList, getBreedPicture })(DogsAllBreeds)
