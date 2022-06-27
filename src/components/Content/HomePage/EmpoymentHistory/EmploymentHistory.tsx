import SkillsInfoCard from "./../SkillsInfo/SkillsInfoCard/SkillsInfoCard"
import style from './EmploymentHistory.module.scss'

function EmploymentHistory(props: any) {
  let elements = props.employment_history.cards.map((item: any) => <SkillsInfoCard key={item.id}
    card_name={item.card_name} card_logo={item.card_logo} items={item.items} />)
  return (
    <div className={style.wrapper}>
      <h2 className={style.topic}>{props.employment_history.name}</h2>
      <div className={style.cards__box}>
        {elements}
      </div>
    </div>
  )
}

export default EmploymentHistory