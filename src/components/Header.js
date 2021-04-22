import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Shopiplanner</p>
      <div className={styles.message}>
        <p>Plan your shopping quickly and wisely!</p>
      </div>
    </header>
  );
};

export default Header;
