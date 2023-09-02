import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AiOutlineFastForward, AiOutlineFastBackward } from 'react-icons/ai';
import UserProfileForm from "../UserDetails.js/UserProfileForm";

function DashBoard() {

  const [posts,setPosts]=useState([]);
  async function fetchUsers(){
    const response = await fetch(process.env.REACT_APP_USER_URL);
    const data= await response.json();
    console.log(data);
    setPosts(data);
  }

  useState(()=>{
    fetchUsers()
  },[])
  console.log("posts ",posts);



  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  function selectPageHandler(selectedPage) {
    if (
      selectedPage >= 1 &&
      selectedPage <= posts.length / 5 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  }

  const [showEdit,setShowEdit]=useState(true);

  return (
    showEdit ? 
        <div className="w-10/12 mx-auto bg-[#23242a] text-white min-h-screen font-sans">
    <Navbar />
    <h1 className="text-3xl text-center p-4 mb-4">DashBoard</h1>
    {posts.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 cursor-pointer text-center px-1 ">
        {posts.slice(page * 5 - 5, page * 5).map((user, index) => (
          <div
            className="border rounded-lg overflow-hidden gap-2 p-2 hover:scale-105 hover:backdrop-blur-md transition-transform duration-500 ring-2 ring-green-500 
        md:ring-2 md:ring-green-500 hover:ring-4 md:hover:ring-4 hover:shadow-xl md:hover:shadow-2xl flex gap-x-1"
            key={index}
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
                onClick={()=>{navigate(`/details/${user.id}`); setShowEdit(false)  }}
                >Details {">"}</button>

            </div>
          </div>
        ))}
      </div>
    )}

                {/* Pagination */}
    {posts.length > 0 && (
      <div className="pagination flex justify-center items-center gap-2 m-4 p-2">
        
        
        <span
          className={`cursor-pointer flex justify-center items-center text-[#00df9a] ${
            page > 1 ? "" : "opacity-0"
          }`}
          onClick={() => selectPageHandler(page - 1)}
        >
         <div className="mr-1"><AiOutlineFastBackward size={24} color="#00df9a" /></div> 
          Previous
        </span>
        {[...Array(posts.length / 5)].map((_, index) => (
          <span
            className={`px-4 py-2 border-white border cursor-pointer ${
              page === index + 1 ? "bg-gray-700" : ""
            }`}
            key={index}
            onClick={() => selectPageHandler(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className={`cursor-pointer flex justify-center items-center w-[300] text-[#00df9a]${
            page < posts.length / 10 ? "" : "opacity-0"
          }`}
          onClick={() => selectPageHandler(page + 1)}
        >
          Next
         <div className="ml-1"><AiOutlineFastForward size={24} color="#00df9a" /></div> 
        </span>
        

      </div>
    )}
    <Footer />
  </div> : <UserProfileForm />
  );
}

export default DashBoard;
