import React from "react";

import styles from "./Slider.module.scss";

const Slider = (props) => {
  return <div className={styles.slider}>{props.children}</div>;
};

export default Slider;
