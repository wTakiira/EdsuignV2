import PresenceTable from "../components/Table";
import FeatherIcon from "feather-icons-react";
import QrCodeModal from "../components/QrCodeModal";
import { useState } from "react";
// import Dropdown from "../components/Dropdown";
import Signature from "../components/Signature";
import StarRatingBox from "../components/Stars";

export default function ModuleStagiaire() {
  const [open, setOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("no-name");

  const names = [
    {
      value: "no-name",
      label: "Je suis...",
    },
    {
      value: "Sarah Eastern",
      label: "Sarah Eastern",
    },
    {
      value: "John Doe",
      label: "John Doe",
    },
    {
      value: "Jane Smith",
      label: "Jane Smith",
    },
    {
      value: "Michael Johnson",
      label: "Michael Johnson",
    },
  ];

  return (
    <>
      <div className="flex-1 py-[var(--left-margin)] items-center flex flex-col">
        <div>
        <h1>Module 2 : Framework CSS</h1>
    
        </div>

        <div
        style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
        }}>

        <select
          name=""
          id=""
          style={{
            width: "300px",
            height: "50px",
            backgroundColor: "var(--primary-bis)",
            borderRadius: "var(--custom-big-radius)",
            fontFamily: "Poppins",
            color: "var(--tertiary)",
            padding: "10px",
            border: "none",
            outline: "none",
            cursor: "pointer",
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
          onChange={(e) => {
            setSelectedName(e.target.value);
          }}
          value={selectedName}
        >
          {names.map((name) => (
            <option
              key={name.value}
              value={name.value}
              className="text-gray-900 font-['Poppins'] text-2xl"
              disabled={name.value === "no-name"}
              selected={name.value === "no-name"}
            >
              {name.label}
            </option>
          ))}
        </select>
        <FeatherIcon icon="chevron-down" size={50} color="var(--tertiary)" style={{
            position: "absolute",
            right: "0px",
        }} />
        </div>
        {selectedName !== "no-name" && <Signature />}
      </div>
      <StarRatingBox question="ahh"></StarRatingBox>
    </>
  );
}
