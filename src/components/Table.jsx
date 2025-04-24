import {
  Card,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import Avatar from "../assets/avatar.jpeg";
import Signature from "../assets/signature.png";

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
    // Passe à "Absent" et reset la signature/heure
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
    // Passe à "Présent" et ajoute une signature fictive
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
                  className="p-4"
                  style={{
                    backgroundColor: "var(--primary)",
                    borderTopLeftRadius:
                      index === 0 ? "var(--custom-big-radius)" : "0",
                    borderTopRightRadius:
                      index === TABLE_HEAD_SIGN.length - 1
                        ? "var(--custom-big-radius)"
                        : "0",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="small"
                    color="var(--tertiary)"
                    className="leading-none"
                    style={{
                      color: "var(--tertiary)",
                    }}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            {type.type === 2 &&
              TABLE_HEAD_FORM.map((head, index) => (
                <th
                  key={head}
                  className="p-4"
                  style={{
                    backgroundColor: "var(--primary)",
                    borderTopLeftRadius:
                      index === 0 ? "var(--custom-big-radius)" : "0",
                    borderTopRightRadius:
                      index === TABLE_HEAD_FORM.length - 1
                        ? "var(--custom-big-radius)"
                        : "0",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="small"
                    className="leading-none"
                    style={{
                      color: "var(--tertiary)",
                    }}
                  >
                    {head}
                  </Typography>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {type.type === 1 &&
            rows.map((row, index) => {
              const isLast = index === rows.length - 1;
              const classes = "p-4";
              return (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className={classes}>
                    <div className="flex items-center">
                      <img
                        src={Avatar}
                        alt=""
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
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
                  <td className={classes}>
                    <Chip
                      value={row.presence}
                    style={{
                    backgroundColor : row.presence === "Présent"
                        ? "#ECFFEE"
                        : row.presence === "Absent"
                        ? "#FF484826"
                        : "#32323287",
                    color : row.presence === "Présent"
                        ? "#00B112"
                        : row.presence === "Absent"
                        ? "#FF4848"
                        : "var(--tertiary)",
                    }}
                      variant="ghost"
                      size="sm"
                      className="font-bold px-[16px] py-[4px] flex rounded-[4px] w-[fit-content] mx-[auto]"
                    />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {row.time}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-center"
                    >
                      {row.signature ? <img src={Signature} className="mx-[auto]" /> : "Pas de signature"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {row.presence === "Présent" ? (
                      <Button
                        color="amber"
                        size="sm"
                        className="mr-2 "
                        onClick={() => handleCancel(index)}
                      >
                        Annuler
                      </Button>
                    ) : (
                      <Button
                        color="indigo"
                        size="sm"
                        onClick={() => handleSign(index)}
                      >
                        Signer
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}

          {type.type === 2 &&
            TABLE_ROWS_FORM.map((row, index) => {
              const isLast = index === TABLE_ROWS_FORM.length - 1;
              const classes = "p-4";
              return (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className={classes}>
                    <div className="flex items-center">
                      <img
                        src={Avatar}
                        alt=""
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
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
                  <td className={classes}>
                    <div className="w-[400px] bg-[var(--secondary-bis)] rounded-full h-[25px] relative mx-[auto]">
                      <div
                        className="bg-[var(--primary)] h-[25px] rounded-full"
                        style={{ width: `${row.completion}%` }}
                      ></div>
                      <p
                        style={{
                          position: "absolute",
                          left: 10,
                          top: "0",
                        }}
                      >
                        {row.completion}% complété
                      </p>
                    </div>
                  </td>
                  <td className={classes}>
                    <Button color="indigo" size="sm">
                      Détails
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Card>
  );
}
