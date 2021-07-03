import React from 'react';
import styles from './HomeScreen.module.css';
import image from '../assets/image.jpg';
const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shape}>
        <img className={styles.img} src={image} alt='Girl in a jacket' />
      </div>
    </div>
  );
};

export default HomeScreen;
