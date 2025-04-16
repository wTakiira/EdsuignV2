import { useState } from 'react'
import './App.css'

function Form() {
  const [count, setCount] = useState(0)

  return (
    <div className="size-lf-stretch py-24 inline-flex flex-col justify-start items-center gap-12 overflow-hidden">
  <div className="size- inline-flex justify-center items-center gap-12">
    <div className="justify-start text-black text-6xl font-bold font-['Poppins'] leading-[64px]">Formulaire de satisfaction</div>
    <div className="size-20 relative bg-Primary-Bis rounded-sm overflow-hidden">
      <div className="size-16 left-[7px] top-[9px] absolute bg-Primary-Bis">
        <div className="size-16 left-0 top-0 absolute bg-Secondary-Bis" />
      </div>
    </div>
  </div>
  <div data-property-1="primary button" className="size- px-3.5 py-4 bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
    <div className="text-center justify-center text-Tertiary text-2xl font-bold font-['Poppins'] leading-none">Partager à tous</div>
    <div data-size="48" className="size-6 relative border-Tertiary overflow-hidden">
      <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-Tertiary" />
    </div>
  </div>
  <div className="w-[769px] h-36 max-w-[950px] p-10 rounded-2xl outline outline-1 outline-offset-[-1px] outline-Primary-Bis inline-flex justify-between items-center">
    <div className="w-[685px] self-stretch flex justify-between items-center">
      <div className="flex-1 flex justify-start items-center gap-6">
        <div className="size-16 relative overflow-hidden">
          <div className="size-16 left-0 top-0 absolute" />
          <div className="w-12 h-14 left-[8.25px] top-[5.50px] absolute bg-Primary" />
        </div>
        <div className="w-80 h-9 justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">CSS</div>
      </div>
      <div className="size- flex justify-start items-center gap-6">
        <div className="size-16 relative overflow-hidden">
          <div className="size-16 left-0 top-0 absolute" />
          <div className="size-11 left-[11px] top-[11px] absolute bg-Primary" />
        </div>
        <div className="w-40 h-9 justify-center text-black text-3xl font-semibold font-['Poppins'] leading-none">B3 Dev</div>
      </div>
    </div>
  </div>
  <div className="size- flex flex-col justify-center items-center gap-4">
    <div data-property-1="progress list" className="w-[1020px] h-11 relative">
      <div className="w-[1020px] h-12 left-0 top-0 absolute bg-Primary rounded-tl-2xl rounded-tr-2xl border-b-4 border-Tertiary">
        <div className="w-[980px] h-7 left-[20px] top-[20px] absolute text-center justify-start"></div>
      </div>
      <div className="w-[936px] h-5 left-[42px] top-[14px] absolute">
        <div className="left-[34px] top-0 absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Elève</div>
        <div className="left-[439px] top-[-4px] absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Complétion</div>
        <div className="left-[883px] top-0 absolute text-center justify-start text-Tertiary text-xs font-semibold font-['Montserrat'] leading-tight">Actions</div>
      </div>
    </div>
    <div data-property-1="formulaire" className="w-[999px] h-7 relative">
      <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
        <div data-image="Yes" data-property-2="24px" className="size-6 relative">
          <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
          <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
        </div>
        <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
      </div>
      <div data-property-1="primary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
        <div className="text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Partager</div>
        <div data-size="48" className="size-3.5 relative border-Tertiary overflow-hidden">
          <div className="w-2.5 h-3 left-[2.50px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Tertiary" />
        </div>
      </div>
      <div className="w-[566px] h-6 left-[228px] top-[3px] absolute">
        <div className="w-[566px] h-6 left-0 top-0 absolute bg-Secondary-Bis rounded-2xl" />
        <div className="w-80 h-6 left-0 top-0 absolute bg-Primary rounded-2xl" />
        <div className="left-[16px] top-[2px] absolute justify-start text-white text-base font-normal font-['Poppins'] leading-none">55% complété</div>
      </div>
    </div>
    <div data-property-1="formulaire" className="w-[999px] h-7 relative">
      <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
        <div data-image="Yes" data-property-2="24px" className="size-6 relative">
          <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
          <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
        </div>
        <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
      </div>
      <div data-property-1="primary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
        <div className="text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Partager</div>
        <div data-size="48" className="size-3.5 relative border-Tertiary overflow-hidden">
          <div className="w-2.5 h-3 left-[2.50px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Tertiary" />
        </div>
      </div>
      <div className="w-[566px] h-6 left-[228px] top-[3px] absolute">
        <div className="w-[566px] h-6 left-0 top-0 absolute bg-Secondary-Bis rounded-2xl" />
        <div className="w-80 h-6 left-0 top-0 absolute bg-Primary rounded-2xl" />
        <div className="left-[16px] top-[2px] absolute justify-start text-white text-base font-normal font-['Poppins'] leading-none">55% complété</div>
      </div>
    </div>
    <div data-property-1="formulaire" className="w-[999px] h-7 relative">
      <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
        <div data-image="Yes" data-property-2="24px" className="size-6 relative">
          <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
          <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
        </div>
        <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
      </div>
      <div data-property-1="primary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
        <div className="text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Partager</div>
        <div data-size="48" className="size-3.5 relative border-Tertiary overflow-hidden">
          <div className="w-2.5 h-3 left-[2.50px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Tertiary" />
        </div>
      </div>
      <div className="w-[566px] h-6 left-[228px] top-[3px] absolute">
        <div className="w-[566px] h-6 left-0 top-0 absolute bg-Secondary-Bis rounded-2xl" />
        <div className="w-80 h-6 left-0 top-0 absolute bg-Primary rounded-2xl" />
        <div className="left-[16px] top-[2px] absolute justify-start text-white text-base font-normal font-['Poppins'] leading-none">55% complété</div>
      </div>
    </div>
    <div data-property-1="formulaire" className="w-[999px] h-7 relative">
      <div className="size- left-0 top-[3px] absolute inline-flex justify-start items-center gap-2.5">
        <div data-image="Yes" data-property-2="24px" className="size-6 relative">
          <div className="size-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
          <img className="w-6 h-7 left-0 top-0 absolute" src="https://placehold.co/24x30" />
        </div>
        <div className="justify-start text-blue-600 text-sm font-normal font-['Montserrat'] leading-tight">Sarah Eastern</div>
      </div>
      <div data-property-1="primary button" className="size- px-1.5 py-2 left-[890px] top-[-1px] absolute bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
        <div className="text-center justify-center text-Tertiary text-base font-semibold font-['Poppins'] leading-none">Partager</div>
        <div data-size="48" className="size-3.5 relative border-Tertiary overflow-hidden">
          <div className="w-2.5 h-3 left-[2.50px] top-[1.25px] absolute outline outline-1 outline-offset-[-0.50px] outline-Tertiary" />
        </div>
      </div>
      <div className="w-[566px] h-6 left-[228px] top-[3px] absolute">
        <div className="w-[566px] h-6 left-0 top-0 absolute bg-Secondary-Bis rounded-2xl" />
        <div className="w-80 h-6 left-0 top-0 absolute bg-Primary rounded-2xl" />
        <div className="left-[16px] top-[2px] absolute justify-start text-white text-base font-normal font-['Poppins'] leading-none">55% complété</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Form
