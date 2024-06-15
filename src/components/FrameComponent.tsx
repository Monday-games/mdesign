import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/operatormarket-on");
  }, [navigate]);

  return (
    <div className={[styles.headermatchWrapper, className].join(" ")}>
      <div className={styles.headermatch}>
        <div className={styles.matchHeaderBackground} />
        <div className={styles.matchHeaderContent}>
          <div className={styles.matchHeaderContentInner}>
            <div className={styles.image11Parent}>
              <img
                className={styles.image11Icon}
                loading="lazy"
                alt=""
                src="/image-111@2x.png"
              />
              <div className={styles.matchStatus}>
                <b className={styles.vs}>VS</b>
              </div>
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-121@2x.png"
              />
            </div>
          </div>
          <div className={styles.matchDetails}>
            <div className={styles.texttextParent}>
              <div className={styles.texttext}>
                <a className={styles.matchNameValue}>India VS Pakistan</a>
              </div>
              <div className={styles.tournamentName}>
                <div className={styles.texttext1}>
                  <div className={styles.tournamentNameValue}>
                    T20 World cup, Group stage
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.matchScore}>
            <div className={styles.frameParent}>
              <div className={styles.texttextWrapper}>
                <div className={styles.texttext2}>
                  <div className={styles.text}>Match time</div>
                </div>
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.text1}>07:30 pm to 11:30 pm</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.matchTime}>
          <div className={styles.time}>
            <div className={styles.timeLabelParent}>
              <div className={styles.timeLabel}>
                <div className={styles.texttext3}>
                  <div className={styles.timeLabelValue}>Match tiner</div>
                </div>
              </div>
              <div className={styles.timeValue}>
                <a className={styles.text2}>-00:10 minutes</a>
              </div>
            </div>
            <div className={styles.actionButton}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.a}>Start 1st Inning</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.wrapperIcon}
                    alt=""
                    src="/wrapper@2x.png"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
