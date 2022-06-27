import style from './SkillsInfoCard.module.scss'

const SkillsInfoCard = (props: any) => {
  let icon = 'https://ouch-cdn2.icons8.com/IdJhMQyhpbcOQz4fdrESfhaJHmNfUC4hn5yLcXi8IZQ/rs:fit:555:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDc2/LzI5ZmYwZGNiLWEy/NmYtNGNhNy1hNjAw/LTYyNTI5ZGYxNzlh/Mi5zdmc.png'
  let elements = props.items.map((item: any) => <p className={style.skill__item}>
    <img className={style.icon} src={icon} /> {item}</p>)

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