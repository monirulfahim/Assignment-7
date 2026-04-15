import friendsData from './friends.json';
import './App.css'
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Section */}

      <section className='flex justify-between items-center pl-20 pr-20 pt-5 pb-5 bg-[#FFFFFF] max-[576px]:pt-5 max-[576px]:pr-4 max-[576px]:pb-6 max-[576px]:pl-4 text-center max-[768px]:pt-5 max-[768px]:pr-6 max-[768px]:pb-6 max-[768px]:pl-6'>
        <div>
          <h1 className='text-3xl'><span className='text-[#1F2937] font-bold'>Keen</span><span className='text-[#244D3F] font-semibold'>Keeper</span></h1>
        </div>
        <div className='max-[576px]:hidden flex gap-2.5'>
          <div>
            <button className='bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5 cursor-pointer'><i className="fa-regular fa-house"></i> Home</button>
          </div>
          <div>
            <button className='rounded-sm px-2.5 py-1.5 cursor-pointer'><i className="fa-regular fa-clock"></i> Timeline</button>
          </div>
          <div>
            <button className='flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5 cursor-pointer'>
              <div>
                <img src="./public/images/Vector.png" alt="" />
              </div>
              <div>
                Stats
              </div>
            </button>
          </div>
        </div>
        <div className=''>
          {
            !isOpen ? (
              <button className='text-3xl hidden max-[576px]:block' onClick={() => setIsOpen(true)}>
                <i className="fa-solid fa-bars"></i>
              </button>
            ) : (
              <div className='flex flex-col gap-2 items-end'>
                <button 
                  onClick={() => setIsOpen(false)}
                  className='bg-[#244D3F] text-white px-2.5 py-1.5 rounded'
                >
                  Home
                </button>

                <button onClick={() => setIsOpen(false)}>
                  Timeline
                </button>

                <button 
                  onClick={() => setIsOpen(false)}
                  className='flex items-center gap-1'
                >
                  <img src="/images/Vector.png" alt="" />
                  Stats
                </button>
              </div>
            )
          }
        </div>
      </section>


      {/* Banner Section */}

      <section className='bg-[#F8FAFC] pl-50 pr-50 pt-20 pb-18 max-[576px]:pt-10 max-[576px]:pr-6 max-[576px]:pb-6 max-[576px]:pl-6 text-center max-[768px]:pt-10 max-[768px]:pr-6 max-[768px]:pb-6 max-[768px]:pl-6'>
        <div className='flex flex-col justify-center items-center mb-11'>
          <h1 className='text-5xl text-[#1F2937] font-bold mb-4 max-[576px]:text-2xl'>Friends to keep close in your life</h1>
          <p className='text-[#64748B] mb-8 text-center'>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
          </p>
          <button className='bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5 pointer-cursor cursor-pointer'><i className="fa-solid fa-plus"></i> Add a Friend</button>
        </div>
        <div className='flex justify-center gap-9 items-center max-[576px]:flex-col max-[576px]:gap-6 max-[576px]:mt-10 max-[768px]:gap-6'>
          <div className='bg-[#FFFFFF] text-center px-12 py-8 rounded-lg shadow-sm max-[768px]:px-7 max-[768px]:py-4'>
            <h3 className='text-3xl text-[#244D3F] font-semibold mb-0.5'>8</h3>
            <p className='text-[#64748B]'>Total Friends</p>
          </div>
          <div className='bg-[#FFFFFF] text-center px-16 py-8 rounded-lg shadow-sm max-[768px]:px-10 max-[768px]:py-4'>
            <h3 className='text-3xl text-[#244D3F] font-semibold mb-0.5'>3</h3>
            <p className='text-[#64748B]'>On Track</p>
          </div>
          <div className='bg-[#FFFFFF] text-center px-11 py-8 rounded-lg shadow-sm max-[768px]:px-6 max-[768px]:py-4'>
            <h3 className='text-3xl text-[#244D3F] font-semibold mb-0.5'>4</h3>
            <p className='text-[#64748B]'>Need Attention</p>
          </div>
          <div className='bg-[#FFFFFF] text-center px-5 py-8 rounded-lg shadow-sm max-[576px]:px-1.5 max-[768px]:px-3 max-[768px]:py-4'>
            <h3 className='text-3xl text-[#244D3F] font-semibold mb-0.5'>12</h3>
            <p className='text-[#64748B]'>Interactions This Month</p>
          </div>
        </div>
      </section>

      {/* Friends card Section */}

      <section className='pl-45 pr-45 pt-5 pb-20 bg-[#F8FAFC] max-[576px]:pt-10 max-[576px]:pr-6 max-[576px]:pb-6 max-[576px]:pl-6 max-[768px]:pt-10 max-[768px]:pr-6 max-[768px]:pb-6 max-[768px]:pl-6'>
        <div className='text-3xl font-semibold mb-5'>
          <h1>My Friends</h1>
        </div>
        <div className='grid grid-cols-4 items-center justify-center gap-10 max-[576px]:grid-cols-1 max-[576px]:gap-5 max-[768px]:grid-cols-2 max-[768px]:gap-7'>
          {friendsData.map(friends => (
            <div key={friends.id} className='flex flex-col gap-3 justify-center items-center p-8 rounded-lg bg-[#FFFFFF] shadow h-80'>
              <div className='mb-2'>
                <img src={friends.image} alt="" />
              </div>
              <div>
                <h3 className='text-xl font-semibold text-center text-[#1F2937]'>{friends.name}</h3>
              </div>
              <div>
                <p className='text-[#64748B]'>{friends.daysAgo}</p>
              </div>
              <div className='mb-3'>
                <span className='bg-[#CBFADB] rounded-[100px] text-[#244D3F] px-3 py-1 font-semibold'>{friends.category}</span>
              </div>
              <div className={`className = rounded-[100px] text-[#FFFFFF] px-3 py-1 font-semibold 
                  ${friends.status === "Almost Due" ? "bg-[#EFAD44] text-[#FFFFFF]" : ""}
                  ${friends.status === "Overdue" ? "bg-[#EF4444] text-[#FFFFFF]" : ""}
                  ${friends.status === "On-Track" ? "bg-[#244D3F] text-[#FFFFFF]" : ""}
                `}>
                <span>{friends.status}</span>
              </div>
            </div>
          ))
          }
        </div>
      </section>


      {/* Footer Section */}
      <section className='bg-[#244D3F] pl-60 pr-60 pt-20 pb-8 max-[576px]:pt-10 max-[576px]:pr-6 max-[576px]:pb-6 max-[576px]:pl-6 max-[768px]:pt-10 max-[768px]:pr-6 max-[768px]:pb-6 max-[768px]:pl-6'>
        <div className='flex flex-col justify-center items-center gap-4 text-center'>
          <div>
            <img src="images/logo-xl.png" alt="" />
          </div>
          <div className='text-[#FFFFFF]'>
            <p className='mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-xl'>Social Links</p>
          </div>
          <div className='flex gap-4'>
            <div>
              <img src="images/instagram.png" alt="" />
            </div>
            <div>
              <img src="images/facebook.png" alt="" />
            </div>
            <div>
              <img src="images/twitter.png" alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr className='pt-5 opacity-30 text-[#1A8862]' />
        <div className='flex justify-between items-center mt-6 text-[#FAFAFA] max-[576px]:flex-col max-[576px]:gap-10 max-[768px]:flex-col max-[768px]:gap-11'>
          <div>© 2026 KeenKeeper. All rights reserved.</div>
          <div className='flex gap-7 max-[576px]:gap-5 max-[768px]:gap-10'>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
