import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import ShopScreen from './pages/ShopScreen';
import AboutScreen from './pages/AboutScreen';
import RegisterScreen from './pages/RegisterScreen';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/shop' component={ShopScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
