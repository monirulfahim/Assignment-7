import friendsData from './friends.json';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("Home");
  const [loading, setLoading] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [search, setSearch] = useState("");

  const handleAction = (type) => {
    let icon;

    if (type === "Call") icon = <img src="images/call.png" alt="" srcset="" />;
    if (type === "Text") icon = <img src="images/text.png" alt="" srcset="" />;
    if (type === "Video") icon = <img src="images/video.png" alt="" srcset="" />;

    const newEvent = {
      id: Date.now(),
      name: selectedFriend?.name,
      type: type,
      icon: icon,
      date: new Date().toLocaleDateString()
    };

    setTimeline((prev) => [newEvent, ...prev]);

    toast(
      <div className="flex items-center gap-2 text-xl">
        {icon} {type} with {selectedFriend?.name}
      </div>,
      {
        position: "top-center",
        autoClose: 2000,
      }
    );
  };

  const getStatsData = () => {
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    timeline.forEach((item) => {
      counts[item.type]++;
    });

    return [
      { name: "Call", value: counts.Call },
      { name: "Text", value: counts.Text },
      { name: "Video", value: counts.Video },
    ];
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, []);

  return (
    <>
      {/* Navbar Section */}

      <section className='flex justify-between items-center pl-20 pr-20 pt-5 pb-5 bg-[#FFFFFF] max-[576px]:pt-5 max-[576px]:pr-4 max-[576px]:pb-6 max-[576px]:pl-4 max-[768px]:pt-5 max-[768px]:pr-4 max-[768px]:pb-6 max-[768px]:pl-4'>
        <div>
          <h1 className='text-3xl'><span className='text-[#1F2937] font-bold'>Keen</span><span className='text-[#244D3F] font-semibold'>Keeper</span></h1>
        </div>
        <div className='max-[576px]:hidden flex gap-2.5 max-[768px]:gap-1.5'>
          <div>
            <button onClick={() => setView("Home")} className={`rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2
                    ${view === "Home" ? "bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2" : "text-[#244D3F] bg-[#FFFFFF] rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2"}
                    `}><i className="fa-regular fa-house"></i> Home</button>
          </div>
          <div>
            <button onClick={() => {
              setView("Timeline");
              setSelectedFriend(null);
              setIsOpen(false);
            }} className={`rounded-sm px-2.5 py-1.5  cursor-pointer max-[768px]:px-2
                    ${view === "Timeline" ? "bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5  cursor-pointer max-[768px]:px-2" : "text-[#244D3F] bg-[#FFFFFF] rounded-sm px-2.5 py-1.5  cursor-pointer max-[768px]:px-2"}`}><i className="fa-regular fa-clock"></i> Timeline</button>
          </div>
          <div>
            <button onClick={() => setView("Stats")}
              className={`flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2
                    ${view === "Stats" ? "bg-[#244D3F] text-[#FFFFFF] flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2" : "text-[#244D3F]  flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2"}
                    `}>
              <div>
                <img src="./public/images/Vector.png" alt="" />
              </div>
              <div>
                Stats
              </div>
            </button>
          </div>
        </div>
        <div className='hidden max-[576px]:block'>
          {
            !isOpen ? (
              <button className='text-3xl hidden max-[576px]:block' onClick={() => setIsOpen(true)}>
                <i className="fa-solid fa-bars"></i>
              </button>
            ) : (
              <div className='flex flex-col gap-2 items-end'>
                <button
                  onClick={() => setView("Home")} className={`rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2
                    ${view === "Home" ? "bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2" : "text-[#244D3F] bg-[#FFFFFF] rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2"}
                    `}
                >
                  <i className="fa-regular fa-house"></i>Home
                </button>

                <button onClick={() => setView("Timeline")} className={`rounded-sm px-2.5 py-1.5  cursor-pointer max-[768px]:px-2
                    ${view === "Timeline" ? "bg-[#244D3F] text-[#FFFFFF] rounded-sm px-2.5 py-1.5  cursor-pointer max-[768px]:px-2" : "text-[#244D3F] bg-[#FFFFFF] rounded-sm px-2.5 py-1.5  cursor-pointer max-[768px]:px-2"}`}>
                  <i className="fa-regular fa-clock"></i>`  Timeline
                </button>

                <button onClick={() => setView("Stats")}
                  className={`flex items-center gap-1 justify-center rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2
                    ${view === "Stats" ? "bg-[#244D3F] text-[#FFFFFF] flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2" : "text-[#244D3F]  flex justify-center items-center gap-1.5 rounded-sm px-2.5 py-1.5 cursor-pointer max-[768px]:px-2"}`}>
                  <div>
                    <img src="./public/images/Vector.png" alt="" />
                  </div>
                  <div>
                    Stats
                  </div>
                </button>
              </div>
            )
          }
        </div>
      </section>

      {/* Timeline Section */}

      {view === "Timeline" && (
        <section className="p-10 bg-[#F8FAFC] pl-60 pr-60 pt-20 pb-20 max-[576px]:p-4 max-[768px]:p-8">
          <h1 className="text-5xl mb-4 font-bold">Timeline</h1>

          <input
            type="text"
            placeholder="Filter timeline..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 mb-4 border rounded"
          />


          {timeline
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.type.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div key={item.id} className="bg-[#FFFFFF] p-4 mb-2 rounded-lg shadow flex gap-4 items-center max-[576px]:p-3 max-[576px]:gap-2">
                <div className="font-semibold">
                  <div className='text-xs'> {item.icon} </div>
                </div>
                <div>
                  <div className='flex gap-2.5 text-xl font-semibold mb-2.5 max-[576px]:gap-1.5'>
                    <div> {item.type} </div>
                    <div>  With {item.name} </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xl">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </section>
      )}


      {/* Stats Section */}
      {view === "Stats" && (
        <section className="p-10 bg-[#F8FAFC] max-[576px]:p-3">
          <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

          <div className="bg-white p-5 rounded-lg shadow flex justify-center">
            {timeline.length === 0 ? (
              <p className="text-gray-500 text-lg">
                No data yet. Add some interactions!
              </p>
            ) : (
              <PieChart width={350} height={252} className='max-[576px]:width-full max-[576px]:height-full'>
                <div>
                  <h1>By Interaction Type</h1>
                </div>
                
                <Pie
                  data={getStatsData()}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  <Cell fill="#244D3F" />
                  <Cell fill="#7E35E1" />
                  <Cell fill="#37A163" />
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </div>
        </section>
      )}

      {/* Banner Section */}

      {!selectedFriend && view !== "Timeline" && (
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
      )}

      {/* Friends card Section */}

      {!selectedFriend && view !== "Timeline" && (
        <section className='pl-45 pr-45 pt-5 pb-20 bg-[#F8FAFC] max-[576px]:pt-10 max-[576px]:pr-6 max-[576px]:pb-6 max-[576px]:pl-6 max-[768px]:pt-10 max-[768px]:pr-6 max-[768px]:pb-6 max-[768px]:pl-6'>
          <div className='text-3xl font-semibold mb-5'>
            <h1>My Friends</h1>
          </div>
          <div className='grid grid-cols-4 gap-10 max-[576px]:grid-cols-1 max-[768px]:grid-cols-2'>

            {loading ? (
              <div className="col-span-4 flex justify-center items-center h-40">
                <div className="w-10 h-10 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (friendsData.map(friends => (
              <div key={friends.id} onClick={() => setSelectedFriend(friends)} className='flex flex-col gap-3 justify-center items-center p-8 rounded-lg bg-[#FFFFFF] shadow h-80 cursor-pointer'>
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
                <div className={`rounded-[100px] text-[#FFFFFF] px-3 py-1 font-semibold 
                  ${friends.status === "Almost Due" ? "bg-[#EFAD44] text-[#FFFFFF]" : ""}
                  ${friends.status === "Overdue" ? "bg-[#EF4444] text-[#FFFFFF]" : ""}
                  ${friends.status === "On-Track" ? "bg-[#244D3F] text-[#FFFFFF]" : ""}
                `}>
                  <span>{friends.status}</span>
                </div>
              </div>
            ))
            )}
          </div>
        </section>
      )}

      {selectedFriend && view !== "Timeline" && (
        <section className='bg-[#f5f4f4] pl-57 pr-57 pt-20 pb-20 flex gap-6 items-center max-[576px]:pt-10 max-[576px]:pr-2 max-[576px]:pb-6 max-[576px]:pl-2 max-[576px]:flex-col max-[768px]:pt-10 max-[768px]:pr-4 max-[768px]:pb-6 max-[768px]:pl-4 max-[768px]:flex-col relative'>
          <button onClick={() => setSelectedFriend(null)} className='flex gap-0.5 items-center absolute top-7 max-[576px]:absolute left-3 max-[576px]:top-0.5 border border-gray-300 rounded-lg px-3 py-1 bg-blue-200 text-cyan-800 cursor-pointer max-[576px]:px-2'>
            <div><i class="fa-solid fa-angles-left"></i></div>
            <div className='text-2xl font-semibold'>Back</div>
          </button>
          <div>
            <div>
              <div key={selectedFriend.id} className='flex flex-col gap-3 justify-center items-center p-8 rounded-lg bg-[#FFFFFF] cursor-pointer mb-4'>
                <div className='mb-2'>
                  <img src={selectedFriend.image} alt="" />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-center text-[#1F2937]'>{selectedFriend.name}</h3>
                </div>
                <div className={`rounded-[100px] text-[#FFFFFF] px-3 py-1 font-semibold 
                  ${selectedFriend.status === "Almost Due" ? "bg-[#EFAD44] text-[#FFFFFF]" : ""}
                  ${selectedFriend.status === "Overdue" ? "bg-[#EF4444] text-[#FFFFFF]" : ""}
                  ${selectedFriend.status === "On-Track" ? "bg-[#244D3F] text-[#FFFFFF]" : ""}
                `}>
                  <span>{selectedFriend.status}</span>
                </div>
                <div className='mb-1'>
                  <span className='bg-[#CBFADB] rounded-[100px] text-[#244D3F] px-3 py-1 font-semibold'>{selectedFriend.category}</span>
                </div>
                <div className='text-center text-[#64748B]'>
                  <p className='mb-1'>
                    "{selectedFriend.details}"
                  </p>
                  <p>
                    Preferred: {selectedFriend.email}
                  </p>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <div className='bg-[#FFFFFF] text-[#1F2937] p-4 mb-2 font-semibold rounded-lg'>
                <span><i className="fa-solid fa-alarm-clock"></i> Snooze 2 weeks</span>
              </div>
              <div className='bg-[#FFFFFF] text-[#1F2937] p-4 mb-2 font-semibold rounded-lg'>
                <span><i className="fa-solid fa-box-archive"></i> Archive</span>
              </div>
              <div className='bg-[#FFFFFF] text-[#EF4444] p-4 font-semibold rounded-lg'>
                <span><i className="fa-solid fa-trash-can"></i> Delete</span>
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-6 justify-between items-center max-[576px]:gap-3  max-[576px]:justify-center  max-[576px]:flex-col max-[768px]:gap-3'>
              <div className='bg-[#FFFFFF] pl-10 pr-10 pt-8 pb-8 text-center rounded-lg'>
                <h1 className='text-[#244D3F] text-2xl font-semibold'>{selectedFriend.contact}</h1>
                <p className='text-[#64748B]'>Days Since Contact</p>
              </div>
              <div className='bg-[#FFFFFF] pl-12 pr-12 pt-8 pb-8 text-center rounded-lg  max-[576px]:pl-16  max-[576px]:pr-16'>
                <h1 className='text-[#244D3F] text-2xl font-semibold'>30</h1>
                <p className='text-[#64748B]'>Goal (Days)</p>
              </div>
              <div className='bg-[#FFFFFF] pl-7 pr-7 pt-8 pb-8 text-center rounded-lg  max-[576px]:pl-8  max-[576px]:pr-8'>
                <h1 className='text-[#244D3F] text-2xl font-semibold wrap-anywhere'>Feb 27, 2026</h1>
                <p className='text-[#64748B]'>Next Due</p>
              </div>
            </div>
            <div className='p-6 bg-[#FFFFFF] mt-6 mb-6 rounded-lg  max-[576px]:p-3'>
              <div className='flex justify-between items-center mb-1 max-[576px]:justify-center  max-[576px]:gap-20'>
                <div><p className='text-xl'>Relationship Goal</p></div>
                <div className='bg-[#E9E9E9] border border-[#E9E9E9] text-[#1F2937] rounded-sm font-semibold p-2'>Edit</div>
              </div>
              <div>
                <p><span className='text-[#64748B] text-xl'>Connect every</span> <span className='text-[#1F2937] font-bold text-xl'>30 days</span></p>
              </div>
            </div>
            <div className='bg-[#FFFFFF] p-6 rounded-lg'>
              <h2 className='text-xl mb-4  max-[576px]:text-center'>Quick Check-In</h2>
              <div className='flex gap-7 items-center  max-[576px]:flex-col'>
                <div onClick={() => handleAction("Call")
                } className='bg-[#F8FAFC] pl-18 pr-18 pt-5 pb-5 cursor-pointer rounded-lg text-center '>
                  <p><i className="fa-solid fa-phone text-xl"></i></p>
                  <p className='text-xl font-semibold'>Call</p>
                </div>
                <div onClick={() => handleAction("Text")
                } className='bg-[#F8FAFC] pl-18 pr-18 pt-5 pb-5 cursor-pointer rounded-lg text-center'>
                  <p><i className="fa-regular fa-comment-dots text-xl"></i></p>
                  <p className='text-xl font-semibold'>Text</p>
                </div>
                <div onClick={() => handleAction("Video")
                } className='bg-[#F8FAFC] pl-18 pr-18 pt-5 pb-5 cursor-pointer rounded-lg text-center'>
                  <p><i className="fa-solid fa-video text-xl"></i></p>
                  <p className='text-xl font-semibold'>Video</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


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
      <ToastContainer />
    </>
  )
}

export default App
