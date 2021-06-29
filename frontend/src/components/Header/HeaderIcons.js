import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderIcon;
