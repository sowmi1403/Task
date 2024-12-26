import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-5 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white shadow-md overflow-hidden flex border-4 border-black">
          {/* Left Section - Image */}
          <div className="w-1/3 p-4 flex items-center justify-center">
            <img
              className="w-24 h-24 "
              src={user.picture.large}
              alt="Profile"
            />
          </div>
    
          {/* Right Section - Details */}
          <div className="w-2/3 p-4">
            <h2 className="text-lg font-semibold mb-2">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600 mb-1">Gender: {user.gender}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default App;
