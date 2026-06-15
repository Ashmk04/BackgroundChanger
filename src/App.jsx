import {useState} from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="width-full h-screen duration-200"
   style={{backgroundColor : color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-[#0F172A] py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full mx-3 shadow-xl" style={{backgroundColor : "#E8DFF5"}} onClick={() => setColor("#E8DFF5")}>Lavender Bliss</button>
        <button className="outline-none px-4 py-1 rounded-full mx-3 shadow-xl" style={{backgroundColor : "#FCE1D4"}} onClick={() => setColor("#FCE1D4")}>Soft Apricot</button>
        <button className="outline-none px-4 py-1 rounded-full mx-3 shadow-xl" style={{backgroundColor : "#E2F0CB"}} onClick={() => setColor("#E2F0CB")}>Mint Cream</button>
        <button className="outline-none px-4 py-1 rounded-full mx-3 shadow-xl" style={{backgroundColor : "#B5E2FA"}} onClick={() => setColor("#B5E2FA")}>Baby Blue</button>
        <button className="outline-none px-4 py-1 rounded-full mx-3 shadow-xl" style={{backgroundColor : "#F7CAD0"}} onClick={() => setColor("#F7CAD0")}>Blush Pink</button>
        <button className="outline-none px-4 py-1 rounded-full mx-3 shadow-xl" style={{backgroundColor : "#D0E1D4"}} onClick={() => setColor("#D0E1D4")}>Sage Mist</button>
        <button className="outline-none px-4 py-1 rounded-full mx-3 shadow-xl" style={{backgroundColor : "#E0E7FF"}} onClick={() => setColor("#E0E7FF")}>Periwinkle Tint</button>
      </div>
    </div>
   </div>
   
  )
}

export default App
