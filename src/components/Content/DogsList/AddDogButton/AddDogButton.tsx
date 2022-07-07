import style from './AddDogButton.module.scss'

const AddDogButton = (props: any) => {
  let addDog = (quantity: number) => {
    props.getDogs(quantity)
  }

  let ajaxQ = 1

  let onCh = (vl: any) => {
    ajaxQ = vl
  }

  let testClick = () => {
    addDog(ajaxQ)
  }

  return (
    <div className={style.dogs__card}>
      <button className={style.add__dog} onClick={testClick}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOu5tV-7Ow1_6OsWVlTyeK6nVgkfq9BCxdYA&usqp=CAU" alt="add pict" />
      </button>
      <p>add random dog picture</p>
      <input type="number" min='1' max='10' onChange={e => onCh(e.target.value)} />
    </div>
  )
}

export default AddDogButton