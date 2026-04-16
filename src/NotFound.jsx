import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F8FAFC] text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>

      <p className="text-2xl text-gray-700 mb-4">
        Oops! Page Not Found
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-[#244D3F] text-white px-4 py-2 rounded"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;