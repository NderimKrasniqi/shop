import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './SideBar.module.css';
const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBar = () => {
    setShowSideBar((prevSideBar) => !prevSideBar);
  };
  return (
    <div>
      <div className={styles.right}>
        {showSideBar ? (
          <CloseOutlined className={styles.icon} onClick={handleSideBar} />
        ) : (
          <MenuOutlined className={styles.icon} onClick={handleSideBar} />
        )}
        <div className={`${showSideBar ? styles.sideBar : styles.sideBarNone}`}>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
