import style from './TestList.module.scss'
import * as React from 'react';

const TestList = (props: any) => {


  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div className={style.text}>Test area</div>

      </div>
    </div>
  )
}

export default TestList
