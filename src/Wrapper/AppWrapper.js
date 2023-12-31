import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrapper = (Component, idName, classNames, hidden) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className={`copyright ${hidden}`}>
            <p className="p-text">@2023 Bikash Kumar Shaw</p>
            <p className="p-text">All Rights Reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
