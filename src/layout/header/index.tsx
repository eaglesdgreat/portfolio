import "styles/layout/header.scss";

import images from "constants/images";
import { motion } from "framer-motion";

const variants = {
  whileInView: {
    scales: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  }
}


const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header--info"
      >
        <div className="app__header--info__badge">
          <div className="badge__cmp app__flex">
            <span>👋</span>
            <div>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Emmanuel</h1>
            </div>
          </div>

          <div className="tag__cmp app__flex">
            <p className="p-text">Software Developer</p>
            <p className="p-text">Frontend Engineer</p>
            <p className="p-text">Backend Engineer</p>
            <p className="p-text">DevOp Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header--img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay__circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={variants}
        whileInView={variants.whileInView}
        className="app__header--circles"
      >
        {
          [images.flutter, images.redux, images.sass].map((image, i) => (
            <div className="circle__cmp app__flex" key={`circle-${i}`}>
              <img src={image} alt="circle" />
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Header;
