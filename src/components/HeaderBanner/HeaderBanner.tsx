import * as React from 'react'
import Button from '@mui/material/Button'

import style from './HeaderBanner.module.scss'

const HeaderBanner = () => {
  return (
    <div className={style.banner}>
      <h1 className={style.headline__text}>App created by Arthur Mishiev</h1>
      <div>
        <p className={style.main__text}>
          Thanks for visit my application, I realy hope You enjoy it.
          If You interest in cooperation, send me message
        </p>
      </div>
      <Button href='perereacmb@gmail.com' sx={{ mt: 3 }}
        variant="contained" size='large'>Send message</Button>
    </div>
  )
}

export default HeaderBanner

