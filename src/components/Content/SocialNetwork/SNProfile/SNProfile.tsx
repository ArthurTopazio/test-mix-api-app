import React from "react"
import { getUserProfile, getStatus, updateStatus } from "../../../redux/profile-reducer"
import { connect } from "react-redux"
import { withAuthRedirect } from './../HOC/withAuthRedirect'
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { compose } from "redux"

function withRouter(Component: any) {

  function ComponentWithRouterProp(props: any) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const SNProfile = (props: any) => {
  console.log(props)
  props.getStatus(24386)
  return (
    <div>Profile</div>
  )
}

let mapStateToProps = (state: any) => ({
  profile: state.profile.profile,
  status: state.profile.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.id,
})

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(SNProfile)