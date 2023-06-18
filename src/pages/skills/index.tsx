import "styles/pages/skills.scss";

import { AppWrapper, MotionWrap } from "components";
import { FC, Fragment, ReactElement, useEffect, useState } from 'react';
import { IExperienceProps, ISkillProps } from "types"
import { getSkillsAndExp, urlFor } from "services";

import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "framer-motion";

const Skills: FC = (): ReactElement => {
  const [skills, setSkills] = useState<ISkillProps[]>([]);
  const [experiences, setExperiences] = useState<IExperienceProps[]>([]);

  const skillsData = async () => {
    const data = await getSkillsAndExp() as any;
    setSkills(data.skills);
    setExperiences(data.experiences);
  }

  useEffect(() => {
    skillsData().catch(e => { console.log(e) });
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills--container">
        <motion.div
          className="app__skills--list"
        >
          {
            skills.map((skill: ISkillProps, i: number) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills--item app__flex"
                key={`${skill.name}-${i}`}
              >
                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon) as any} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))
          }
        </motion.div>

        <motion.div className="app__skills--exp">
          {
            experiences.map((experience: IExperienceProps, idx: number) => (
              <motion.div
                className="app__skills--exp__item"
                key={`${experience.year}-${idx}`}
              >
                <div className="app__skills--exp__year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills--exp__works">
                  {
                    experience.works.map((work, i: number) => (
                      <Fragment key={`${work.company}-${i}-${idx}`}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills--exp__works--work"
                          data-tooltip-id={`my-tooltip-${work.name}-${i}`}
                          data-tooltip-content={work.desc}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>

                        <ReactTooltip
                          id={`my-tooltip-${work.name}-${i}`}
                          className="skills-tooltip"
                        />
                      </Fragment>
                    ))
                  }
                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
