import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard"
import style from './SkillsInfo.module.scss'

function SkillsInfo(props: any) {
  console.log('skills info props:', props)
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

export default SkillsInfo