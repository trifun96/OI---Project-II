import React, { useState, useEffect } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const userList = localStorage.getItem("usersList");
    if (JSON.parse(userList) && JSON.parse(userList).length > 0) {
      setUsersList(JSON.parse(userList));
    }
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      console.log(prevUsersList)
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: getRandomInt(150) },
      ];
    });
    const prevListUsers = [...usersList];
    console.log(prevListUsers);
    localStorage.setItem("usersList", JSON.stringify(prevListUsers));
  };


  const onDeleteItem = (id) => {
    console.log('nadji', id);
    const findIndex = usersList.findIndex((element) => element.id === id);
    console.log('nadji', findIndex);
    const prevUsersList = [...usersList];
    console.log('nadji', prevUsersList);
    prevUsersList.splice(findIndex, 1);
    setUsersList(prevUsersList);
    console.log('nadji', prevUsersList);
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteItem={onDeleteItem}/>
    </div>
  );
}

export default App;
