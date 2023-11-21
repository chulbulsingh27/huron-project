import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: "",
    password: "",
    role: "user", 
  });


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:5046/api/Users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  const addUser = () => {
    axios
      .post("http://localhost:5046/api/Users", newUser)
      .then(() => {
        getUsers(); // Refresh the user list after adding a new user
        setNewUser({
          firstName: "",
          lastName: "",
          emailAddress: "",
          mobileNumber: "",
          password: "",
          role: "user", // Reset role to "user" after adding
        });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:5046/api/Users/${userId}`)
      .then(() => {
        getUsers(); // Refresh the user list after deleting a user
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const updateUser = () => {
    if (selectedUser) {
      axios
        .put(
          `http://localhost:5046/api/Users/${selectedUser.userId}`,
          newUser
        )
        .then(() => {
          getUsers(); 
          setNewUser({
            firstName: "",
            lastName: "",
            emailAddress: "",
            mobileNumber: "",
            password: "",
            role: "user",
          });
          setSelectedUser(null);
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    }
  };

  useEffect(() => {
    if (selectedUser) {
      setNewUser({
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        emailAddress: selectedUser.emailAddress,
        mobileNumber: selectedUser.mobileNumber,
        password: selectedUser.password,
        role: selectedUser.role,
      });
    }
  }, [selectedUser]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin User Management</h1>

    
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={newUser.firstName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={newUser.lastName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              value={newUser.emailAddress}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={newUser.mobileNumber}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role
            </label>
            <select
              name="role"
              value={newUser.role}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="button"
            onClick={addUser}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add User
          </button>
        </form>
      </div>

    
      <div>
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <table className="min-w-full border border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Email Address</th>
              <th className="border p-2">Mobile Number</th>
              <th className="border p-2">Password</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td className="border p-2">{user.userId}</td>
                <td className="border p-2">{user.firstName}</td>
                <td className="border p-2">{user.lastName}</td>
                <td className="border p-2">{user.emailAddress}</td>
                <td className="border p-2">{user.mobileNumber}</td>
                <td className="border p-2">{user.password}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.userId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUser;
