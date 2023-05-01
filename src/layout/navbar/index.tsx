import "styles/layout/navbar.scss";

import { HiMenuAlt4, HiX } from "react-icons/hi";

import images from "constants/images";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
}


const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const navList = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar--logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar--links">
        {
          navList.map((item: string, i) => (
            <li key={`link-${item}-${i}`} className="app__flex p-text">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>

      <div className="app__navbar--menu">
        <HiMenuAlt4 onClick={() => setToggle(prev => !prev)} />

        {
          <motion.nav
            animate={toggle ? "open" : "closed"}
            variants={variants}
          >
            <HiX onClick={() => setToggle(prev => !prev)} />
            <ul>
              {
                navList.map((item: string, i) => (
                  <li key={`link-${item}-${i}`}>
                    <a href={`#${item}`} onClick={() => setToggle(prev => !prev)}>{item}</a>
                  </li>
                ))
              }
            </ul>
          </motion.nav>
        }
      </div>
    </nav>
  )
}

export default NavBar;
