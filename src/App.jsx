
import './App.css'

function App() {

  return (
    <>
      <section className='flex justify-between items-center pl-20 pr-20 pt-4 pb-4 bg-[#FFFFFF]'>
        <div> 
          <h1 className='text-3xl'><span className='text-[#1F2937] font-bold'>Keen</span><span className='text-[#244D3F] font-semibold'>Keeper</span></h1>
        </div>
        <div className='flex gap-2.5'> 
          <div> 
            <button className='bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5'><i className="fa-regular fa-house"></i> Home</button>
          </div>
          <div> 
            <button className='rounded-sm px-2.5 py-1.5'><i className="fa-regular fa-clock"></i> Timeline</button>
          </div>
          <div>
            <button className='flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5'>
              <div> 
                <img src="../public/images/Vector.png" alt="" />
              </div>
              <div>
                   Stats
              </div>
            </button>
          </div>    
        </div>
      </section>
    </>
  )
}

export default App
