import React from "react";

export default function FormInput({
  name,
  label,
  type,
  placeholder,
  hint,
  onchange,
  value,
}) {
  return (
    <div className="flex flex-col w-full">
      <label className="my-1 text-gray-400 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        className=" bg-gray-200 rounded-md p-2 w-full text-black outline-none"
        placeholder={placeholder}
        onChange={onchange}
        required
      />
      <small className="text-gray-100">{hint}</small>
    </div>
  );
}
