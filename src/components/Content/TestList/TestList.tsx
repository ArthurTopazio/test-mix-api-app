import style from './TestList.module.scss'
import Button from '@mui/material/Button';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

const TestList = (props: any) => {
  const [area, setArea] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(event.target.value);
  };

  return (
    <div className={style.content__wrapper}>

      <div className={style.content}>
        <div className={style.text}>Test area</div>
        <div>
          <TextField id="outlined-basic" label="Outlined" onChange={handleChange} variant="outlined" />
          <Divider light />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <Divider />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        <p>{area}<AccessibilityNewOutlinedIcon /></p>
      </div>

    </div >
  )
}

export default TestList

