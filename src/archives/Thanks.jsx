import { useState } from 'react'
import './App.css'

function Thanks() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[1512px] h-[982px] px-[543px] py-24 bg-white inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
    <div className="size- inline-flex justify-start items-center gap-2.5 flex-wrap content-center">
      <div className="justify-center text-black text-6xl font-bold font-['Poppins'] leading-[64px]">Merci pour votre précieux retour </div>
      <div data-size="48" className="size-12 relative overflow-hidden">
        <div className="size-10 left-[4px] top-[4px] absolute outline outline-4 outline-offset-[-2px] outline-Icon-Default-Default" />
      </div>
    </div>
    <div data-property-1="primary button" className="size- px-3.5 py-4 bg-Primary rounded-sm inline-flex justify-start items-center gap-2.5">
      <div className="text-center justify-center text-Tertiary text-2xl font-bold font-['Poppins'] leading-none">Terminer</div>
      <div data-size="48" className="size-6 relative border-Tertiary overflow-hidden">
        <div className="w-4 h-2.5 left-[4px] top-[6px] absolute outline outline-4 outline-offset-[-2px] outline-Tertiary" />
      </div>
    </div>
  </div>
  )
}

export default Thanks
