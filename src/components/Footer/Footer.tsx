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
          <img src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top" alt="user_photo" />
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
        element={<FooterElement style={true} />} />
      <Route path="/jokes"
        element={<FooterElement style={true} />} />
    </Routes>
  )
}

export default Footer;