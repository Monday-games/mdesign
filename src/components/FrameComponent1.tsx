import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.header1Parent, className].join(" ")}>
      <header className={styles.header1}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.headerRight}>
          <div className={styles.toolbar}>
            <div className={styles.iconWrapper}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
            </div>
            <div className={styles.iconWrapper1}>
              <img
                className={styles.questioncircleIcon}
                alt=""
                src="/questioncircle.svg"
              />
            </div>
            <div className={styles.badgeonIcon}>
              <div className={styles.icon}>
                <img
                  className={styles.bellIcon}
                  loading="lazy"
                  alt=""
                  src="/bell.svg"
                />
              </div>
              <div className={styles.badgeWrapper}>
                <div className={styles.offset}>
                  <div className={styles.badgecount}>
                    <div className={styles.badge}>
                      <a className={styles.number}>11</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.layoutblockshorizontal2}>
              <div className={styles.iconWrapper2}>
                <img
                  className={styles.settingIcon}
                  loading="lazy"
                  alt=""
                  src="/setting.svg"
                />
              </div>
              <div className={styles.user}>
                <div className={styles.texttext}>
                  <a className={styles.name}>Operator</a>
                </div>
              </div>
            </div>
            <div className={styles.iconWrapper3}>
              <img className={styles.languageIcon} alt="" src="/language.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.headermatch}>
        <div className={styles.background} />
        <div className={styles.teamsWrapperParent}>
          <div className={styles.teamsWrapper}>
            <div className={styles.teamLogos}>
              <div className={styles.teamLogosInner}>
                <div className={styles.image11Parent}>
                  <img
                    className={styles.image11Icon}
                    loading="lazy"
                    alt=""
                    src="/image-112@2x.png"
                  />
                  <div className={styles.matchType}>
                    <b className={styles.vs}>VS</b>
                  </div>
                  <img
                    className={styles.image12Icon}
                    loading="lazy"
                    alt=""
                    src="/image-122@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.matchInfo}>
              <div className={styles.texttextParent}>
                <div className={styles.texttext1}>
                  <a className={styles.content}>India VS Pakistan</a>
                </div>
                <div className={styles.texttext2}>
                  <div className={styles.text}>T20 World cup, Group stage</div>
                </div>
              </div>
            </div>
            <div className={styles.matchStatus}>
              <div className={styles.texttextGroup}>
                <div className={styles.texttext3}>
                  <div className={styles.text1}>Match time</div>
                </div>
                <div className={styles.timeRemaining}>
                  <div className={styles.value}>07:30 pm to 11:30 pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statusButtons}>
            <div className={styles.buttonsWrapper}>
              <div className={styles.firstButtonParent}>
                <div className={styles.firstButton}>
                  <div className={styles.texttext4}>
                    <div className={styles.text2}>Match tiner</div>
                  </div>
                </div>
                <div className={styles.secondButton}>
                  <a className={styles.value1}>00:00 minutes</a>
                </div>
              </div>
              <div className={styles.actionButton}>
                <button className={styles.button}>
                  <div className={styles.a}>End 1st Inning</div>
                  <div className={styles.iconWrapper4}>
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
    </div>
  );
};

export default FrameComponent1;
