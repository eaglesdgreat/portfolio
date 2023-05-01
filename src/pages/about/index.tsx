import "styles/pages/about.scss";

import { useEffect, useState } from "react"

import { motion } from "framer-motion";

const about = [
  { title: "Web Developer", description: "I am a good web dev", imageUrl: "" },
  { title: "Web Developer", description: "I am a good web dev", imageUrl: "" },
  { title: "Web Developer", description: "I am a good web dev", imageUrl: "" },
  { title: "Web Developer", description: "I am a good web dev", imageUrl: "" },
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that 
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {
          about.map((abt, i) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile--item"
              key={`${abt}${i}`}
            >

            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default About;
