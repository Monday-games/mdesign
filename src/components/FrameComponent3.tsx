import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  dotball?: string;
  dotBall?: string;
  prop?: string;
  six?: string;
  separator?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight1?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight2?: CSSProperties["height"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propAlignSelf3?: CSSProperties["alignSelf"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  dotball,
  dotBall,
  prop,
  six,
  separator,
  propHeight,
  propWidth,
  propGap,
  propFlex,
  propWidth1,
  propFlex1,
  propAlignSelf,
  propHeight1,
  propDisplay,
  propAlignSelf1,
  propHeight2,
  propAlignSelf2,
  propAlignSelf3,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      flex: propFlex,
    };
  }, [propGap, propFlex]);

  const dotballIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const dotBallStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight1,
      display: propDisplay,
    };
  }, [propAlignSelf, propHeight1, propDisplay]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
    };
  }, [propAlignSelf3]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup} style={groupDivStyle}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper} style={frameDivStyle}>
            <div className={styles.dotballParent} style={groupDiv1Style}>
              <img
                className={styles.dotballIcon}
                alt=""
                src={dotball}
                style={dotballIconStyle}
              />
              <div className={styles.dotBallWrapper} style={frameDiv1Style}>
                <div className={styles.dotBall} style={dotBallStyle}>
                  {dotBall}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div} style={divStyle}>
          {prop}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div1} style={div1Style}>
            05
          </div>
        </div>
        <div className={styles.div2} style={div2Style}>
          10,000
        </div>
        <div className={styles.div3} style={div3Style}>
          4000
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.ballTypes}>
            <div className={styles.noball6run}>
              <img
                className={styles.noballIcon}
                alt=""
                src="/noball-3@2x.png"
              />
              <img className={styles.sixIcon} alt="" src={six} />
            </div>
          </div>
        </div>
        <div className={styles.separator}>{separator}</div>
        <div className={styles.separator1}>
          <div className={styles.separator2}>05</div>
        </div>
        <div className={styles.separator3}>10,000</div>
        <div className={styles.separator4}>4000</div>
      </div>
    </div>
  );
};

export default FrameComponent3;
