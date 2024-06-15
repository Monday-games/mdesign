import { FunctionComponent } from "react";
import styles from "./LiveDataEmptystate.module.css";

export type LiveDataEmptystateType = {
  className?: string;
};

const LiveDataEmptystate: FunctionComponent<LiveDataEmptystateType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.livedataemptystate, className].join(" ")}>
      <div className={styles.totalBets}>
        <div className={styles.backgrounds} />
        <div className={styles.iconsParent}>
          <b className={styles.icons}>0</b>
          <div className={styles.totalBets1}>Total bets</div>
        </div>
      </div>
      <div className={styles.totalEarnings}>
        <div className={styles.totalEarningsChild} />
        <div className={styles.coinsParent}>
          <b className={styles.coins}>0 coins</b>
          <div className={styles.totalEarnings1}>Total earnings</div>
        </div>
      </div>
      <div className={styles.totalLosses}>
        <div className={styles.totalLossesChild} />
        <div className={styles.coinsGroup}>
          <b className={styles.coins1}>0 coins</b>
          <div className={styles.totalLosses1}>Total losses</div>
        </div>
      </div>
    </div>
  );
};

export default LiveDataEmptystate;
