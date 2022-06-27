import SkillsInfoCard from "./../SkillsInfo/SkillsInfoCard/SkillsInfoCard"
import style from './EmploymentHistory.module.scss'

function EmploymentHistory() {
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

export default EmploymentHistory