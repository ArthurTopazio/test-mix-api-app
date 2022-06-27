import style from './SkillsInfoCard.module.scss'

const SkillsInfoCard = (props: any) => {
  console.log('SkillsCard props', props)
  let elements = props.items.map((item: any) => <p className={style.skill__item}>{item}</p>)

  return (
    <div className={style.card}>
      <div className={style.h1}>
        <img className={style.logo} src={props.card_logo} alt="skill logo" />
        <p>{props.card_name}</p>
      </div>
      <div className={style.skill__items}>
        {elements}
      </div>
    </div>
  )
}

export default SkillsInfoCard