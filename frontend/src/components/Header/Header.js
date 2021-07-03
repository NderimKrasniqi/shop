import React from 'react';
import Title from './Title';
import HeaderIcons from './HeaderIcons';
import styles from './Header.module.css';
import SideBar from './SideBar';
const Header = () => {
  return (
    <header className={styles.container}>
      <Title title='Shop' />
      <div className={styles.sideBar}>
        <HeaderIcons />
        <SideBar />
      </div>
    </header>
  );
};

export default Header;
