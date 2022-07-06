import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { connect } from 'react-redux'

import style from './HomePage.module.scss'
import HeaderWall from '../../Header/HeaderWall/HeaderWall'
import SkillsInfo from './SkillsInfo/SkillsInfo'
import EmploymentHistory from './EmpoymentHistory/EmploymentHistory'
import OtherInformation from './Other-information/OtherInformation'

//HeaderImage add to props
const HomePage = (props: any) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={style.content__wrapper}>
      <HeaderWall headerImg={props.resume.main_wallpaper} />
      <div className={style.content}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab sx={{ width: '30%' }} label="My skills" />
            <Tab sx={{ width: '30%' }} label="Employment history" />
            <Tab sx={{ width: '30%' }} label="Other information" />
          </Tabs>
        </Box>
        {value == 0 ? <SkillsInfo skills={props.resume.it_skills} />
          : value == 1 ? <EmploymentHistory employment_history={props.resume.employment_history} />
            : <OtherInformation other_information={props.resume.other_information} />}
      </div>
    </div>
  )
}

let mapStateToProps = (state: any) => {
  return {
    resume: state.home,
  }
}

export default connect(mapStateToProps)(HomePage)