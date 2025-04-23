import FeatherIcon from "feather-icons-react";

export default function ListModule({ children }) {
  const data = [
    {
      date: "01/01/2023",
      isSelected: false,
    },
    {
      date: "02/01/2023",
      isSelected: false,
    },
    {
      date: "03/01/2023",
      isSelected: true,
    },
    {
      date: "04/01/2023",
      isSelected: false,
    },
  ];

  const ElementModule = ({ date, isSelected }) => {
    return (
      <li
        className="p-[var(--small-space)] rounded-[var(--custom-big-radius)] flex items-center flex-col items-start justify-center gap-[10px]"
        style={{
          backgroundColor: isSelected
            ? "var(--primary)"
            : "var(--secondary-bis)",
        }}
      >
        <FeatherIcon
          icon="clock"
          color={isSelected ? "var(--tertiary)" : "var(--quaternary)"}
          size="32px"
        />
        <p
          style={{
            color: isSelected ? "var(--tertiary)" : "var(--quaternary)",
          }}
        >
          {date}
        </p>
      </li>
    );
  };

  return (
    <div className="flex flex-col gap-[var(--big-space)] w-[170px] h-full bg-[var(--secondary)] p-[10px] rounded-[var(--custom-big-radius)] m-[var(--small-space)]"
    style={{
      height: "calc(100vh - var(--big-space))",
      position: "fixed",
      left: "var(--left-margin)",
    }}
    >
      <h3 className="text-center mt-[10px]">Autres dates du modules</h3>
      <ul className="flex flex-col gap-[var(--small-space)]">
        {data.map((item, index) => (
          <ElementModule
            key={index}
            date={item.date}
            isSelected={item.isSelected}
          />
        ))}
      </ul>
    </div>
  );
}
