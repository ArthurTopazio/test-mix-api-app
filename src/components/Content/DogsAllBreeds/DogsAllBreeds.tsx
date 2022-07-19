import * as React from 'react'

import { connect } from 'react-redux'
import { getDogsBreedsList } from '../../redux/dogs-reducer'

import style from './DogsAllBreeds.module.scss'

const DogsAllBreeds = (props: any) => {

  let breeds = props.dogs

  React.useEffect(() => {
    if (!breeds) {
      props.getDogsBreedsList()
    }
  }, [])

  return (
    <div>
      {JSON.stringify(breeds)}
    </div>
  )
}

let mapStateToProps = (state: any) => {
  return {
    dogs: state.dogs.allBreedsList,
  }
}

export default connect(mapStateToProps, { getDogsBreedsList })(DogsAllBreeds)
