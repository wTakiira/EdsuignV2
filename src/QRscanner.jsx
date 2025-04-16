import { useState } from 'react'
import './App.css'

function QRscan() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[1371px] h-[773px] relative bg-Primary-Bis rounded-2xl overflow-hidden">
    <div className="size-72 left-[535px] top-[236px] absolute bg-Secondary rounded-2xl" />
    <div data-property-1="close" className="w-9 h-7 left-[79px] top-[50px] absolute bg-Secondary rounded-sm overflow-hidden">
      <div className="size-2 left-[15px] top-[10px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Quaternary" />
    </div>
    <div className="left-[489px] top-[148px] absolute justify-center text-black text-4xl font-bold font-['Poppins'] leading-none">Scannez le QR code</div>
    <div className="w-56 h-64 left-[570.34px] top-[260px] absolute bg-Primary" />
  </div>
  )
}

export default QRscan
