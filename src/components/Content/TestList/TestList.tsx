import style from './TestList.module.scss'

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