import SkillsInfoCard from "../SkillsInfo/SkillsInfoCard/SkillsInfoCard"
import style from './OtherInformation.module.scss'

function OtherInformation(props: any) {
  let elements = props.other_information.cards.map((item: any) => <SkillsInfoCard key={item.id}
    card_name={item.card_name} card_logo={item.card_logo} items={item.items} />)
  return (
    <div className={style.wrapper}>
      <div className={style.cards__box}>
        {elements}
      </div>
    </div>
  )
}

export default OtherInformation