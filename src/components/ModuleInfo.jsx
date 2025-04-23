import FeatherIcon from "feather-icons-react";

export default function ModuleInfo({ data }) {
  // Fonction pour regrouper les éléments par 2
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <ul
      style={{
        padding: "var(--big-space)",
        borderRadius: "var(--custom-big-radius)",
        borderWidth: "1px",
        borderColor: "var(--primary)",
        width: 770,
        display: "grid", 
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "var(--big-space)",
      }}
    >
      {data.map((item, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--small-space)", 
          }}
        >
          <FeatherIcon icon={item.icon} size={40} color="var(--primary)" />
          <p
            style={{
              fontWeight: 600,
              fontSize: 32,
            }}
          >
            {item.title}
          </p>
        </li>
      ))}
    </ul>
  );
}