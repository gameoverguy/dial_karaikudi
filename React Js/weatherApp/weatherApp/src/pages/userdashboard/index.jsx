import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Weatherwidget from "../../components/weatherwidget";
import "../userdashboard/UserDashboard.css";
import { WeatherContext } from "../../context/WeatherContext";

export default function UserDashboard() {
  const { modifyStatus, setModifyStatus } = useContext(WeatherContext);
  const [users, setUsers] = useState(null);
  const [currentUserInfo, SetCurrentUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  function handleDeleteData(id) {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      }
    });

    setModifyStatus("user deleted Successfully");
  }

  function handleEditData(user, index) {
    SetCurrentUserInfo({
      ...currentUserInfo,
      username: user.name,
      password: user.pass,
      email: user.mail,
      mobile: user.phone,
    });

    const updatedData = users.map((item, i) => {
      console.log(i);
      if (i === index) {
        return {
          ...item,
          disabled: false,
        };
      }
      return {
        ...item,
        disabled: true,
      };
    });

    setUsers(updatedData);
  }

  function handleUpdateData(index) {
    const updatedData = users.map((item, i) => {
      if (i === index) {
        return {
          id: item.id,
          name: currentUserInfo.username,
          pass: currentUserInfo.password,
          mail: currentUserInfo.email,
          phone: currentUserInfo.mobile,
          disabled: true,
        };
      }
      return item;
    });

    if (!currentUserInfo.email.includes("@")) {
      console.log("test");

      setModifyStatus("Please enter a valid Email Id");
      return;
    }

    setUsers(updatedData);

    fetch(`http://localhost:8000/users/${updatedData[index].id}`, {
      method: "PATCH", // Use PATCH if you want to update specific fields
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData[index]),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update user");
        }
        return res.json();
      })
      .then((data) => {
        // Update the frontend state
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === updatedData.id ? { ...user, ...data } : user
          )
        );
      });

    setModifyStatus("User Details Modified Successfully");
  }

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  //////////////////////////////

  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const tempuser = data.find((user) => user.id === id);
        setCurrentUser(tempuser);
      });
  }, [id]);

  if (!currentUser) {
    return <div>Loading...</div>; // Show a loading message until currentUser is found
  }

  return (
    <div className="flex flex-col justify-around items-center gap-12 w-full py-24">
      <div className="text-4xl text-gray-800 font-bold">
        Welcome back {currentUser.name}
      </div>
      <div>
        <Weatherwidget />
      </div>
      <div>
        <div className="bg-black/15 backdrop-blur-lg rounded-2xl p-12 flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-4xl text-white font-bold">User Management</div>
            <div className="text-xl text-white font-bold">{modifyStatus}</div>
          </div>
          <div className="orders_data">
            <div className="table_head">
              <div className="item_prop">Username</div>
              <div className="item_prop">Password</div>
              <div className="item_prop">Email</div>
              <div className="item_prop">Mobile</div>
            </div>

            <div className="table_body_container">
              {users &&
                users.map((user, index) => (
                  <div className="table_body" key={index}>
                    <input
                      className="item_prop [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      onChange={(event) =>
                        SetCurrentUserInfo({
                          ...currentUserInfo,
                          username: event.target.value,
                        })
                      }
                      value={
                        !user.disabled ? currentUserInfo.username : user.name
                      }
                      disabled={user.disabled}
                    />
                    <input
                      className="item_prop [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      type={user.disabled ? "password" : "text"}
                      onChange={(event) =>
                        SetCurrentUserInfo({
                          ...currentUserInfo,
                          password: event.target.value,
                        })
                      }
                      value={
                        !user.disabled ? currentUserInfo.password : user.pass
                      }
                      disabled={user.disabled}
                    />
                    <input
                      className="item_prop [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      onChange={(event) =>
                        SetCurrentUserInfo({
                          ...currentUserInfo,
                          email: event.target.value,
                        })
                      }
                      value={!user.disabled ? currentUserInfo.email : user.mail}
                      disabled={user.disabled}
                    />
                    <input
                      className="item_prop [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      type="number"
                      onChange={(event) =>
                        SetCurrentUserInfo({
                          ...currentUserInfo,
                          mobile: event.target.value,
                        })
                      }
                      value={
                        !user.disabled ? currentUserInfo.mobile : user.phone
                      }
                      disabled={user.disabled}
                    />
                    <div className="flex gap-2 items-center">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={
                          !user.disabled
                            ? null
                            : () => handleEditData(user, index)
                        }
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={
                          !user.disabled ? () => handleUpdateData(index) : null
                        }
                      >
                        Update
                      </button>

                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => handleDeleteData(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
