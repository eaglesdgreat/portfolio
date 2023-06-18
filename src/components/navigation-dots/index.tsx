import { FC } from "react"
import { INavigationDotsProps } from "types";

const NavigationDots: FC<INavigationDotsProps> = ({ active }) => {
  const navList = ["home", "about", "work", "skills", "testimonial", "contact"];

  return (
    <div className="app__navigation">
      {
        navList.map((item: string, i) => (
          <a
            key={`link-${item}-${i}`}
            href={`#${item}`}
            className="app__navigation--dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          >{}</a>
        ))
      }
    </div>
  )
}

export default NavigationDots;
