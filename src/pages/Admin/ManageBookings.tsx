import {
  useGetBookingsQuery,
  useUpdateBookingStatusMutation,
  useDeleteBookingMutation,
} from "../../redux/api/dashboard.api";
import { Check, X, Trash2, Calendar, Mail, User, ShieldAlert, BookmarkCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ManageBookings() {
  const { data: bookings = [], isLoading, error } = useGetBookingsQuery({});
  const [updateStatus, { isLoading: isUpdating }] = useUpdateBookingStatusMutation();
  const [deleteBooking] = useDeleteBookingMutation();

  const [statusFilter, setStatusFilter] = useState<string>("all");

  const handleUpdateStatus = async (id: string, status: "approved" | "rejected") => {
    try {
      await updateStatus({ id, status }).unwrap();
      toast.success(`Booking status updated to ${status}.`);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update booking status.");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this booking request?")) {
      try {
        await deleteBooking(id).unwrap();
        toast.success("Booking successfully deleted.");
      } catch (err: any) {
        toast.error(err?.data?.message || "Failed to delete booking.");
      }
    }
  };

  const filteredBookings = bookings.filter((booking: any) => {
    if (statusFilter === "all") return true;
    return booking.status === statusFilter;
  });

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-heading">Consultation Bookings</h2>
          <p className="text-xs font-semibold text-slate-400">View and moderate client meeting bookings.</p>
        </div>

        
        <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-sm w-fit self-start sm:self-center">
          {["all", "pending", "approved", "rejected"].map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`text-xs font-bold px-4 py-2 rounded-lg capitalize transition-all cursor-pointer ${
                statusFilter === filter
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[250px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-400">
          <ShieldAlert className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No client bookings exist.
        </div>
      ) : filteredBookings.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-400 shadow-sm">
          <BookmarkCheck className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No bookings match the status filter: <span className="font-bold text-slate-700 capitalize">{statusFilter}</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Client Details</th>
                  <th className="py-4 px-6">Consultation Service</th>
                  <th className="py-4 px-6">Date / Time</th>
                  <th className="py-4 px-6">Message</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-semibold text-slate-700">
                {filteredBookings.map((booking: any) => (
                  <tr key={booking._id} className="hover:bg-slate-50/50 transition-colors">
                    
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-slate-800">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          {booking.name || "Client Name"}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Mail className="w-3.5 h-3.5" />
                          {booking.email || "No Email"}
                        </div>
                      </div>
                    </td>

                    
                    <td className="py-4 px-6">
                      <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-bold">
                        {booking.service}
                      </span>
                    </td>

                    
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1.5 text-slate-600 text-xs font-bold">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {booking.time}
                      </div>
                    </td>

                    
                    <td className="py-4 px-6 max-w-xs">
                      <p className="text-xs text-slate-400 leading-relaxed font-semibold truncate" title={booking.message}>
                        {booking.message || "—"}
                      </p>
                    </td>

                    
                    <td className="py-4 px-6">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          booking.status === "approved"
                            ? "bg-emerald-100 text-emerald-700"
                            : booking.status === "rejected"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {booking.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleUpdateStatus(booking._id, "approved")}
                              disabled={isUpdating}
                              className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg cursor-pointer transition-colors"
                              title="Approve Booking"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleUpdateStatus(booking._id, "rejected")}
                              disabled={isUpdating}
                              className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg cursor-pointer transition-colors"
                              title="Reject Booking"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="p-1.5 bg-slate-50 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                          title="Delete Request"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
