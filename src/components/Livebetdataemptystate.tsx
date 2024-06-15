import { FunctionComponent } from "react";
import styles from "./Livebetdataemptystate.module.css";

export type LivebetdataemptystateType = {
  className?: string;
};

const Livebetdataemptystate: FunctionComponent<LivebetdataemptystateType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.livebetdataemptystate, className].join(" ")}>
      <div className={styles.emptyStateBackgroundParent}>
        <div className={styles.emptyStateBackground} />
        <div className={styles.emptybasic}>
          <img
            className={styles.componentsemptyImgGrayIcon}
            loading="lazy"
            alt=""
            src="/componentsemptyimggray.svg"
          />
          <div className={styles.noDataWrapper}>
            <div className={styles.noData}>No live bets data</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livebetdataemptystate;
