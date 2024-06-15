import { FunctionComponent } from "react";
import styles from "./HeaderMarket.module.css";

export type HeaderMarketType = {
  className?: string;
};

const HeaderMarket: FunctionComponent<HeaderMarketType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.headermarket, className].join(" ")}>
      <div className={styles.marketHeaderBackground} />
      <div className={styles.marketInfoParent}>
        <div className={styles.marketInfo}>
          <div className={styles.marketId}>
            <div className={styles.marketId123456}>Market ID #123456</div>
          </div>
          <div className={styles.oversBackgroundParent}>
            <div className={styles.oversBackground} />
            <b className={styles.over0120}>Over 0.0/20</b>
          </div>
        </div>
        <div className={styles.marketTimeWrapper}>
          <div className={styles.marketTime}>
            <div className={styles.marketTimeValue}>
              <div className={styles.marketTimeParent}>
                <h2 className={styles.marketTime1}>Market time</h2>
                <div className={styles.div}>00:00</div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.iconWrapper}>
                <img
                  className={styles.wrapperIcon}
                  alt=""
                  src="/wrapper-1@2x.png"
                />
              </div>
              <div className={styles.marketActionButton}>Market on</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMarket;
