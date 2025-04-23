import PresenceTable from "../components/Table";
import ModuleInfo from "../components/ModuleInfo";


export default function FormInter() {

    const data = [
        {
            icon: "book-open",
            title: "Framework CSS",
        },
        {
            icon: "users",
            title: "B3 Dev",
        },
    ];

    return (
        <div className="flex-1 py-[var(--left-margin)] items-center flex flex-col">
              <h1>Formulaire de satisfaction</h1>
              <div className="flex items-center gap-[var(--big-space)]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="63"
                    viewBox="0 0 64 63"
                    fill="none"
                  >
                    <g id="Vector">
                      <rect
                        width="63"
                        height="63"
                        transform="translate(0.5)"
                        fill="#B8B8FF"
                      />
                      <path
                        id="Vector_2"
                        d="M0.5 0V21.8077H22.3077V0H0.5ZM27.1538 0V4.84615H32V0H27.1538ZM32 4.84615V9.69231H27.1538V19.3846H32V14.5385H36.8462V4.84615H32ZM32 19.3846V26.6538H10.1923V31.5H5.34615V36.3462H15.0385V31.5H19.8846V36.3462H32V31.5H36.8462V36.3462H44.1154V31.5H48.9615V26.6538H36.8462V19.3846H32ZM48.9615 31.5V36.3462H63.5V31.5H58.6538V26.6538H53.8077V31.5H48.9615ZM5.34615 31.5V26.6538H0.5V31.5H5.34615ZM41.6923 0V21.8077H63.5V0H41.6923ZM5.34615 4.84615H17.4615V16.9615H5.34615V4.84615ZM46.5385 4.84615H58.6538V16.9615H46.5385V4.84615ZM7.76923 7.26923V14.5385H15.0385V7.26923H7.76923ZM48.9615 7.26923V14.5385H56.2308V7.26923H48.9615ZM27.1538 38.7692V43.6154H32V38.7692H27.1538ZM32 43.6154V48.4615H27.1538V58.1538H32V53.3077H41.6923V48.4615H46.5385V43.6154H51.3846V48.4615H46.5385V53.3077H41.6923V63H46.5385V58.1538H51.3846V53.3077H53.8077V58.1538H51.3846V63H56.2308V58.1538H58.6538V53.3077H63.5V43.6154H58.6538V38.7692H41.6923V43.6154H32ZM58.6538 58.1538V63H63.5V58.1538H58.6538ZM32 58.1538V63H36.8462V58.1538H32ZM0.5 41.1923V63H22.3077V41.1923H0.5ZM5.34615 46.0385H17.4615V58.1538H5.34615V46.0385ZM7.76923 48.4615V55.7308H15.0385V48.4615H7.76923Z"
                        fill="#FFEEDD"
                      />
                    </g>
                  </svg>
                </div>
                <button>Formulaire</button>
              </div>
              <ModuleInfo data={data} />
              <PresenceTable />
            </div>
    )
}