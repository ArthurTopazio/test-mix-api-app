import style from './AddDogButton.module.scss'

const AddDogButton = (props: any) => {
  let addDog = (quantity: number) => {
    props.getDogs(quantity)
  }

  let testClick = () => {
    addDog(1)
  }

  return (
    <div className={style.dogs__card}>
      <button className={style.add__dog} onClick={testClick}>add dog</button>
    </div>
  )
}

export default AddDogButton