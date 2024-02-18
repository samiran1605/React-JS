import { useState } from "react"


function App() {
  const [color, setColor] = useState('#1F2544')

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-[#474F7A] px-3 py-2 rounded-2xl text-white">

            <button className="outline-none px-4 py-4 rounded-full duration-200" style={{backgroundColor: "#D04848"}} onClick={()=>setColor("#D04848")} onMouseOver={(e) => { e.target.style.filter = 'brightness(1.5)' }}
            onMouseOut={(e) => { e.target.style.filter = 'none' }}>Red</button>

            <button className="outline-none px-4 py-4 rounded-full" style={{backgroundColor: "#0C2D57"}} onClick={()=>setColor("#0C2D57")} onMouseOver={(e) => { e.target.style.filter = 'brightness(1.5)' }}
            onMouseOut={(e) => { e.target.style.filter = 'none' }}>Blue</button>

            <button className="outline-none px-4 py-4 rounded-full" style={{backgroundColor: "#12372A"}} onClick={()=>setColor("#12372A")} onMouseOver={(e) => { e.target.style.filter = 'brightness(1.5)' }}
            onMouseOut={(e) => { e.target.style.filter = 'none' }}>Green</button>

            <button className="outline-none px-4 py-4 rounded-full" style={{backgroundColor: "#561C24"}} onClick={()=>setColor("#561C24")} onMouseOver={(e) => { e.target.style.filter = 'brightness(1.5)' }}
            onMouseOut={(e) => { e.target.style.filter = 'none' }}>Brown</button>

            <button className="outline-none px-4 py-4 rounded-full" style={{backgroundColor: "#910A67"}} onClick={()=>setColor("#910A67")} onMouseOver={(e) => { e.target.style.filter = 'brightness(1.5)' }}
            onMouseOut={(e) => { e.target.style.filter = 'none' }}>Pink</button>

            <button className="outline-none px-4 py-4 rounded-full" style={{backgroundColor: "#080202"}} onClick={()=>setColor("#080202")} onMouseOver={(e) => { e.target.style.filter = 'saturate(200%)' }}
            onMouseOut={(e) => { e.target.style.filter = 'none' }}>Black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
