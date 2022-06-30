import { Routes, Route } from "react-router-dom"

import style from './Footer.module.scss'

const FooterElement = (props: any) => {
  console.log(props)
  return (
    <div className={!props.style ? style.wrapper : style.wrapperAlt} >
      <div className={style.box}>
        <div className={style.item}>
          <div className={style.caption}>Creator</div>
          <ul className={style.list__items}>
            <li>photo</li>
            <li>contacts</li>
            <li>socials</li>
          </ul>
        </div>
        <div className={style.item}>
          <div className={style.caption}>Resources</div>
          <ul className={style.list__items}>
            <li>book1</li>
            <li>book2</li>
            <li>book3</li>
            <li>book4</li>
          </ul>
        </div>
        <div className={style.item}>
          <div className={style.caption}>Help & support</div>
          <ul className={style.list__items}>
            <li>Alexandr Sanin</li>
            <li>Alexandr Paizak</li>
            <li>Ivan Melnykov</li>
            <li>Voloshina Viktoria</li>
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
        element={<FooterElement style={true} />} />
    </Routes>
  )
}

export default Footer;