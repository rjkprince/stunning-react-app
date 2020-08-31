import React from 'react';
import Logo from '../../assets/stunning-logo.png';
import classes from './Header.module.css';
import Navigation from '../Navigation/Navigation';
export default function Header() {
  const TitleArr = [
    {
      id: 1,
      title: 'Home',
      active: true,
    },
    {
      id: 2,
      title: 'About',
      active: false,
    },
    {
      id: 3,
      title: 'Blog',
      active: false,
    },
    {
      id: 4,
      title: 'Jobs',
      active: false,
    },
  ];

  return (
    <div className={classes.HeaderWrapper}>
      <img className={classes.Logo} src={Logo} alt='stunning-logo' />
      <div className={classes.Navigations}>
        {TitleArr.map((item) => {
          return (
            <Navigation
              className={classes.Navigation}
              key={item.id}
              title={item.title}
              isActive={item.active}
            />
          );
        })}
      </div>
      <p className={classes.AccountBtn}>Your Account</p>
    </div>
  );
}
