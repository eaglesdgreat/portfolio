import "styles/pages/about.scss";

import { AppWrapper, MotionWrap } from "components";
import { getAbout, urlFor } from "services";
import { useEffect, useState } from "react"

import { IAboutProps } from "types";
// import images from "constants/images";
import { motion } from "framer-motion";

const About = () => {
  const [about, setAbout] = useState<IAboutProps[]>([]);

  async function aboutData () {
    const data = await getAbout();
    setAbout(data);
  }

  useEffect(() => {
    aboutData().catch(e => { console.log(e) });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profile">
        {
          about?.map((abt: IAboutProps, i: number) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile--item"
              key={`${abt.title}-${i}`}
            >
              <img src={urlFor(abt.imageUrl) as any} alt={abt.title} />

              <h2 className="bold-text" style={{ marginTop: "20px" }}>
                {abt.title}
              </h2>

              <p className="p-text" style={{ marginTop: "10px" }}>
                {abt.description}
              </p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
