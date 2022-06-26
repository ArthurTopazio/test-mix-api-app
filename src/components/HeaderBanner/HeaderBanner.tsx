import * as React from 'react'
import Button from '@mui/material/Button'


import style from './HeaderBanner.module.scss'

// props: h1 text, p text, button name, button href
const HeaderBanner = (props: any) => {
  console.log('header_bunner props', props)
  return (
    <div className={style.banner}>
      <h1 className={style.headline__text}>{props.data.h1}</h1>
      <div>
        <p className={style.main__text}>
          {props.data.text}
        </p>
      </div>
      <Button href={props.data.button_link} sx={{ mt: 3 }}
        variant="contained" size='large'>{props.data.button_name}</Button>
    </div>
  )
}

export default HeaderBanner

