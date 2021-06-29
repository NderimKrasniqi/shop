import React, { useState } from 'react';
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import styles from './HeaderIcons.module.css';
const HeaderIcon = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
    console.log(sideBar);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SearchOutlined className={styles.icon} />
        <UserOutlined className={styles.icon} />
        <ShoppingCartOutlined className={styles.icon} />
      </div>
      <div className={styles.right}>
        {sideBar ? (
          <CloseOutlined className={styles.icon} onClick={handleSideBar} />
        ) : (
          <MenuOutlined className={styles.icon} onClick={handleSideBar} />
        )}
        <div className={`${sideBar ? styles.sideBar : styles.sideBarNone}`}>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Clients</a>
          <a href='#'>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderIcon;
