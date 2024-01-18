// src/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" text-center ">
      <h2 className=" bg-cyan-400 h-8 content-around">User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listOfUsers.map((user) => (
          <li
            key={user.id}
            className=" bg-cyan-600"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
