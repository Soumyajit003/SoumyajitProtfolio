import React from "react";
import { useNavigate } from "react-router-dom";

const NavProject = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className=" md:mx-25 mx-10 my-5">
        <div className="flex text-white font-outfit items-center cursor-pointer w-19 justify-evenly group " onClick={() => navigate('/')}>
          <span className="text-2xl font-extrabold h2 group-hover:text-yellow-400 transition-all duration-200 group-hover:pr-2 ">&#8678;</span>
          <p className="text-lg">Back</p>
        </div>
      </div>
    </>
  );
};

export default NavProject;
