import FeatherIcon from 'feather-icons-react';

export default function ListModule({ children }) {
  const data = ["01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023"];

  const ElementModule = (date) => {
    return (
      <li className='p-[20px] rounded-[var(--custom-big-radius)] bg-[var(--secondary-bis)] gap-[20px]'>
          <FeatherIcon icon="clock" color='var(--black)'size='32px'/>
        <p>{date.date}</p>
      </li>
    );
  };

  return (
    <ul className="flex flex-col gap-4 w-[170px] h-full bg-[var(--secondary)] p-[20px] rounded-[var(--custom-big-radius)] m-[var(--small-space)]">
    {data.map((item, index) => (
      <ElementModule key={index} date={item} />
    ))}
  </ul>
  );
}
