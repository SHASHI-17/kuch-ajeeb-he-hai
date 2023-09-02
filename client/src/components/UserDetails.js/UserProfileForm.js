import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


function UserProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    address: '',
    company: '',
    industry: '',
    catchphrase: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const params=useParams();
  const id=params.uid;
  const [user,setUser]=useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    fetchUser(formData);
  };

  async function fetchUser(formData) {
    try {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const requestOptions = {
        method: 'PATCH', // Use the appropriate HTTP method (PATCH in this case)
        headers: {
          'Content-Type': 'application/json', // Set the appropriate content type
        },
        body: JSON.stringify({ name: formData.name }), // Convert your data to JSON format
      };
  
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setUser(data);
      console.log(user); // Logging the response data
    } catch (error) {
      console.log(error.message);
    }
  }
  


  const navigate =useNavigate();
return (
        <div className="container mx-auto p-4 flex">

        <h1 className='text-4xl' onClick={()=>{
            navigate(-1);
        }}>BACK</h1>

  {/* Left Column /}
  <div className="w-1/4">
    <img
      src="./assets/logo.svg" // Replace with the actual path to your image
      alt="User_Image"
      className="w-12 h-12 rounded-full mr-2"
    />
  </div>

  {/ Right Column */}
  <div className="w-3/4">
    <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <label className="block text-white text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border rounded py-2 px-3 w-1/2 bg-gray-200"
        />
        <label className="block text-white text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border rounded py-2 px-3 w-1/2 bg-gray-200"
        />
        <label className="block text-white text-sm font-bold mb-2">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="border rounded py-2 px-3 w-1/2 bg-gray-200"
        />
<label className="block text-white text-sm font-bold mb-2">Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="border rounded py-2 px-3 w-1/2 bg-gray-200"
        />
      </div>
      <div className="col-span-1">
        <label className="block text-white text-sm font-bold mb-2">Company:</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="border rounded py-2 px-3 w-1/2 bg-gray-200"
        />
        <label className="block text-white text-sm font-bold mb-2">Industry:</label>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          className="border rounded py-2 px-3 w-1/2 bg-gray-200"
        />
        <label className="block text-white text-sm font-bold mb-2">Catchphrase:</label>
        <textarea
          name="catchphrase"
          value={formData.catchphrase}
          onChange={handleInputChange}
          className="border rounded py-2 px-3 w-1/2 bg-gray-200"
        />
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleFormSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>

  {/* <div
            className="border rounded-lg overflow-hidden gap-2 p-2 hover:scale-105 hover:backdrop-blur-md transition-transform duration-500 ring-2 ring-green-500 
        md:ring-2 md:ring-green-500 hover:ring-4 md:hover:ring-4 hover:shadow-xl md:hover:shadow-2xl flex gap-x-1"
          >
            <div className="w-[50%]">
              <h1 className="mb-2 font-bold">
                {user.id}. {" "}  {user.name} {" "}  {`@${user.username}`}
              </h1>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-blue-700 cursor-pointerer "
                onClick={() => {
                  navigate(`/post/${user.id}`);
                }}
              >Show Post {">"}</p>
              <p>Comapny : {user.company.name}</p>
            </div>

            <div className="w-[50%]">
              <p>Phone : {user.phone}</p>
              <p>Website : <span className="text-blue-700 underline">{`https://${user.website}`}</span></p>

              <button
                className="border px-4 py-2 rounded-full" 
                >Details {">"}</button>

            </div>
          </div> */}

</div>
      );
}

export default UserProfileForm;