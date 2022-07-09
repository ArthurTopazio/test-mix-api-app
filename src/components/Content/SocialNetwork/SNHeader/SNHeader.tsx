import { connect } from 'react-redux'
import { getAuth, logout } from './../../../redux/auth-reducer'
import { NavLink } from 'react-router-dom'

import style from './SNHeader.module.scss'

const SNHeader = (props: any) => {
  props.getAuth()
  return (

    <div className={style.header}>
      <h2> Welcome to Social Network page</h2>
      <p>use Email: free@samuraijs.com Password: free for testing</p>
      {props.isAuth ? <div>{props.login}<button onClick={props.logout}>Logout</button></div>
        : <NavLink to={'/social_network/login'}> Login </NavLink>}
    </div>

  )
}

let mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuth, logout })(SNHeader)