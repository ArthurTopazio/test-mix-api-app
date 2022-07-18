import { connect } from 'react-redux'
import { setDogs, getDogs } from '../../redux/dogs-reducer'
import * as React from 'react'

import HeaderWall from '../../Header/HeaderWall/HeaderWall'
import Skeleton from '@mui/material/Skeleton'
import AddDogButton from './AddDogButton/AddDogButton'
import style from './DogsList.module.scss'
import LoadableImage from '../../LoadLabelImage/LoadableImage'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const DogsList = (props: any) => {

  const [value, setValue] = React.useState(1)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
  }

  let elements = props.dogs.dogs_pictures.map((item: any) => <div key={item} className={style.dogs__card}>
    <LoadableImage src={item} />
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
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab sx={{ width: '25%' }} label="List all breeds" />
            <Tab sx={{ width: '25%' }} label="Random image" />
            <Tab sx={{ width: '25%' }} label="By breed" />
            <Tab sx={{ width: '25%' }} label="By sub-breed" />
          </Tabs>
        </Box>
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