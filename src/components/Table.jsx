import {
  Card,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { useState } from "react";
import Avatar from "../assets/avatar.jpeg";
import Signature from "../assets/signature.png";
import CustomButton from "./CustomButton";

const TABLE_HEAD_SIGN = [
  "Élève",
  "Présence",
  "Heure de signature",
  "Signature",
  "Actions",
];

const TABLE_HEAD_FORM = ["Élève", "Complétion", "Actions"];

const TABLE_ROWS_SIGN = [
  {
    name: "Sarah Eastern",
    presence: "Présent",
    presenceColor: "green",
    time: "09:01",
    signature: true,
    canCancel: true,
    canSign: false,
  },
  {
    name: "Sarah Eastern",
    presence: "Absent",
    presenceColor: "red",
    time: "--:--",
    signature: false,
    canCancel: false,
    canSign: true,
  },
  {
    name: "Sarah Eastern",
    presence: "Absent",
    presenceColor: "red",
    time: "--:--",
    signature: false,
    canCancel: false,
    canSign: true,
  },
  {
    name: "Sarah Eastern",
    presence: "Attente",
    presenceColor: "gray",
    time: "--:--",
    signature: false,
    canCancel: false,
    canSign: true,
  },
];

const TABLE_ROWS_FORM = [
  {
    name: "Sarah Eastern",
    completion: 45,
  },
  {
    name: "Sarah Eastern",
    completion: 35,
  },
  {
    name: "Sarah Eastern",
    completion: 10,
  },
  {
    name: "Sarah Eastern",
    completion: 70,
  },
];

export default function PresenceTable(type) {
  const [rows, setRows] = useState(TABLE_ROWS_SIGN);

  const handleCancel = (idx) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === idx
          ? {
              ...row,
              presence: "Absent",
              time: "--:--",
              signature: false,
            }
          : row
      )
    );
  };

  const handleSign = (idx) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === idx
          ? {
              ...row,
              presence: "Présent",
              time: "09:01",
              signature: true,
            }
          : row
      )
    );
  };

  return (
    <Card className="w-full overflow-x-auto">
      <table className="min-w-max w-full table-auto text-left">
        <thead>
          <tr>
            {type.type === 1 &&
              TABLE_HEAD_SIGN.map((head, index) => (
                <th
                  key={head}
                  className={`p-4 bg-[var(--primary)] text-center ${
                    index === 0 ? "rounded-tl-[var(--custom-big-radius)]" : ""
                  } ${
                    index === TABLE_HEAD_SIGN.length - 1
                      ? "rounded-tr-[var(--custom-big-radius)]"
                      : ""
                  }`}
                >
                  <Typography
                    variant="small"
                    className="leading-none text-[var(--tertiary)]"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            {type.type === 2 &&
              TABLE_HEAD_FORM.map((head, index) => (
                <th
                  key={head}
                  className={`p-4 bg-[var(--primary)] text-center ${
                    index === 0 ? "rounded-tl-[var(--custom-big-radius)]" : ""
                  } ${
                    index === TABLE_HEAD_FORM.length - 1
                      ? "rounded-tr-[var(--custom-big-radius)]"
                      : ""
                  }`}
                >
                  <Typography
                    variant="small"
                    className="leading-none text-[var(--tertiary)]"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {type.type === 1 &&
            rows.map((row, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <div className="flex items-center">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-6 h-6 rounded-full mr-2.5"
                    />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.name}
                    </Typography>
                  </div>
                </td>
                <td className="p-4">
                  <Chip
                    value={row.presence}
                    className={`font-bold px-4 py-1 flex rounded-sm w-fit mx-auto ${
                      row.presence === "Présent"
                        ? "bg-[#ECFFEE] text-[#00B112]"
                        : row.presence === "Absent"
                        ? "bg-[#FF484826] text-[#FF4848]"
                        : "bg-[#32323287] text-[var(--tertiary)]"
                    }`}
                    variant="ghost"
                    size="sm"
                  />
                </td>
                <td className="p-4 text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.time}
                  </Typography>
                </td>
                <td className="p-4 text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.signature ? (
                      <img src={Signature} className="mx-auto" />
                    ) : (
                      "Pas de signature"
                    )}
                  </Typography>
                </td>
                <td className="p-4">
                  {row.presence === "Présent" ? (
                    <CustomButton
                      icon="pen-tool"
                      onClick={() => handleCancel(index)}
                      variant="secondary"
                    >
                      Annuler
                    </CustomButton>
                  ) : (
                    <CustomButton
                      icon="pen-tool"
                      onClick={() => handleSign(index)}
                    >
                      Signer
                    </CustomButton>
                  )}
                </td>
              </tr>
            ))}

          {type.type === 2 &&
            TABLE_ROWS_FORM.map((row, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <div className="flex items-center">
                    <img
                      src={Avatar}
                      alt=""
                      className="w-6 h-6 rounded-full mr-2.5"
                    />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.name}
                    </Typography>
                  </div>
                </td>
                <td className="p-4">
                  <div className="w-[400px] bg-[var(--secondary-bis)] rounded-full h-6 relative mx-auto">
                    <div
                      className="bg-[var(--primary)] h-6 rounded-full"
                      style={{ width: `${row.completion}%` }}
                    ></div>
                    <p className="absolute left-2 top-0">
                      {row.completion}% complété
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <CustomButton icon="share">Partager</CustomButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
}