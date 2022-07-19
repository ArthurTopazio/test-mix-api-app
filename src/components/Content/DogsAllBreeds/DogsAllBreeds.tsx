import * as React from 'react'
import { connect } from 'react-redux'
import { getDogsBreedsList } from '../../redux/dogs-reducer'

import style from './DogsAllBreeds.module.scss'
import PetsIcon from '@mui/icons-material/Pets'
import LinearProgress from '@mui/material/LinearProgress'
import { dividerClasses } from '@mui/material'

const DogsAllBreeds = (props: any) => {

  let breeds = props.dogs

  React.useEffect(() => {
    props.getDogsBreedsList()
  }, [])

  function DogsBreedsList(breeds: any) {
    let keys = Object.keys(breeds)
    let elements = keys.map(item => {
      return (
        <div className={style.list__item}>
          <div className={style.breed__main}>{item}</div>
          <div className={style.breed__sub}>{breeds[item].map((it: any) =>
            <div className={style.breed__sub_item}>{it}</div>)}
          </div>
        </div>)
    })

    return (<div className={style.list}>{elements}</div>)
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
  }
}

export default connect(mapStateToProps, { getDogsBreedsList })(DogsAllBreeds)
