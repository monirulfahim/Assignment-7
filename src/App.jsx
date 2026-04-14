
import './App.css'

function App() {

  return (
    <>
                    {/* Navbar Section */}

      <section className='flex justify-between items-center pl-20 pr-20 pt-4 pb-4 bg-[#FFFFFF]'>
        <div> 
          <h1 className='text-3xl'><span className='text-[#1F2937] font-bold'>Keen</span><span className='text-[#244D3F] font-semibold'>Keeper</span></h1>
        </div>
        <div className='flex gap-2.5'> 
          <div> 
            <button className='bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5 cursor-pointer'><i className="fa-regular fa-house"></i> Home</button>
          </div>
          <div> 
            <button className='rounded-sm px-2.5 py-1.5 cursor-pointer'><i className="fa-regular fa-clock"></i> Timeline</button>
          </div>
          <div>
            <button className='flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5 cursor-pointer'>
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

                      {/* Banner Section */}

      <section className='bg-[#F8FAFC] pl-63 pr-63 pt-20 pb-20'>
        <div className='flex flex-col justify-center items-center mb-10'>
          <h1 className='text-5xl text-[#1F2937] font-bold mb-4'>Friends to keep close in your life</h1>
          <p className='text-[#64748B] mb-8 text-center'>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
          </p>
          <button className='bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5 pointer-cursor cursor-pointer'><i class="fa-solid fa-plus"></i> Add a Friend</button>
        </div>
        <div className='flex justify-around items-center '>
            <div className='bg-[#FFFFFF] text-center px-11 py-8 rounded-lg shadow-sm'> 
                <h3 className='text-2xl text-[#244D3F] font-semibold mb-0.5'>10</h3>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div className='bg-[#FFFFFF] text-center px-15 py-8 rounded-lg shadow-sm'>
              <h3 className='text-2xl text-[#244D3F] font-semibold mb-0.5'>3</h3>
              <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className='bg-[#FFFFFF] text-center px-10 py-8 rounded-lg shadow-sm'>
              <h3 className='text-2xl text-[#244D3F] font-semibold mb-0.5'>6</h3>
              <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className='bg-[#FFFFFF] text-center px-4 py-8 rounded-lg shadow-sm'>
              <h3 className='text-2xl text-[#244D3F] font-semibold mb-0.5'>12</h3>
              <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
