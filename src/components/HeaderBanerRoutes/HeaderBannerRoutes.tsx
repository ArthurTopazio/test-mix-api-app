import { Routes, Route } from 'react-router-dom'

import HeaderBanner from '../HeaderBanner/HeaderBanner'

function HeaderBannerRoutes(props: any) {
  return (
    <Routes>
      <Route path=""
        element={<HeaderBanner />} />
      <Route path="/news"
        element={<HeaderBanner />} />
    </Routes>
  );
}

export default HeaderBannerRoutes