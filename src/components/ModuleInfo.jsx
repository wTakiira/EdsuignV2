import FeatherIcon from "feather-icons-react";

export default function ModuleInfo({ data, disposition }) {
  // Fonction pour regrouper les éléments par 2
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

  return (
    <ul
      className={`p-[var(--big-space)] rounded-[var(--custom-big-radius)] border border-[var(--primary)] ${
        disposition ? "flex flex-col" : "grid grid-cols-2"
      } gap-[var(--big-space)] flex-1`}
    >
      {data.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-[var(--small-space)]"
        >
          <FeatherIcon icon={item.icon} size={40} color="var(--primary)" />
          <p className="subtile-h2">{item.title}</p>
        </li>
      ))}
    </ul>
  );
}