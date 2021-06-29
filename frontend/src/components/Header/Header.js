import React from 'react';
import Title from './Title';
import Icons from './HeaderIcons';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.container}>
      <Title title='Shop' />
      <Icons />
    </header>
  );
};

export default Header;
