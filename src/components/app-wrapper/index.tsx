import { NavigationDots, SocialMedia } from "components";

import { FC } from "react";

// import { IAppWrapperProps } from "types";

const AppWrapper = (Component: FC<any>, idName: string, classNames?: string) => function HOC () {
  const name = classNames ?? "";
  return (
    <div id={idName} className={`app__container ${name}`}>
      <SocialMedia />

      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2023 Emmanuel</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>

      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrapper;
