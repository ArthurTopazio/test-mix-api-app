import { dividerClasses } from '@mui/material'
import { connect } from 'react-redux'
import { getAuth, logout } from './../../redux/auth-reducer'

import style from './SocialNetwork.module.scss'

const SocialNetwork = (props: any) => {
  console.log(props)
  props.getAuth()
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div className={style.text}>Social Network page</div>
        {props.isAuth ? <div>{props.login}</div> : null}
      </div>
    </div>
  )
}

let mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuth, logout })(SocialNetwork)