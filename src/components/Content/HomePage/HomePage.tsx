import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import style from './HomePage.module.scss'
import headerImg from '../../../assets/images/header-photos/tech1.webp'
import HeaderWall from '../../HeaderWall/HeaderWall'

//HeaderImage add to props
const HomePage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={headerImg} />
      <div className={style.content}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <div>{value}</div>
      </div>
    </div>
  )
}

export default HomePage;