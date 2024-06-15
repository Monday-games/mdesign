import { FunctionComponent } from "react";
import styles from "./Operatorend1stInning.module.css";

const Operatorend1stInning: FunctionComponent = () => {
  return (
    <div className={styles.operatorend1stInning}>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <header className={styles.header1}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.toolbarWrapper}>
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
              <div className={styles.texttextWrapper}>
                <div className={styles.texttext}>
                  <a className={styles.text}>Operator</a>
                </div>
              </div>
            </div>
            <div className={styles.iconWrapper3}>
              <img className={styles.languageIcon} alt="" src="/language.svg" />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.headermatchWrapper}>
        <div className={styles.headermatch}>
          <div className={styles.matchBackground} />
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.a}>End 1st Inning</div>
              <div className={styles.iconWrapper4}>
                <img
                  className={styles.wrapperIcon}
                  alt=""
                  src="/wrapper@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.image11Parent}>
                    <img
                      className={styles.image11Icon}
                      loading="lazy"
                      alt=""
                      src="/image-112@2x.png"
                    />
                    <div className={styles.vsWrapper}>
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
              <div className={styles.frameDiv}>
                <div className={styles.texttextParent}>
                  <div className={styles.texttext1}>
                    <a className={styles.matchTime}>India VS Pakistan</a>
                  </div>
                  <div className={styles.texttext2}>
                    <div className={styles.text1}>
                      T20 World cup, Group stage
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.texttextGroup}>
                  <div className={styles.texttext3}>
                    <div className={styles.locationName}>Match time</div>
                  </div>
                  <div className={styles.textWrapper}>
                    <div className={styles.text2}>07:30 pm to 11:30 pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameGroup}>
                <div className={styles.texttextContainer}>
                  <div className={styles.texttext4}>
                    <div className={styles.betsCount}>Match tiner</div>
                  </div>
                </div>
                <div className={styles.winningAmountWrapper}>
                  <a className={styles.winningAmount}>01:45 hours</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.operatorend1stInningInner}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper3}>
            <div className={styles.stInningSummeryParent}>
              <div className={styles.stInningSummery}>
                <div className={styles.summarySeparatorParent}>
                  <div className={styles.summarySeparator} />
                  <div className={styles.frameParent2}>
                    <div className={styles.firstInningSummeryWrapper}>
                      <div className={styles.firstInningSummery}>
                        <h2 className={styles.firstInningSummery1}>
                          First inning summery
                        </h2>
                      </div>
                    </div>
                    <div className={styles.totalmatchesParent}>
                      <div className={styles.totalmatches}>
                        <b className={styles.statisticItems}>129</b>
                        <div className={styles.totalMatchesWrapper}>
                          <div className={styles.totalMatches}>
                            Total matches
                          </div>
                        </div>
                      </div>
                      <div className={styles.usersplayed}>
                        <b className={styles.b}>500</b>
                        <div className={styles.usersPlayedWrapper}>
                          <div className={styles.usersPlayed}>Users played</div>
                        </div>
                      </div>
                      <div className={styles.totalbets}>
                        <b className={styles.b1}>3000</b>
                        <div className={styles.totalBetsWrapper}>
                          <a className={styles.totalBets}>Total Bets</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.totalearningsParent}>
                    <img
                      className={styles.totalearningsIcon}
                      loading="lazy"
                      alt=""
                      src="/totalearnings@2x.png"
                    />
                    <img
                      className={styles.totallossesIcon}
                      loading="lazy"
                      alt=""
                      src="/totallosses@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <div className={styles.button1}>
                  <div className={styles.iconWrapper5}>
                    <img
                      className={styles.wrapperIcon1}
                      alt=""
                      src="/wrapper@2x.png"
                    />
                  </div>
                  <div className={styles.buttonLabel}>End 1st innings</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonsecondarycirclelarge}>
            <img
              className={styles.questionIcon}
              loading="lazy"
              alt=""
              src="/question.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operatorend1stInning;
