import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className="w-[1512px] h-[982px] px-24 py-5 relative bg-white inline-flex justify-start items-center gap-5 overflow-hidden">
      <NavBar />
        <div className="w-44 self-stretch p-5 bg-Secondary rounded-2xl inline-flex flex-col justify-start items-center gap-10">
          <div className="w-32 text-center justify-start text-Quaternary text-xs font-semibold font-['Poppins'] leading-none">Autres dates du modules</div>
          <div className="size- flex flex-col justify-start items-start gap-5">
            <div data-property-1="others" className="w-36 p-5 bg-Secondary-Bis rounded-2xl flex flex-col justify-center items-start gap-2.5">
              <div data-size="48" className="size-7 relative overflow-hidden">
                <div className="size-6 left-[2.33px] top-[2.33px] absolute outline outline-2 outline-offset-[-1px] outline-Quaternary" />
              </div>
              <div className="text-center justify-start text-Quaternary text-xl font-semibold font-['Poppins'] leading-none">07/10/2025</div>
            </div>
            <div data-property-1="others" className="w-36 p-5 bg-Secondary-Bis rounded-2xl flex flex-col justify-center items-start gap-2.5">
              <div data-size="48" className="size-7 relative overflow-hidden">
                <div className="size-6 left-[2.33px] top-[2.33px] absolute outline outline-2 outline-offset-[-1px] outline-Quaternary" />
              </div>
              <div className="text-center justify-start text-Quaternary text-xl font-semibold font-['Poppins'] leading-none">09/10/2025</div>
            </div>
            <div data-property-1="current" className="w-36 p-5 bg-Primary rounded-2xl flex flex-col justify-center items-start gap-2.5">
              <div data-size="48" className="size-7 relative overflow-hidden">
                <div className="size-6 left-[2.33px] top-[2.33px] absolute outline outline-2 outline-offset-[-1px] outline-Tertiary" />
              </div>
              <div className="text-center justify-start text-Tertiary text-xl font-semibold font-['Poppins'] leading-none">12/10/2025</div>
            </div>
            <div data-property-1="others" className="w-36 p-5 bg-Secondary-Bis rounded-2xl flex flex-col justify-center items-start gap-2.5">
              <div data-size="48" className="size-7 relative overflow-hidden">
                <div className="size-6 left-[2.33px] top-[2.33px] absolute outline outline-2 outline-offset-[-1px] outline-Quaternary" />
              </div>
              <div className="text-center justify-start text-Quaternary text-xl font-semibold font-['Poppins'] leading-none">16/10/2025</div>
            </div>
          </div>
        </div>
        <div className="flex-1 self-stretch py-24 flex justify-center items-start gap-12 flex-wrap content-start overflow-hidden">
          <div className="size- flex justify-center items-center gap-12">
            <div className="justify-start text-black text-6xl font-bold font-['Poppins'] leading-[64px]">Module 2 : Framework CSS</div>
            <div className="size-20 relative bg-Primary-Bis rounded-sm overflow-hidden">
              <div className="size-16 left-[7px] top-[9px] absolute bg-Primary-Bis">
                <div className="size-16 left-0 top-0 absolute bg-Secondary-Bis" />
              </div>
            </div>
          </div>
          <div className="w-[1020px] py-3 inline-flex flex-col justify-center items-center gap-9">
            <div data-property-1="intern list" className="self-stretch h-11 relative">
              <div className="w-[1020px] h-12 left-0 top-0 absolute bg-Primary rounded-tl-2xl rounded-tr-2xl border-b-4 border-Tertiary">
                <div className="w-[980px] h-7 left-[20px] top-[20px] absolute text-center justify-start"></div>
              </div>
              <div className="w-[936px] h-5 left-[42px] top-[14px] absolute">
                <div className="left-[34px] top-0 absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Elève</div>
                <div className="left-[212px] top-0 absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Présence</div>
                <div className="left-[414px] top-0 absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Heure de signature</div>
                <div className="left-[678px] top-0 absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Signature</div>
                <div className="left-[883px] top-0 absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Actions</div>
              </div>
            </div>
            <div className="w-[990px] flex flex-col justify-center items-center gap-10">
              <div data-property-1="present" className="self-stretch h-7 relative">
                <div className="left-[482px] top-[5px] absolute text-center justify-start text-black text-sm font-normal font-['Montserrat'] leading-tight">09:01</div>
                <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
                  <div data-image="Yes" data-property-2="24px" className="size-6 relative">
                    <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                    <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
                  </div>
                  <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
                </div>
                <div data-property-1="present" className="w-20 h-7 px-2 py-0.5 left-[232px] top-0 absolute bg-emerald-50 rounded-sm inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-green-600 text-base font-semibold font-['Poppins'] leading-none">Présent</div>
                </div>
                <div data-property-1="signed" className="w-16 h-7 left-[710px] top-[1px] absolute">
                  <div className="w-16 h-7 left-0 top-0 absolute outline outline-1 outline-offset-[-0.50px] outline-black" />
                </div>
                <div data-property-1="secondary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Secondary rounded-sm inline-flex justify-start items-center gap-2.5">
                  <div className="w-16 self-stretch text-center justify-center text-Quaternary text-base font-semibold font-['Poppins'] leading-none">Annuler</div>
                  <div data-size="48" className="size-3.5 relative border-Quaternary overflow-hidden">
                    <div className="size-3 left-[1.25px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Quaternary" />
                  </div>
                </div>
              </div>
              <div data-property-1="Absent" className="self-stretch h-7 relative">
                <div className="left-[488px] top-[5px] absolute text-center justify-start text-black text-sm font-normal font-['Montserrat'] leading-tight">--:--</div>
                <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
                  <div data-image="Yes" data-property-2="24px" className="size-6 relative">
                    <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                    <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
                  </div>
                  <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
                </div>
                <div data-property-1="Absent" className="w-20 h-7 px-2 py-0.5 left-[232px] top-0 absolute bg-red-500/20 rounded-sm inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-red-500 text-base font-semibold font-['Poppins'] leading-none">Absent</div>
                </div>
                <div data-property-1="not signed" className="size- py-[3px] left-[710px] top-[1px] absolute inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-20 h-5 text-center justify-center text-black text-base font-normal font-['Poppins'] leading-none">Pas de signature</div>
                </div>
                <div data-property-1="primary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
                  <div className="w-16 self-stretch text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Signer</div>
                  <div data-size="48" className="size-3.5 relative border-Tertiary overflow-hidden">
                    <div className="size-3 left-[1.25px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Tertiary" />
                  </div>
                </div>
              </div>
              <div data-property-1="Absent" className="self-stretch h-7 relative">
                <div className="left-[488px] top-[5px] absolute text-center justify-start text-black text-sm font-normal font-['Montserrat'] leading-tight">--:--</div>
                <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
                  <div data-image="Yes" data-property-2="24px" className="size-6 relative">
                    <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                    <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
                  </div>
                  <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
                </div>
                <div data-property-1="Absent" className="w-20 h-7 px-2 py-0.5 left-[232px] top-0 absolute bg-red-500/20 rounded-sm inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-red-500 text-base font-semibold font-['Poppins'] leading-none">Absent</div>
                </div>
                <div data-property-1="not signed" className="size- py-[3px] left-[710px] top-[1px] absolute inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-20 h-5 text-center justify-center text-black text-base font-normal font-['Poppins'] leading-none">Pas de signature</div>
                </div>
                <div data-property-1="primary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
                  <div className="w-16 self-stretch text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Signer</div>
                  <div data-size="48" className="size-3.5 relative border-Tertiary overflow-hidden">
                    <div className="size-3 left-[1.25px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Tertiary" />
                  </div>
                </div>
              </div>
              <div data-property-1="attente" className="self-stretch h-7 relative">
                <div className="left-[488px] top-[5px] absolute text-center justify-start text-black text-sm font-normal font-['Montserrat'] leading-tight">--:--</div>
                <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
                  <div data-image="Yes" data-property-2="24px" className="size-6 relative">
                    <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                    <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
                  </div>
                  <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
                </div>
                <div data-property-1="attente" className="w-20 h-7 px-2 py-0.5 left-[232px] top-0 absolute bg-zinc-800/50 rounded-sm inline-flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Attente</div>
                </div>
                <div data-property-1="not signed" className="size- py-[3px] left-[710px] top-[1px] absolute inline-flex flex-col justify-center items-center gap-2.5">
                  <div className="w-20 h-5 text-center justify-center text-black text-base font-normal font-['Poppins'] leading-none">Pas de signature</div>
                </div>
                <div data-property-1="primary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
                  <div className="w-16 self-stretch text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Signer</div>
                  <div data-size="48" className="size-3.5 relative border-Tertiary overflow-hidden">
                    <div className="size-3 left-[1.25px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Tertiary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-20 h-9 left-[510px] top-[617px] absolute" /> */}
        {/* <div className="w-14 h-[942px] px-3 py-5 left-[20px] top-[20px] absolute bg-Primary rounded-2xl inline-flex flex-col justify-start items-center gap-2.5">
          <div data-size="48" className="size-8 relative bg-Primary rounded-sm overflow-hidden">
            <div className="w-6 h-7 left-[4px] top-[2.76px] absolute outline outline-2 outline-offset-[-1px] outline-Secondary" />
          </div>
        </div> */}
      </div>
  )
}

export default App
