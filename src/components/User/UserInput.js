import React, { forwardRef } from 'react';

import classes from './UserInput.module.css';

const UserInput = forwardRef((props, ref) => {
  return (
    <div className={classes['user-input']}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        className={props.className}
        onBlur={props.onBlur}
        value={props.value}
      />
    </div>
  );
});

export default UserInput;
