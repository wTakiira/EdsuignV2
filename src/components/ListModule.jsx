export default function ListModule({ children }) {
  const data = ["01/01/2023", "02/01/2023", "03/01/2023", "04/01/2023"];

  const ElementModule = (date) => {
    console.log(date);
    return (
      <li style={{}}>
        <div>
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
        </div>
        <p>{date.date}</p>
      </li>
    );
  };

  return (
    <ul
      className=""
      style={{
        width: 170,
        height: "100%",
        backgroundColor: "var(--secondary)",
      }}
    >
      {data.map((item, index) => (
        <ElementModule key={index} date={item} />
      ))}
      {/* {children} */}
    </ul>
  );
}
