import React from 'react';
import User from './User/User';
import classes from './UsersSection.module.css';
export default function UsersSection() {
  const UsersArr = [
    {
      id: 1,
      title: 'Dmm design',
      active: false,
      date: '20 Dec',
    },
    {
      id: 2,
      title: 'Blurr animation',
      active: true,
      date: '22 Dec',
    },
    {
      id: 3,
      title: 'Illustration',
      active: false,
      date: '26 Dec',
    },
    {
      id: 4,
      title: 'Refunds',
      active: false,
      date: '28 Dec',
    },
  ];
  return (
    <div className={classes.UserWrapper}>
      {UsersArr.map((item) => {
        return (
          <div key={item.id} className={classes.User}>
            <User
              id={item.id}
              title={item.title}
              isActive={item.active}
              date={item.date}
            />
          </div>
        );
      })}
    </div>
  );
}
