import { useState } from 'react'
import './App.css'

function FormStud() {
  const [count, setCount] = useState(0)

  return (
    <div className="size-lf-stretch pt-24 inline-flex flex-col justify-start items-center gap-10">
  <div className="text-center justify-center text-black text-6xl font-bold font-['Poppins'] leading-[64px]">Formulaire de satisfaction</div>
  <div className="w-[950px] h-60 max-w-[950px] p-10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-Primary-Bis inline-flex justify-between items-center">
    <div className="w-96 self-stretch inline-flex flex-col justify-between items-start">
      <div className="self-stretch inline-flex justify-start items-center gap-6">
        <div data-size="48" className="size-12 relative overflow-hidden">
          <div className="w-10 h-9 left-[4px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Primary" />
        </div>
        <div className="w-80 h-9 justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">Framework CSS</div>
      </div>
      <div className="size- inline-flex justify-start items-center gap-6">
        <div data-size="48" className="size-12 relative overflow-hidden">
          <div className="w-11 h-9 left-[2px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Primary" />
        </div>
        <div className="justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">Professeur</div>
      </div>
    </div>
    <div className="w-80 self-stretch inline-flex flex-col justify-between items-start">
      <div className="self-stretch inline-flex justify-start items-center gap-6">
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
  <div data-property-1="star" className="w-60 flex flex-col justify-center items-start gap-5">
    <div className="justify-center text-Primary text-xl font-semibold font-['Poppins'] leading-none">Question n°1</div>
    <div className="w-60 h-10 relative" />
  </div>
  <div data-property-1="input" className="w-60 flex flex-col justify-center items-start gap-5">
    <div className="justify-center text-Primary text-xl font-semibold font-['Poppins'] leading-none">Question n°2</div>
    <div data-property-1="empty" className="w-72 h-20 relative rounded-sm outline outline-[3px] outline-offset-[-1.50px] outline-Secondary overflow-hidden">
      <div className="left-[9px] top-[30px] absolute justify-center text-placeholder text-xl font-semibold font-['Poppins'] leading-none">Saisissez votre réponse ...</div>
    </div>
  </div>
  <div data-property-1="star" className="w-60 flex flex-col justify-center items-start gap-5">
    <div className="justify-center text-Primary text-xl font-semibold font-['Poppins'] leading-none">Questionn°3</div>
    <div className="w-60 h-10 relative" />
  </div>
  <div data-property-1="empty" data-show="true" className="w-[1252px] h-96 relative rounded-2xl outline outline-[3px] outline-offset-[-3px] outline-Secondary">
    <div className="size-10 left-[1177.38px] top-[323.38px] absolute bg-Primary" />
    <div className="left-[24px] top-[27px] absolute justify-center text-placeholder text-xl font-semibold font-['Poppins'] leading-none">Veuillez signer ci-dessous :</div>
  </div>
  <div className="size- inline-flex justify-start items-start gap-10">
    <div data-property-1="secondary button" className="size- px-3.5 py-4 bg-Secondary rounded-sm flex justify-start items-center gap-2.5">
      <div className="text-center justify-center text-Quaternary text-2xl font-bold font-['Poppins'] leading-none">Effacer</div>
      <div data-size="48" className="size-6 relative border-Tertiary overflow-hidden">
        <div className="size-3 left-[6px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Quaternary" />
      </div>
    </div>
    <div data-property-1="primary button" className="size- px-3.5 py-4 bg-Primary rounded-sm flex justify-start items-center gap-2.5">
      <div className="text-center justify-center text-Tertiary text-2xl font-bold font-['Poppins'] leading-none">Valider</div>
      <div data-size="48" className="size-6 relative border-Tertiary overflow-hidden">
        <div className="w-4 h-2.5 left-[4px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Tertiary" />
      </div>
    </div>
  </div>
</div>
  )
}

export default FormStud
