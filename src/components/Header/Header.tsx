import { NavLink } from 'react-router-dom'

import style from './Header.module.scss'

const Header = () => {
  return <div className={style.header}>
    <div className={style.wrapper}>
      <div className={style.logo}>
        Logo
      </div>
      <ul className={style.nav}>
        <NavLink to={'/news'}
        >News</NavLink>
        <NavLink to={'/form'}
        >Form</NavLink>
        <li>Dogs</li>
        <NavLink to={''}
        >Home</NavLink>
      </ul>
      <div className={style.burger__menu}>
        Burger menu
      </div>
    </div>
  </div>
}

export default Header;