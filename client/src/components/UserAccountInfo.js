import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";

const TestUsersList = () => {
  const [user, setUser] = useState(null);
  const [editableFields, setEditableFields] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleEdit = () => {
    setEditableFields(user);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/users/${user.user_id}`, editableFields); 
      
      if (response.status === 200) {
        console.log('User information updated successfully');
        const updatedUser = { ...user, ...editableFields };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditing(false);
        setEditableFields({});
      } else {
        console.error('Failed to update user information');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Hi, {user.user_name}!! Edit Your Profile</h2>
          <p>
            Name:{" "}
            {editableFields.user_name ? (
              <input
                type="text"
                name="user_name"
                value={editableFields.user_name || user.user_name}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_name}</span>
            )}
            <button onClick={() => handleEdit("user_name")}>Edit</button>
          </p>

          <p>Email: {user.user_email}</p>
          <p>
            Phone:{" "}
            {editableFields.user_phone ? (
              <input
                type="text"
                name="user_phone"
                value={editableFields.user_phone || user.user_phone}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_phone}</span>
            )}
            <button onClick={() => handleEdit("user_phone")}>Edit</button>
          </p>
          <p>
            State:{" "}
            {editableFields.user_state ? (
              <input
                type="text"
                name="user_state"
                value={editableFields.user_state || user.user_state}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_state}</span>
            )}
            <button onClick={() => handleEdit("user_state")}>Edit</button>
          </p>
          <p>
            City:{" "}
            {editableFields.user_city ? (
              <input
                type="text"
                name="user_city"
                value={editableFields.user_city || user.user_city}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_city}</span>
            )}
            <button onClick={() => handleEdit("user_city")}>Edit</button>
          </p>
          <p>
            Address:{" "}
            {editableFields.user_address ? (
              <input
                type="text"
                name="user_address"
                value={editableFields.user_address || user.user_address}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_address}</span>
            )}
            <button onClick={() => handleEdit("user_address")}>Edit</button>
          </p>
          <p>
            Zipcode:{" "}
            {editableFields.user_zipcode ? (
              <input
                type="text"
                name="user_zipcode"
                value={editableFields.user_zipcode || user.user_zipcode}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_zipcode}</span>
            )}
            <button onClick={() => handleEdit("user_zipcode")}>Edit</button>
          </p>
          <p>
            Profile:{" "}
            {editableFields.user_profile ? (
              <input
                type="text"
                name="user_profile"
                value={editableFields.user_profile || user.user_profile}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_profile}</span>
            )}
            <button onClick={() => handleEdit("user_profile")}>Edit</button>
          </p>
          <p>
            Profile picture:{" "}
            {editableFields.user_profile_picture ? (
              <input
                type="text"
                name="user_profile_picture"
                value={editableFields.user_profile_picture || user.user_profile_picture}
                onChange={handleChange}
              />
            ) : (
              <span>{user.user_profile_picture}</span>
            )}
            <button onClick={() => handleEdit("user_profile_picture")}>Upload</button>
          </p>
        </div>
      ) : (
        <p>User data not found.</p>
      )}

      <br />
      <br />
      {isEditing && (
        <button onClick={handleUpdate}>Update</button>
      )}
    </div>
  );
};

export default TestUsersList;
