import { Routes, Route } from "react-router-dom"

import style from './Footer.module.scss'

const FooterElement = (props: any) => {
  return (
    <div className={!props.style ? style.wrapper : style.wrapperAlt} >
      <div className={style.box}>
        <div className={style.item}>
          <div className={style.caption}>Creator</div>
          <ul className={style.list__items}>
            <li><a href='form'>linkedIn</a></li>
            <li><a href='form'>Facebook</a></li>
            <li><a href='form'>Instagram</a></li>
            <li><a href='form'>Phone</a></li>
            <li><a href='form'>Mail</a></li>
          </ul>
        </div>
        <div className={style.item}>
          <div className={style.caption}>Resources</div>
          <ul className={style.list__items}>
            <li><a href='form'>Book</a></li>
            <li><a href='form'>Book</a></li>
            <li><a href='form'>Book</a></li>
            <li><a href='form'>Book</a></li>
          </ul>
        </div>
        <div className={style.item}>
          <div className={style.caption}>Help & support</div>
          <ul className={style.list__items}>
            <li><a href='form'>Alexandr Sanin</a></li>
            <li><a href='form'>Alexandr Paizak</a></li>
            <li><a href='form'>Ivan Melnykov</a></li>
            <li><a href='form'>Voloshina Viktoria</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <Routes>
      <Route path=""
        element={<FooterElement style={false} />} />
      <Route path="/news"
        element={<FooterElement style={false} />} />
      <Route path="/form"
        element={<FooterElement style={true} />} />
      <Route path="/dogs"
        element={<FooterElement style={false} />} />
      <Route path="/jokes"
        element={<FooterElement style={true} />} />
      <Route path="/social_network"
        element={<FooterElement style={true} />} />
    </Routes>
  )
}

export default Footer;