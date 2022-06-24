import * as React from 'react'
import Button from '@mui/material/Button'

import style from './HeaderBanner.module.scss'

let mainText = `Thanks for visit my application, I realy hope You enjoy it.
<br />If You interest in cooperation, send me message`

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
      <Button href='perereacmb@gmail.com' aria-label="fingerprint"
        variant="contained" size='large'>Send message</Button>
    </div>
  )
}

export default HeaderBanner