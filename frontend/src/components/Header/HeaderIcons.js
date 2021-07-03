import React from 'react';
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import styles from './HeaderIcons.module.css';
const HeaderIcons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <SearchOutlined className={styles.icon} />
        <UserOutlined className={styles.icon} />
        <ShoppingCartOutlined className={styles.icon} />
      </div>
    </div>
  );
};

export default HeaderIcons;
