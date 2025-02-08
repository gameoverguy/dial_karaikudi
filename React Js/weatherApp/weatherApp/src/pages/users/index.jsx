// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./users.css";

function Users() {
  // const [users, setUsers] = useState(null);
  // const [currentUserInfo, SetCurrentUserInfo] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  //   mobile: "",
  // });

  // function handleDeleteData(id) {
  //   fetch(`http://localhost:8000/users/${id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  //     }
  //   });
  // }

  // function handleEditData(user, index) {
  //   SetCurrentUserInfo({
  //     ...currentUserInfo,
  //     username: user.name,
  //     password: user.pass,
  //     email: user.mail,
  //     mobile: user.phone,
  //   });

  //   const updatedData = users.map((item, i) => {
  //     console.log(i);
  //     if (i === index) {
  //       return {
  //         ...item,
  //         disabled: false,
  //       };
  //     }
  //     return {
  //       ...item,
  //       disabled: true,
  //     };
  //   });

  //   setUsers(updatedData);
  // }

  // function handleUpdateData(index) {
  //   const updatedData = users.map((item, i) => {
  //     if (i === index) {
  //       return {
  //         id: item.id,
  //         name: currentUserInfo.username,
  //         pass: currentUserInfo.password,
  //         mail: currentUserInfo.email,
  //         phone: currentUserInfo.mobile,
  //         disabled: true,
  //       };
  //     }
  //     return item;
  //   });

  //   setUsers(updatedData);

  //   fetch(`http://localhost:8000/users/${updatedData[index].id}`, {
  //     method: "PATCH", // Use PATCH if you want to update specific fields
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedData[index]),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Failed to update user");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // Update the frontend state
  //       setUsers((prevUsers) =>
  //         prevUsers.map((user) =>
  //           user.id === updatedData.id ? { ...user, ...data } : user
  //         )
  //       );
  //     });
  // }

  // useEffect(() => {
  //   fetch("http://localhost:8000/users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  return;
  // <>
  //   <div className="orders">
  //     <div className="top">
  //       <div className="order_title">Orders</div>
  //       <div className="order_head_right">
  //         <input
  //           type="text"
  //           className="form_control"
  //           placeholder="Quick search by id"
  //         />
  //         <select className="dropdown" name="cars" id="cars">
  //           <option value="OnHold">On Hold</option>
  //           <option value="Delivered">Delivered</option>
  //           <option value="Rejected">Rejected</option>
  //         </select>

  //         <Link to="/">
  //           <div className="addorder">+ Add User</div>
  //         </Link>
  //       </div>
  //     </div>
  //     <div className="orders_data">
  //       <div className="table_head">
  //         <div className="item_prop">Username</div>
  //         <div className="item_prop">Password</div>
  //         <div className="item_prop">Email</div>
  //         <div className="item_prop">Mobile</div>
  //       </div>

  //       <div className="table_body_container">
  //         {users &&
  //           users.map((user, index) => (
  //             <div className="table_body" key={index}>
  //               <input
  //                 className="item_prop"
  //                 onChange={(event) =>
  //                   SetCurrentUserInfo({
  //                     ...currentUserInfo,
  //                     username: event.target.value,
  //                   })
  //                 }
  //                 value={
  //                   !user.disabled ? currentUserInfo.username : user.name
  //                 }
  //                 disabled={user.disabled}
  //               />
  //               <input
  //                 className="item_prop"
  //                 type={user.disabled ? "password" : "text"}
  //                 onChange={(event) =>
  //                   SetCurrentUserInfo({
  //                     ...currentUserInfo,
  //                     password: event.target.value,
  //                   })
  //                 }
  //                 value={
  //                   !user.disabled ? currentUserInfo.password : user.pass
  //                 }
  //                 disabled={user.disabled}
  //               />
  //               <input
  //                 className="item_prop"
  //                 onChange={(event) =>
  //                   SetCurrentUserInfo({
  //                     ...currentUserInfo,
  //                     email: event.target.value,
  //                   })
  //                 }
  //                 value={!user.disabled ? currentUserInfo.email : user.mail}
  //                 disabled={user.disabled}
  //               />
  //               <input
  //                 className="item_prop"
  //                 onChange={(event) =>
  //                   SetCurrentUserInfo({
  //                     ...currentUserInfo,
  //                     mobile: event.target.value,
  //                   })
  //                 }
  //                 value={!user.disabled ? currentUserInfo.mobile : user.phone}
  //                 disabled={user.disabled}
  //               />
  //               <div
  //                 className="btn btn-info"
  //                 onClick={
  //                   !user.disabled ? null : () => handleEditData(user, index)
  //                 }
  //               >
  //                 Edit
  //               </div>
  //               <div
  //                 className="btn btn-success"
  //                 onClick={
  //                   !user.disabled ? () => handleUpdateData(index) : null
  //                 }
  //               >
  //                 Update
  //               </div>
  //               <div
  //                 className="btn btn-danger"
  //                 onClick={() => handleDeleteData(user.id)}
  //               >
  //                 Delete
  //               </div>
  //             </div>
  //           ))}
  //       </div>
  //     </div>

  //     <div className="bottom_container">
  //       <div>
  //         <div>© 2025 DialKaraikudi. Template by Karthick</div>
  //       </div>
  //       <div>Something</div>
  //     </div>
  //   </div>
  // </>
}

export default Users;
