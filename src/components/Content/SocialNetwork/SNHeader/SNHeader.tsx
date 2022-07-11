import { connect } from 'react-redux'
import { getAuth, logout } from './../../../redux/auth-reducer'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import Avatar from '@mui/material/Avatar'

import style from './SNHeader.module.scss'

const SNHeader = (props: any) => {
  props.getAuth()
  console.log(props)
  return (
    <div className={style.header}>
      <h2> Welcome to Social Network page</h2>
      <p>use Email: free@samuraijs.com Password: free for testing</p>
      {props.isAuth ? <div><Avatar alt="name" src="/broken-image.jpg">{props.login.slice(0, 1)}</Avatar><Button size="medium" onClick={props.logout} endIcon={<ExitToAppOutlinedIcon />}>Logout</Button></div>
        : <NavLink to={'/social_network/login'}><Button size="medium" endIcon={<LoginOutlinedIcon />}>Login</Button></NavLink>}
    </div>
  )
}



let mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuth, logout })(SNHeader)