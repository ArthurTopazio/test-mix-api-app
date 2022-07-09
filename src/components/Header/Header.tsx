import { NavLink } from 'react-router-dom'
import * as React from 'react'
import { useState } from 'react';

import style from './Header.module.scss'
import burger from './../../assets/images/burger-menu-pack/burger.png'
import x from './../../assets/images/burger-menu-pack/x.png'

//main header component

const Header = () => {

  const [burg, setBurg] = useState(false);

  const actionBurg = () => {
    burg ? setBurg(false) : setBurg(true)
  }

  return <div className={style.header}>
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img src="https://images.vexels.com/media/users/3/136252/isolated/preview/9ba1b6a847b1d5c7f006d872b0916101-internet-connection-devices.png" alt="" />
      </div>
      <ul className={style.nav}>
        <NavLink to={'/news'}
        >News</NavLink>
        <NavLink to={'/form'}
        >Form</NavLink>
        <NavLink to={'/dogs'}
        >Dogs</NavLink>
        <NavLink to={'/social_network'}
        >Social Network</NavLink>
        <NavLink to={'/jokes'}
        >Jokes</NavLink>
        <NavLink to={''}
        >Home</NavLink>
      </ul>
      {burg ? <div className={style.burger__menu_items}>

        <NavLink onClick={actionBurg} to={'/news'}
        >News</NavLink>
        <NavLink onClick={actionBurg} to={'/social_network'}
        >Social Network</NavLink>
        <NavLink onClick={actionBurg} to={'/form'}
        >Form</NavLink>
        <NavLink onClick={actionBurg} to={'/dogs'}
        >Dogs</NavLink>
        <NavLink onClick={actionBurg} to={'/jokes'}
        >Jokes</NavLink>
        <NavLink onClick={actionBurg} to={''}
        >Home</NavLink>
      </div> : null}
      <div className={style.burger__menu} onClick={actionBurg}>
        {!burg ? <img className={style.burger__menu_bg} src={burger} alt='Burger menu' />
          : <img className={style.burger__menu_x} src={x} alt='close menu' />}
      </div>
    </div>
  </div>
}

export default Header;
