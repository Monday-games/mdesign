import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./OperatorDashboard.module.css";

const OperatorDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/operatorstart-innings");
  }, [navigate]);

  return (
    <div className={styles.operatorDashboard}>
      <Header />
      <main className={styles.operatorDashboardInner}>
        <section className={styles.upcomingMatchesParent}>
          <a className={styles.upcomingMatches}>Upcoming matches</a>
          <div className={styles.matchesList}>
            <div className={styles.operatorDashboard1}>
              <div className={styles.cardlegacy}>
                <div className={styles.cardBody}>
                  <div className={styles.text}>Starting in 23:00 minutes</div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.image11Icon}
                    loading="lazy"
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <div className={styles.vsWrapper}>
                    <b className={styles.vs}>VS</b>
                  </div>
                  <img
                    className={styles.image12Icon}
                    loading="lazy"
                    alt=""
                    src="/image-12@2x.png"
                  />
                </div>
                <div className={styles.texttextWrapper}>
                  <div className={styles.texttext}>
                    <div className={styles.matchTitleTwo}>
                      India VS Pakistan
                    </div>
                  </div>
                </div>
                <div className={styles.texttextContainer}>
                  <div className={styles.texttext1}>
                    <div className={styles.matchLocationTwo}>
                      T20 World cup, Group stage
                    </div>
                  </div>
                </div>
                <div className={styles.layoutblockshorizontal2Wrapper}>
                  <div className={styles.layoutblockshorizontal2}>
                    <div className={styles.texttext2}>
                      <div className={styles.matchTimeTwo}>
                        2nd June, Starts at 6:00 am
                      </div>
                    </div>
                  </div>
                </div>
                <button className={styles.button} onClick={onButtonClick}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.wrapperIcon}
                      alt=""
                      src="/wrapper@2x.png"
                    />
                  </div>
                  <div className={styles.text1}>View</div>
                </button>
              </div>
              <div className={styles.cardlegacy1}>
                <div className={styles.body}>
                  <div className={styles.teamNameWrapper}>
                    <div className={styles.teamName}>
                      Starting in 23:00 minutes
                    </div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <img
                      className={styles.image11Icon1}
                      loading="lazy"
                      alt=""
                      src="/image-11@2x.png"
                    />
                    <div className={styles.vsContainer}>
                      <b className={styles.vs1}>VS</b>
                    </div>
                    <img
                      className={styles.image12Icon1}
                      loading="lazy"
                      alt=""
                      src="/image-12@2x.png"
                    />
                  </div>
                  <div className={styles.texttextFrame}>
                    <div className={styles.texttext3}>
                      <div className={styles.matchTitle}>India VS Pakistan</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.texttext4}>
                      <div className={styles.matchLocation}>
                        T20 World cup, Group stage
                      </div>
                    </div>
                  </div>
                  <div className={styles.layoutblockshorizontal2Container}>
                    <div className={styles.layoutblockshorizontal21}>
                      <div className={styles.texttext5}>
                        <div className={styles.matchTime}>
                          2nd June, Starts at 6:00 am
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.button1}>
                    <div className={styles.iconWrapper1}>
                      <img
                        className={styles.wrapperIcon1}
                        alt=""
                        src="/wrapper@2x.png"
                      />
                    </div>
                    <div className={styles.text2}>View</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OperatorDashboard;
