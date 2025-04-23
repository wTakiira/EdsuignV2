import {
    Card,
    Typography,
    Button,
    Chip,
    IconButton,
} from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD_SIGN = [
    "Élève",
    "Présence",
    "Heure de signature",
    "Signature",
    "Actions",
];

const TABLE_HEAD_FORM = [
    "Élève",
    "Complétion",
    "Actions",
];

const TABLE_ROWS_SIGN = [
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
                        {type.type === 1 && TABLE_HEAD_SIGN.map((head) => (
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
                        {type.type === 2 && 
                        TABLE_HEAD_FORM.map((head) => (
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
                    {type.type === 1 && rows.map((row, index) => {
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

                    {type.type === 2 && TABLE_ROWS_FORM.map((row, index) => {
                        const isLast = index === TABLE_ROWS_FORM.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                        return (
                            <tr key={index} className="even:bg-blue-gray-50/50">
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {row.name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <div className="w-[400px] bg-[var(--secondary-bis)] rounded-full h-[25px] relative">
                                        <div
                                            className="bg-[var(--primary)] h-[25px] rounded-full"
                                            style={{ width: `${row.completion}%` }}
                                        ></div>
                                        <p style={{
                                            position: "absolute",
                                            left: 10,
                                            top: "0",
                                        }}>{row.completion}% complété</p>
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
