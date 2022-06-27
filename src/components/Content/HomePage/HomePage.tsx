import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import style from './HomePage.module.scss'
import headerImg from '../../../assets/images/header-photos/tech1.webp'
import HeaderWall from '../../HeaderWall/HeaderWall'
import SkillsInfo from './SkillsInfo/SkillsInfo'
import EmploymentHistory from './EmpoymentHistory/EmploymentHistory'
import OtherInformation from './Other-information/OtherInformation'

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
            <Tab sx={{ width: '30%' }} label="My skills" />
            <Tab sx={{ width: '30%' }} label="Employment history" />
            <Tab sx={{ width: '30%' }} label="Other information" />
          </Tabs>
        </Box>
        {value == 0 ? <SkillsInfo /> : value == 1 ? <EmploymentHistory />
          : <OtherInformation />}
      </div>
    </div>
  )
}

// mapStateToProps props for all categories

export default HomePage