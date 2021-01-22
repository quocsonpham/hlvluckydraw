// @flow

import * as React from "react";
import { useWindowSize } from "react-use";
import "./SiteWrapper.css";
import bg from "./bg.jpg"

const SiteWrapper = (props) => {

  const {height} = useWindowSize();
  const style = {
    height: height,
    background: `url(${bg})`,
    backgroundSize: 'cover'
  }

  const containerStyle = {
    height:height
  }

  return (
    <div style={style}>
      <div className="container main-section" style={containerStyle}>{props.children}</div>
    </div>
  );
}

export default SiteWrapper;
