import style from './SkillsInfoCard.module.scss'

const SkillsInfoCard = () => {
  return (
    <div className={style.card}>
      <div className={style.h1}>
        <img className={style.logo} src="https://www.seekpng.com/png/full/222-2229726_intro-to-html-css-html-css-icon.png" alt="skill logo" />
        <p> HTML/CSS </p>
      </div>
      <div className={style.skill__items}>
        <p className={style.skill__item}>adaptive layout</p>
        <p className={style.skill__item}>manual style settings</p>
        <p className={style.skill__item}> CSS basic animation </p>
      </div>
    </div>
  )
}

export default SkillsInfoCard