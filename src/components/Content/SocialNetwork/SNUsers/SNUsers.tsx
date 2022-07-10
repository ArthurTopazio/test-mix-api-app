import { connect } from "react-redux"
import {
  follow, setCurrentPage, unfollow,
  toggleFollowingProgress, getUsers
} from "../../../redux/users-reducer"

import style from './SNUsers.module.scss'

const SNUsers = (props: any) => {
  console.log('Users props', props)
  return (
    <div className={style.wrapper}>
      <h4>Users</h4>
      <p>page {props.currentPage}, page size {props.pageSize}</p>
    </div>
  )
}

let mapStateToProps = (state: any) => {

  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress,
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(SNUsers)


/*
this.props.getUsers(this.props.currentPage, this.props.pageSize);

onPageChanged = (pageNumber) => {
  this.props.setCurrentPage(pageNumber);
  this.props.getUsers(pageNumber, this.props.pageSize);
  
}
*/
