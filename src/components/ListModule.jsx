import FeatherIcon from 'feather-icons-react';

export default function ListModule({ children }) {
  const data = ["01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023"];

  const ElementModule = (date) => {
    return (
      <li className='p-[var(--small-space)] rounded-[var(--custom-big-radius)] bg-[var(--secondary-bis)] flex items-center flex-col items-start justify-center gap-[10px]'>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <g id="Clock">
              <path
                id="Icon"
                d="M14 6.99992V13.9999L18.6667 16.3333M25.6667 13.9999C25.6667 20.4432 20.4433 25.6666 14 25.6666C7.55669 25.6666 2.33334 20.4432 2.33334 13.9999C2.33334 7.5566 7.55669 2.33325 14 2.33325C20.4433 2.33325 25.6667 7.5566 25.6667 13.9999Z"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg> */}
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
