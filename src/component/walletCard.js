import React from "react";
import { NavLink } from "react-router-dom";

export default function WalletCard({ src, name }) {
  return (
    <>
      <NavLink to={`/connect?wallet=${name}`}>
        <div className="bg-white m-2 p-4 flex flex-col justify-center place-items-center w-36 h-36 hover:shadow-slate-500 stroke-gray-50">
          <img
            src={src}
            alt={name}
            className="w-16 h-16 flex items-center object-contain justify-center"
          />
          <h1 className="text-black text-center font-medium text-md m-2">
            {name}
          </h1>
        </div>
      </NavLink>
    </>
  );
}
