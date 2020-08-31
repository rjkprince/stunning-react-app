import React from 'react';
import classes from './Navigation.module.css';
export default function Navigation({ title, isActive }) {
  return (
    <div>
      <p
        className={`${classes.Navigation} ${isActive ? classes.Active : null}`}
      >
        {title}
      </p>
    </div>
  );
}
