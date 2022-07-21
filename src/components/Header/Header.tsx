import { NavLink } from 'react-router-dom'
import * as React from 'react'
import { useState } from 'react';

import style from './Header.module.scss'
import burger from './../../assets/images/burger-menu-pack/burger.png'
import x from './../../assets/images/burger-menu-pack/x.png'
import HomeIcon from '@mui/icons-material/Home'
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import PetsIcon from '@mui/icons-material/Pets'
import ListAltIcon from '@mui/icons-material/ListAlt'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Header = () => {
  console.warn('need to refactoring header navigation/burger menu also')
  const [burg, setBurg] = useState(false);

  const actionBurg = () => {
    burg ? setBurg(false) : setBurg(true)
  }

  return <div className={style.header}>
    <div className={style.wrapper}>
      <div className={style.logo}>
        <NavLink to={''}
        ><img src="https://images.vexels.com/media/users/3/136252/isolated/preview/9ba1b6a847b1d5c7f006d872b0916101-internet-connection-devices.png" alt="" />
        </NavLink>
      </div>
      <ul className={style.nav}>
        <NavLink to={'/news'}
        ><NewspaperIcon fontSize='small' /> News <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink to={'/form'}
        ><ListAltIcon fontSize='small' /> Form <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink to={'/dogs'}
        ><PetsIcon fontSize='small' />Dogs <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink to={'/social_network'}
        ><ConnectWithoutContactIcon fontSize='small' />Social Network <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink to={'/jokes'}
        ><SentimentVerySatisfiedIcon fontSize='small' />Jokes <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink to={'/test'}
        ><AppSettingsAltIcon fontSize='small' /> Test <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink to={''}
        ><HomeIcon fontSize='small' />Home <ExpandMoreIcon fontSize='small' /></NavLink>
      </ul>
      <div className={`${style.burger__menu_items} ${burg ? style.burger__menu_acive : null}`}>

        <NavLink onClick={actionBurg} to={'/news'}
        ><NewspaperIcon fontSize='small' /> News <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink onClick={actionBurg} to={'/social_network'}
        ><ConnectWithoutContactIcon fontSize='small' />Social Network <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink onClick={actionBurg} to={'/form'}
        ><ListAltIcon fontSize='small' /> Form <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink onClick={actionBurg} to={'/dogs'}
        ><PetsIcon fontSize='small' />Dogs <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink onClick={actionBurg} to={'/jokes'}
        ><SentimentVerySatisfiedIcon fontSize='small' />Jokes <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink to={'/test'}
        ><AppSettingsAltIcon fontSize='small' /> Test <ExpandMoreIcon fontSize='small' /></NavLink>
        <NavLink onClick={actionBurg} to={''}
        ><HomeIcon fontSize='small' />Home <ExpandMoreIcon fontSize='small' /></NavLink>
      </div>
      <div className={style.burger__menu} onClick={actionBurg}>
        {!burg ? <img className={style.burger__menu_bg} src={burger} alt='Burger menu' />
          : <img className={style.burger__menu_x} src={x} alt='close menu' />}
      </div>
    </div>
  </div>
}

export default Header;
