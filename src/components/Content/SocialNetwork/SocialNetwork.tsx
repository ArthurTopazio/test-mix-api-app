import { connect } from 'react-redux'

import style from './SocialNetwork.module.scss'
import SNHeader from './SNHeader/SNHeader'
import { Routes, Route } from 'react-router-dom'
import SNLogin from './SNLogin/SNLogin'
import SNProfile from './SNProfile/SNProfile'
import Divider from '@mui/material/Divider'

const SocialNetwork = (props: any) => {
  console.log(props)
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <SNHeader />
        <Divider />
        <Routes>
          <Route path="/login"
            element={<SNLogin />} />
          <Route path="/profile"
            element={<SNProfile />} />
        </Routes>
      </div>
    </div>
  )
}

let mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps)(SocialNetwork)