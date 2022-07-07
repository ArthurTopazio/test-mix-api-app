import { useState } from 'react'

import style from './AddDogButton.module.scss'
import preloader from './../../../../assets/images/preloader/preloader.gif'

const AddDogButton = (props: any) => {
  let addDog = (quantity: number) => {
    props.getDogs(quantity)
  }

  let testClick = () => {
    addDog(quant)
  }

  const [quant, setQuant] = useState(1);

  const handleChange = (event: any) => {
    setQuant(event.target.value);
  };

  return (
    <div className={style.dogs__card}>
      {props.isFetching ? <img src={preloader} alt='isFetching' className={style.preloader} />
        : <button className={style.add__dog} onClick={testClick}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOu5tV-7Ow1_6OsWVlTyeK6nVgkfq9BCxdYA&usqp=CAU"
            alt="add pict" />
        </button>}
      <p>add random dogs pictures</p>
      <input type="number" min='1' max='10' onChange={handleChange}
        value={quant} />
    </div>
  )
}

export default AddDogButton

//<input type="number" min='1' max='10' onChange={e => onCh(e.target.value)} />