import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/reducers/authSlice';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from './SideBar.module.css';
const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
          {user.token ? (
            <>
              <Link to='/profile'>Profile</Link>
              <Link to='/orders'>Orders</Link>
              <Link to='/' onClick={() => dispatch(logOut())}>
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
              <Link to='/about'>About</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
