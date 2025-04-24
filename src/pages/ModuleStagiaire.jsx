import PresenceTable from "../components/Table";
import FeatherIcon from "feather-icons-react";
import QrCodeModal from "../components/QrCodeModal";
import { useState } from "react";
import Signature from "../components/Signature";
import CSSImage from "../assets/css.jpeg";
import ModuleInfo from "../components/ModuleInfo";

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

  const moduleInfo = [
    {
      icon: "calendar",
      title: "Lundi 14 Avril 2025",
    },
    {
      icon: "user",
      title: "Eric Mai",
    },
    {
      icon: "clock",
      title: "13h30 - 17h00",
    },
    {
      icon: "map-pin",
      title: "Salle Epicéa",
    },
  ];

  return (
    <>
      <div className="flex-1 p-[var(--small-space)] flex flex-col items-center gap-[var(--big-space)] px-[var(--big-space)]">
        <div className="flex gap-[var(--big-space)]">
          <div className="flex flex-col gap-[var(--big-space)] flex-1">
            <h1 className="h1">Module 2 : Framework CSS</h1>
            <div
              className="flex-1 overflow-hidden bg-cover bg-center bg-no-repeat rounded-[var(--custom-big-radius)]"
              style={{
                backgroundImage: `url(${CSSImage})`,
              }}
            ></div>
            <div className="flex items-center relative">
              <select
                className="w-full h-[50px] bg-[var(--primary-bis)] rounded-[var(--custom-big-radius)] font-['Poppins'] text-[20px] font-semibold text-[var(--tertiary)] px-[10px] border-none outline-none cursor-pointer appearance-none"
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
              <FeatherIcon
                icon="chevron-down"
                size={50}
                color="var(--tertiary)"
                className="absolute right-0"
              />
            </div>
          </div>
          <ModuleInfo data={moduleInfo} disposition="flex" />
        </div>

        {selectedName !== "no-name" && <Signature />}
      </div>
    </>
  );
}