import React from "react";

import Card from "../UI/Card";
import classes from './UsersList.module.css';
import buttonClasses from  '../UI/Button.module.css';

const UsersList = (props) => {
  return (
      <Card className={classes.users} >
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
          <button className={buttonClasses.button} onClick={() => props.onDeleteItem(user.id)}>Delete</button>
          
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;
