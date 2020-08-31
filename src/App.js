import React from 'react';
import Header from './components/Header/Header';
import BannerSection from './components/BannerSection/BannerSection';
import UsersSection from './components/UsersSection/UsersSection';
import classes from './App.module.css';
function App() {
  return (
    <div className='App'>
      <Header />
      <BannerSection />
      <div className={classes.UsersSection}>
        <UsersSection />
      </div>
    </div>
  );
}

export default App;
