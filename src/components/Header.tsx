import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header1, className].join(" ")}>
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
                <a className={styles.profileName}>Operator</a>
              </div>
            </div>
          </div>
          <div className={styles.iconWrapper3}>
            <img className={styles.languageIcon} alt="" src="/language.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
