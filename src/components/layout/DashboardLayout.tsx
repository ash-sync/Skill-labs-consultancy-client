import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
import {
  LayoutDashboard,
  Compass,
  Globe,
  Briefcase,
  HelpCircle,
  MessageSquare,
  BookmarkCheck,
  LogOut,
  Home,
  Users,
} from "lucide-react";

export default function DashboardLayout() {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (!user || user.role !== "ADMIN") {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  if (!user || user.role !== "ADMIN") {
    return null;
  }

  const menuItems = [
    {
      path: "/admin/dashboard",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      path: "/admin/dashboard/services",
      label: "Services",
      icon: Briefcase,
    },
    {
      path: "/admin/dashboard/destinations",
      label: "Destinations",
      icon: Compass,
    },
    {
      path: "/admin/dashboard/countries",
      label: "Countries",
      icon: Globe,
    },
    {
      path: "/admin/dashboard/bookings",
      label: "Bookings",
      icon: BookmarkCheck,
    },
    {
      path: "/admin/dashboard/faqs",
      label: "FAQs",
      icon: HelpCircle,
    },
    {
      path: "/admin/dashboard/testimonials",
      label: "Testimonials",
      icon: MessageSquare,
    },
    {
      path: "/admin/dashboard/experts",
      label: "Experts",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl">
        
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <Link to="/" className="text-xl font-black text-white tracking-wide">
            SKILL<span className="text-blue-500 font-medium">LABS</span>
          </Link>
          <span className="text-[10px] bg-blue-500/20 text-blue-400 font-semibold px-2 py-0.5 rounded uppercase">
            Admin
          </span>
        </div>

        
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        
        <div className="p-4 border-t border-slate-800 space-y-1">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all"
          >
            <Home className="w-5 h-5" />
            Public Site
          </Link>
          <button
            onClick={() => dispatch(logout())}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-lg font-bold text-slate-800">
            {menuItems.find((item) => item.path === location.pathname)?.label ||
              "Admin Console"}
          </h1>

          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-800">{user.name}</p>
              <p className="text-xs font-semibold text-slate-400">
                {user.email}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
