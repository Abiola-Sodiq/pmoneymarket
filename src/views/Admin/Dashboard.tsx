import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { routePath } from "../../utils/helper";
import logoutIcon from "../../assets/icons/logoutIcon.svg";

const Dashboard = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN)) {
    return <Navigate to={routePath.LOGIN} replace />;
  }
  return (
    <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4 space-y-10 min-h-[100svh]">
      <div className="flex justify-end">
        <span
          className="w-full max-w-32 border cursor-pointer flex items-center gap-2 py-2 bg-white rounded-xl px-4"
          onClick={() => {
            sessionStorage.clear();
            navigate(routePath.LOGIN);
          }}
        >
          <img src={logoutIcon} alt="logout icon" />
          Logout
        </span>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center gap-10">
          <button
            onClick={() => navigate(routePath.CURRENCY)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 font-semibold hover:scale-105 transition-all"
          >
            CURRENCY UPDATE
          </button>
          <button
            onClick={() => navigate(routePath.ACCOUNT)}
            className="bg-blue-500 text-white px-6 py-3  rounded-lg shadow hover:bg-blue-600 font-semibold hover:scale-105 transition-all"
          >
            ACCOUNT UPDATE
          </button>
        </div>

        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
