import { useState } from 'react'
import './App.css'

function Sign() {
  const [count, setCount] = useState(0)

  return (
      <div className="w-[1376px] self-stretch inline-flex flex-col justify-center items-center gap-10">
        <div className="self-stretch inline-flex justify-center items-start gap-10">
          <div className="flex-1 self-stretch inline-flex flex-col justify-start items-center gap-10">
            <div className="self-stretch justify-center text-black text-6xl font-bold font-['Poppins'] leading-[64px]">Module 2: Framework CSS</div>
            <img className="self-stretch flex-1 rounded-2xl" src="https://placehold.co/668x103" />
            <div data-property-1="Default" className="self-stretch h-14 px-5 bg-Primary-Bis rounded-2xl inline-flex justify-between items-center">
              <div className="w-72 h-7 justify-center text-neutral-400 text-3xl font-semibold font-['Poppins'] leading-none">Je suis ...</div>
              <div className="w-14 h-8 bg-white" />
            </div>
          </div>
          <div className="flex-1 px-10 py-5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-Primary-Bis inline-flex flex-col justify-start items-start gap-5">
            <div className="w-96 inline-flex justify-start items-center gap-6">
              <div className="size-16 relative overflow-hidden">
                <div className="size-16 left-0 top-0 absolute" />
                <div className="w-12 h-14 left-[8.25px] top-[5.50px] absolute bg-Primary" />
              </div>
              <div className="w-80 h-9 justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">Lundi 14 Avril 2025</div>
            </div>
            <div className="size- inline-flex justify-start items-center gap-6">
              <div className="size-16 relative overflow-hidden">
                <div className="size-16 left-0 top-0 absolute" />
                <div className="size-11 left-[11px] top-[11px] absolute bg-Primary" />
              </div>
              <div className="w-40 h-9 justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">Eric Mai</div>
            </div>
            <div className="w-80 inline-flex justify-start items-center gap-6">
              <div className="size-16 relative overflow-hidden">
                <div className="size-16 left-0 top-0 absolute" />
                <div className="size-14 left-[5.50px] top-[5.50px] absolute bg-Primary" />
              </div>
              <div className="justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">13h30 - 17h00</div>
            </div>
            <div className="size- inline-flex justify-start items-center gap-6">
              <div className="size-16 relative overflow-hidden">
                <div className="size-16 left-0 top-0 absolute" />
                <div className="w-11 h-14 left-[11px] top-[5.50px] absolute bg-Primary" />
              </div>
              <div className="justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">Salle Epicéa</div>
            </div>
          </div>
        </div>
        <div data-property-1="Default" className="self-stretch h-96 relative rounded-2xl outline outline-[3px] outline-offset-[-3px] outline-Secondary">
          <div className="w-11 h-10 left-[1293.98px] top-[323.38px] absolute bg-Primary" />
          <div className="left-[26.38px] top-[27px] absolute justify-center text-placeholder text-xl font-semibold font-['Poppins'] leading-none">Veuillez signer ci-dessous :</div>
        </div>
        <div className="size- inline-flex justify-start items-start gap-10">
          <div data-property-1="Not Signed" className="size- px-3.5 py-4 bg-Secondary rounded-sm flex justify-start items-center gap-2.5">
            <div className="text-center justify-center text-Quaternary text-2xl font-bold font-['Poppins'] leading-none">Effacer</div>
            <div data-size="48" className="size-6 relative border-Quaternary overflow-hidden">
              <div className="size-3 left-[6px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Quaternary" />
            </div>
          </div>
          <div data-property-1="Not Signed" className="size- px-3.5 py-4 bg-Primary rounded-sm flex justify-start items-center gap-2.5">
            <div className="text-center justify-center text-Tertiary text-2xl font-bold font-['Poppins'] leading-none">Valider</div>
            <div data-size="48" className="size-6 relative border-Tertiary overflow-hidden">
              <div className="w-4 h-2.5 left-[4px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Tertiary" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sign
