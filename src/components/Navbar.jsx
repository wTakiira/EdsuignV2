export default function NavBar() {
  return (
    <nav className="absolute left-[20px]">
      <div>
        <svg
          width="32"
          height="34"
          viewBox="0 0 32 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V29.1253C32 31.3344 30.2091 33.1253 28 33.1253H4C1.79086 33.1253 0 31.3344 0 29.1253V4Z"
            fill="#9381FF"
          />
          <path
            d="M12 30.3648V16.5626H20V30.3648M4 12.422L16 2.76044L28 12.422V27.6044C28 28.3365 27.719 29.0386 27.219 29.5563C26.7189 30.074 26.0406 30.3648 25.3333 30.3648H6.66667C5.95942 30.3648 5.28115 30.074 4.78105 29.5563C4.28095 29.0386 4 28.3365 4 27.6044V12.422Z"
            stroke="#FFD8BE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
}
