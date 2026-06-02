import { useGetBookingsQuery, useGetServicesQuery, useGetCountriesQuery, useGetDestinationsQuery } from "../../redux/api/dashboard.api";
import { BookmarkCheck, Briefcase, Globe, Compass, AlertCircle, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router";

export default function Overview() {
  const { data: bookings = [], isLoading: loadBookings, error: errorBookings } = useGetBookingsQuery({});
  const { data: services = [], isLoading: loadServices } = useGetServicesQuery({});
  const { data: countries = [], isLoading: loadCountries } = useGetCountriesQuery({});
  const { data: destinations = [], isLoading: loadDestinations } = useGetDestinationsQuery({});

  const isLoading = loadBookings || loadServices || loadCountries || loadDestinations;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }


  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter((b: any) => b.status === "pending").length;
  const approvedBookings = bookings.filter((b: any) => b.status === "approved").length;
  const rejectedBookings = bookings.filter((b: any) => b.status === "rejected").length;

  const stats = [
    {
      label: "Total Bookings",
      value: totalBookings,
      icon: BookmarkCheck,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      label: "Active Services",
      value: services.length,
      icon: Briefcase,
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      label: "Countries Supported",
      value: countries.length,
      icon: Globe,
      color: "bg-violet-500",
      textColor: "text-violet-500",
      bgColor: "bg-violet-50",
    },
    {
      label: "Featured Destinations",
      value: destinations.length,
      icon: Compass,
      color: "bg-amber-500",
      textColor: "text-amber-500",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white shadow-lg">
        <h2 className="text-2xl font-bold">Welcome back, Administrator!</h2>
        <p className="text-blue-100 text-sm mt-1">
          Here is a quick overview of what's happening at Skill Labs Consultancy today.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className={`p-4 rounded-xl ${stat.bgColor} ${stat.textColor}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-black text-slate-800 mt-1">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
          <h3 className="text-base font-bold text-slate-800">Booking Pipeline</h3>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-slate-50 rounded-xl">
              <Clock className="w-5 h-5 text-amber-500 mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{pendingBookings}</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Pending</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{approvedBookings}</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Approved</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <XCircle className="w-5 h-5 text-rose-500 mx-auto mb-1" />
              <p className="text-xl font-bold text-slate-800">{rejectedBookings}</p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Rejected</p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <Link to="/admin/dashboard/bookings" className="text-xs font-bold text-blue-600 hover:text-blue-500 block text-center">
              Manage Booking Requests &rarr;
            </Link>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-800">Recent Booking Requests</h3>
              <Link to="/admin/dashboard/bookings" className="text-xs text-blue-600 hover:underline font-bold">
                View All
              </Link>
            </div>

            {errorBookings ? (
              <div className="text-slate-400 text-sm text-center py-6 flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4 text-slate-300" /> No bookings have been submitted yet.
              </div>
            ) : bookings.length === 0 ? (
              <div className="text-slate-400 text-sm text-center py-6">No recent requests.</div>
            ) : (
              <div className="space-y-4">
                {bookings.slice(0, 3).map((booking: any) => (
                  <div key={booking._id} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{booking.name || "Client Name"}</h4>
                      <p className="text-xs text-slate-500">{booking.email || "No Email"} • {booking.service}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        booking.status === "approved"
                          ? "bg-emerald-100 text-emerald-700"
                          : booking.status === "rejected"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
