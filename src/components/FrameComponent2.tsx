import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.iconWrapper}>
            <img
              className={styles.wrapperIcon}
              alt=""
              src="/wrapper-2@2x.png"
            />
          </div>
          <div className={styles.text}>Submit</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.iconWrapper1}>
            <img
              className={styles.wrapperIcon1}
              alt=""
              src="/wrapper-2@2x.png"
            />
          </div>
          <div className={styles.text1}>Submit</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
