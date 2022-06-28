import { Routes, Route } from "react-router-dom"

import style from './Footer.module.scss'

const FooterElement = (props: any) => {
  console.log(props)
  return (
    <div className={!props.style ? style.wrapper : style.wrapperAlt} >
      <div className={style.box}>
        <div className={style.item}>my profile</div>
        <div className={style.item}>open sorses</div>
        <div className={style.item}>partneres</div>
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
    </Routes>
  )
}

export default Footer;