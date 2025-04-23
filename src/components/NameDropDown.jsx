import React from "react";
import { Select, Option } from "@material-tailwind/react";

export default function NameDropdown({ names, value, onChange }) {
  return (
    <div className="w-72 h-14 px-5 bg-[var(--primary-bis)] rounded-2xl flex items-center">
      <Select
  label="Sélectionner un nom"
  value={value}
  onChange={onChange}
  className="w-full h-10 font-semibold text-[var(--tertiary)] text-2xl font-['Poppins']"
  menuProps={{ className: "bg-white" }}
>
  {names.map((name) => (
    <Option key={name} value={name} className="text-gray-900 font-['Poppins'] text-2xl">
      {name}
    </Option>
  ))}
</Select>
    </div>
  );
}