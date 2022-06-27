import SkillsInfoCard from "../SkillsInfo/SkillsInfoCard/SkillsInfoCard"
import style from './OtherInformation.module.scss'

function OtherInformation(props: any) {
  console.log('other information', props)
  return (
    <div className={style.wrapper}>
      <h2 className={style.topic}>SKILLS</h2>
      <div className={style.cards__box}>
        <SkillsInfoCard />
        <SkillsInfoCard />
        <SkillsInfoCard />
      </div>
    </div>
  )
}

export default OtherInformation