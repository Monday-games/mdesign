import { FunctionComponent } from "react";
import AllMarketDefault from "./AllMarketDefault";
import LiveDataEmptystate from "./LiveDataEmptystate";
import styles from "./MarketFilter.module.css";

export type MarketFilterType = {
  className?: string;
};

const MarketFilter: FunctionComponent<MarketFilterType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.marketFilter, className].join(" ")}>
      <AllMarketDefault />
      <LiveDataEmptystate />
    </div>
  );
};

export default MarketFilter;
