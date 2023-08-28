import React from "react";
import { BsInstagram } from "react-icons/bs";
import { useNavigate, NavLink } from "react-router-dom";

// export default function CategoryCard(category)
// {
//   const navigate = useNavigate()
//   const walletpage = () =>
//   {
//     console.log("test")
//     navigate('/wallet')
//   }

//   return (
//     <div className='flex flex-col gap-1 p-4  w-full  sm:w-1/2 items-start text-left border rounded-md'
//     >
//       <div  className='w-10 h-10'>
//       <BsInstagram />
//       </div>

//       <h1 className='text-2xl font-medium text-gray-300 '>{category.name}</h1>
//       <NavLink to="/wallet">
//         <p className='text-gray-500' onclick={walletpage}>{category.description}</p>
//         <strong className='text-gray-500'>Click here &rarr;</strong>
//       </NavLink>
//   </div>
//   )
// }

export const CategoryCard = ({ title, image }) => {
  const navigate = useNavigate();

  const walletpage = () => {
    navigate("/wallet");
  };

  return (
    <div className="bg-[rgb(18,17,46)] h-[23rem] flex flex-col justify-center  gap-y-5 rounded-[0.5rem] w-full md:w-auto md:flex-[0.24] p-8">
      <div className="w-full h-[10rem]">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold mb-6 ">{title}</h3>
        <button
          className="bg-[linear-gradient(90deg,#6825e7,#aa58b8)] w-full border-[#ba84ff] border-2  font-semibold p-2 rounded-md"
          onClick={walletpage}
        >
          Choose
        </button>
      </div>
    </div>
  );
};
