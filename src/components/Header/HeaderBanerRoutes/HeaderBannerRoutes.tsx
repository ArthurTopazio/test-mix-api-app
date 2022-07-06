import { Routes, Route } from 'react-router-dom'
import { connect } from "react-redux"

import HeaderBanner from '../HeaderBanner/HeaderBanner'

function HeaderBannerRoutes(props: any) {
  return (
    <Routes>
      <Route path=""
        element={<HeaderBanner data={props.home_banner} />} />
      <Route path="/dogs"
        element={<HeaderBanner data={props.dogs_banner} />} />
      <Route path="/news"
        element={<HeaderBanner data={props.news_banner} />} />
    </Routes>
  );
}

let mapStateToProps = (state: any) => {
  return {
    home_banner: state.banner[0],
    news_banner: state.banner[1],
    dogs_banner: state.banner[2],
  }
}

export default connect(mapStateToProps)(HeaderBannerRoutes)