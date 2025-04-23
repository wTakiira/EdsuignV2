import {
    Card,
    Typography,
    Button,
    Chip,
    IconButton,
} from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = [
    "Élève",
    "Présence",
    "Heure de signature",
    "Signature",
    "Actions",
];

const TABLE_ROWS = [
    {
        name: "Sarah Eastern",
        presence: "Présent",
        presenceColor: "green",
        time: "09:01",
        signature: "✔️", // Remplace par un composant de signature si besoin
        canCancel: true,
        canSign: false,
    },
    {
        name: "Sarah Eastern",
        presence: "Absent",
        presenceColor: "red",
        time: "--:--",
        signature: "Pas de signature",
        canCancel: false,
        canSign: true,
    },
    {
        name: "Sarah Eastern",
        presence: "Absent",
        presenceColor: "red",
        time: "--:--",
        signature: "Pas de signature",
        canCancel: false,
        canSign: true,
    },
    {
        name: "Sarah Eastern",
        presence: "Attente",
        presenceColor: "gray",
        time: "--:--",
        signature: "Pas de signature",
        canCancel: false,
        canSign: true,
    },
];

export default function PresenceTable() {

    const [rows, setRows] = useState(TABLE_ROWS);

    const handleCancel = (idx) => {
        // Passe à "Absent" et reset la signature/heure
        setRows((prev) =>
            prev.map((row, i) =>
                i === idx
                    ? {
                        ...row,
                        presence: "Absent",
                        time: "--:--",
                        signature: "Pas de signature",
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
                        time: "09:01", // tu peux mettre l'heure actuelle ici
                        signature: "✔️",
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
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-bold leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        const isLast = index === rows.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                        return (
                            <tr key={index} className="even:bg-blue-gray-50/50">
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {row.name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Chip
                                        value={row.presence}
                                        color={
                                            row.presence === "Présent"
                                                ? "green"
                                                : row.presence === "Absent"
                                                    ? "red"
                                                    : "gray"
                                        }
                                        variant="ghost"
                                        size="sm"
                                        className="font-bold px-[16px] py-[4px] flex rounded-[4px] w-[fit-content]"
                                    />
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {row.time}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {row.signature}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    {row.presence === "Présent" ? (
                                        <Button color="amber" size="sm" className="mr-2" onClick={() => handleCancel(index)}>
                                            Annuler
                                        </Button>
                                    ) : (
                                        <Button color="indigo" size="sm" onClick={() => handleSign(index)}>
                                            Signer
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}
