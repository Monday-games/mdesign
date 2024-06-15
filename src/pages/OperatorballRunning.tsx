import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Setvalues1 from "../components/Setvalues1";
import Livebetdatadisable from "../components/Livebetdatadisable";
import styles from "./OperatorballRunning.module.css";

const OperatorballRunning: FunctionComponent = () => {
  return (
    <div className={styles.operatorballRunning}>
      <FrameComponent1 />
      <div className={styles.marketInfo}>
        <div className={styles.ballrunning}>
          <div className={styles.runningBackground} />
          <div className={styles.marketIdentifierParent}>
            <div className={styles.marketIdentifier}>
              <div className={styles.marketIdLabel}>
                <div className={styles.marketId123456}>Market ID #123456</div>
              </div>
              <div className={styles.overBackgroundParent}>
                <div className={styles.overBackground} />
                <b className={styles.over0120}>Over 0.1/20</b>
              </div>
            </div>
            <div className={styles.marketTimer}>
              <div className={styles.timerContainer}>
                <div className={styles.marketTimeContainer}>
                  <div className={styles.marketTimeParent}>
                    <div className={styles.marketTime}>Market time</div>
                    <div className={styles.timeArray}>00:01</div>
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.wrapperIcon}
                      alt=""
                      src="/wrapper-12@2x.png"
                    />
                  </div>
                  <div className={styles.text}>Ball running</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.allMarketsInfo}>
        <section className={styles.marketList}>
          <div className={styles.marketsData}>
            <div className={styles.allMarketdefault}>
              <div className={styles.marketSelection} />
              <b className={styles.allMarkets}>All markets</b>
              <div className={styles.itemsCount}>
                <div className={styles.dropdownMenu}>
                  <div className={styles.componentstablegacy}>
                    <div className={styles.tab}>
                      <div className={styles.title}>Default</div>
                    </div>
                    <div className={styles.ink} />
                  </div>
                </div>
                <div className={styles.componentstablegacy1}>
                  <div className={styles.tab1}>
                    <div className={styles.title1}>Betting side</div>
                  </div>
                </div>
                <div className={styles.earningsTab}>
                  <div className={styles.componentstablegacy2}>
                    <div className={styles.tab2}>
                      <div className={styles.title2}>Balling side</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.livedataemptystate}>
              <div className={styles.totalBets}>
                <div className={styles.dataBackgrounds} />
                <div className={styles.marketValuesParent}>
                  <b className={styles.marketValues}>420</b>
                  <div className={styles.totalBets1}>Total bets</div>
                </div>
              </div>
              <div className={styles.totalEarnings}>
                <div className={styles.totalEarningsChild} />
                <div className={styles.coinsParent}>
                  <b className={styles.coins}>50000 coins</b>
                  <div className={styles.totalEarnings1}>Total earnings</div>
                </div>
              </div>
              <div className={styles.totalLosses}>
                <div className={styles.totalLossesChild} />
                <div className={styles.coinsGroup}>
                  <b className={styles.coins1}>1000 coins</b>
                  <div className={styles.totalLosses1}>Total losses</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.marketActions}>
            <Setvalues1 />
            <Livebetdatadisable />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OperatorballRunning;
