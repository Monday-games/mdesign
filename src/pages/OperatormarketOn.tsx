import { FunctionComponent, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import MarketFilter from "../components/MarketFilter";
import Setvalues from "../components/Setvalues";
import Livebetdataemptystate from "../components/Livebetdataemptystate";
import styles from "./OperatormarketOn.module.css";

const OperatormarketOn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/operatorball-running");
  }, [navigate]);

  return (
    <div className={styles.operatormarketOn}>
      <FrameComponent1 />
      <div className={styles.marketHeader}>
        <div className={styles.headermarket}>
          <div className={styles.marketBackground} />
          <div className={styles.marketIdWrapperParent}>
            <div className={styles.marketIdWrapper}>
              <div className={styles.marketId123456Wrapper}>
                <div className={styles.marketId123456}>Market ID #123456</div>
              </div>
              <div className={styles.overBackgroundParent}>
                <div className={styles.overBackground} />
                <b className={styles.over0120}>Over 0.1/20</b>
              </div>
            </div>
            <div className={styles.marketTimeWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <div className={styles.marketTimeParent}>
                    <h2 className={styles.marketTime}>Market time</h2>
                    <div className={styles.marketTimeContent}>00:00</div>
                  </div>
                </div>
                <button className={styles.button} onClick={onButtonClick}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.wrapperIcon}
                      alt=""
                      src="/wrapper-11@2x.png"
                    />
                  </div>
                  <div className={styles.viewMoreLabel}>Market on</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.marketFilters}>
        <section className={styles.allMarketsWrapper}>
          <MarketFilter />
          <div className={styles.bettingActions}>
            <Setvalues />
            <div className={styles.labelWrapper}>
              <div className={styles.buttonsecondarycirclelarge}>
                <img
                  className={styles.questionIcon}
                  alt=""
                  src="/question.svg"
                />
              </div>
              <Livebetdataemptystate />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OperatormarketOn;
