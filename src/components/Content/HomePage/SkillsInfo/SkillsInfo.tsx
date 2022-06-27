import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard"
import style from './SkillsInfo.module.scss'

function SkillsInfo(props: any) {
  let elements = props.skills.cards.map((item: any) => <SkillsInfoCard key={item.id}
    card_name={item.card_name} card_logo={item.card_logo} items={item.items} />)

  return (
    <div className={style.wrapper}>
      <h2 className={style.topic}>{props.skills.name}</h2>
      <div className={style.cards__box}>
        {elements}
      </div>
    </div>
  )
}

export default SkillsInfo