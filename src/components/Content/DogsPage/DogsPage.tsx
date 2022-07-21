import * as React from 'react'
import { connect } from 'react-redux'

import HeaderWall from '../../Header/HeaderWall/HeaderWall'
import style from './DogsPage.module.scss'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import DogsList from '../DogsList/DogsList'
import DogsAllBreeds from '../DogsAllBreeds/DogsAllBreeds'

const DogsPage = (props: any) => {
  const [value, setValue] = React.useState(1)
  console.warn('Need to update for all breeds layout & sub-breed get resp')

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
        {value == 0 ? <DogsAllBreeds />
          : value == 1 ? <DogsList />
            : value == 2 ? <DogsList />
              : <DogsList />}
      </div>
    </div>
  )
}

let mapStateToProps = (state: any) => {
  return {
    dogs: state.dogs,
  }
}

export default connect(mapStateToProps, {})(DogsPage) 
