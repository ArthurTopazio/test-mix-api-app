import style from './TestList.module.scss'
import * as React from 'react';
import Button from '@mui/material/Button';

const TestList = (props: any) => {
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div className={style.text}>Test area</div>
        <Button variant="contained" onClick={() => { alert('hi') }}>Hello World</Button>
      </div>
    </div>
  )
}

export default TestList