import "styles/pages/works.scss";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AppWrapper, MotionWrap } from "components";
import { IWorkAnimationProps, IWorkProps } from "types"
import { getWorks, urlFor } from "services";
import { useEffect, useState } from 'react';

import { motion } from "framer-motion";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [animateCard, setAnimateCard] = useState<IWorkAnimationProps>({ y: 0, opacity: 1 });
  const [works, setWorks] = useState<IWorkProps[]>([]);
  const [filterWork, setFilterWork] = useState<IWorkProps[]>([]);

  const worksData = async () => {
    const data = await getWorks();

    setWorks(data);
    setFilterWork(data);
  }

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        const data = works.filter((work: IWorkProps) => work.tags.includes(item));

        setFilterWork(data);
      }
    }, 500)
  }

  useEffect(() => {
    worksData().catch(e => { console.log(e) });
  }, [])

  return (
    <>
      <h2 className="head-text">
        <span>My</span> Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work--filter">
        {
          ["UI/UX", "Web App", "Mobile App", "React JS", "All"].map((work: string, i: number) => (
            <div
              key={i}
              onClick={() => { handleWorkFilter(work) }}
              className={`app__work--filter__item app__flex p-text ${activeFilter === work ? "item-active" : ""}`}
            >
              {work}
            </div>
          ))
        }
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work--portfolio"
      >
        {
          filterWork.map((work: IWorkProps, i: number) => (
            <div className="app__work--item app__flex" key={`${work.title}-${i}`}>
              <div className="app__work--img app__flex">
                <img src={urlFor(work.imgUrl) as any} alt={work.title} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                  className="app__work--hover app__flex"
                >
                  <a title={work.title} href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ opacity: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a title={work.title} href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ opacity: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work--content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: "10px" }}>{work.description}</p>

                <div className="app__work--tags app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))
        }
      </motion.div>
    </>
  )
}

export default AppWrapper(
  MotionWrap(Works, "app__works"),
  "work",
  "app__primarybg"
);
