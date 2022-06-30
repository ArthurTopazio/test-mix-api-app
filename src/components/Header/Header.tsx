import { NavLink } from 'react-router-dom'
import * as React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Button from '@mui/material/Button'
import MenuMui from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import style from './Header.module.scss'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';


// MUI menu component(button+list)
export function BasicMenu(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.button}
      </Button>
      <MenuMui
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><NavLink to={props.navLinks.to}
        >{props.navLinks.name}</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to={props.navLinks.to}
        >{props.navLinks.name}</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to={'/form'}
        >Form</NavLink></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </MenuMui>
    </div>
  );
}

// burger menu from ant

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export const Burg: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  );
};

//main header component

const Header = () => {
  let links = { name: 'All News', to: '/news' }
  return <div className={style.header}>
    <div className={style.wrapper}>
      <div className={style.logo}>
        <img src="https://images.vexels.com/media/users/3/136252/isolated/preview/9ba1b6a847b1d5c7f006d872b0916101-internet-connection-devices.png" alt="" />
      </div>
      <ul className={style.nav}>
        <BasicMenu button={'NEWS'} navLinks={links} />
        <NavLink to={'/form'}
        >Form</NavLink>
        <NavLink to={'/dogs'}
        >Dogs</NavLink>
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
