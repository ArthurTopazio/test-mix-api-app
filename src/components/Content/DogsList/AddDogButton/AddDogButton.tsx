import { useState } from 'react'

import style from './AddDogButton.module.scss'
import CircularProgress from '@mui/material/CircularProgress'
import AddIcon from '@mui/icons-material/Add'
import Slider from '@mui/material/Slider'

const AddDogButton = (props: any) => {
  let addDog = (quantity: number) => {
    props.getDogs(quantity)
  }

  let testClick = () => {
    addDog(quant)
  }

  const [quant, setQuant] = useState(3);

  const handleChange = (event: any) => {
    setQuant(event.target.value);
  };

  return (
    <div className={style.dogs__card}>
      {props.isFetching ? <CircularProgress sx={{ mt: '15px' }} size={73} />
        : <button className={style.add__dog} onClick={testClick}><AddIcon color="primary" fontSize="large" /></button>}
      <p>Add random dogs pictures</p>
      <Slider
        aria-label="Temperature"
        defaultValue={3}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        sx={{ width: '90%', mt: '10px' }}
      />
    </div >
  )
}

export default AddDogButton

//<input type="number" min='1' max='10' onChange={e => onCh(e.target.value)} />