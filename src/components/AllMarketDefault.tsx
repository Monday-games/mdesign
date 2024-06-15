import { FunctionComponent } from "react";
import styles from "./AllMarketDefault.module.css";

export type AllMarketDefaultType = {
  className?: string;
};

const AllMarketDefault: FunctionComponent<AllMarketDefaultType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.allMarketdefault, className].join(" ")}>
      <div className={styles.allMarketsBackground} />
      <b className={styles.allMarkets}>All markets</b>
      <div className={styles.itemsCount}>
        <div className={styles.dropdown}>
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
        <div className={styles.dropdownItemThree}>
          <div className={styles.componentstablegacy2}>
            <div className={styles.tab2}>
              <div className={styles.title2}>Balling side</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMarketDefault;
