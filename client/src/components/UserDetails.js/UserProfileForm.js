import React, { useState } from 'react';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };
return (
        <div className="container mx-auto p-4 flex">
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
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
      );
}

export default UserProfileForm;