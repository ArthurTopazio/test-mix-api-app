import style from './TestList.module.scss'
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const TestList = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={style.content__wrapper}>
      <div className={style.content}>
        <div className={style.text}>Test area</div>
        <Button onClick={handleToggle}>Show backdrop</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}

        >
          <div onClick={handleClose}>Hello</div>
        </Backdrop>

      </div>
    </div >
  )
}

export default TestList

