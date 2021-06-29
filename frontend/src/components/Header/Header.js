import React from 'react';
import Title from './Title';
import Icons from './HeaderIcons';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.container}>
      <Title title='Shop' />
      <Icons />
    </div>
  );
};

export default Header;
