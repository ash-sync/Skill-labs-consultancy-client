import {
  useGetTestimonialsQuery,
  useUpdateTestimonialStatusMutation,
  useDeleteTestimonialMutation,
} from "../../redux/api/dashboard.api";
import { Check, X, Trash2, Star, MessageSquare, ShieldAlert } from "lucide-react";

export default function ManageTestimonials() {
  const { data: testimonials = [], isLoading, error } = useGetTestimonialsQuery({});
  const [updateStatus, { isLoading: isUpdating }] = useUpdateTestimonialStatusMutation();
  const [deleteTestimonial] = useDeleteTestimonialMutation();

  const handleUpdateStatus = async (id: string, status: "approved" | "rejected" | "pending") => {
    try {
      await updateStatus({ id, status }).unwrap();
    } catch (err: any) {
      alert(err?.data?.message || "Failed to update review status.");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await deleteTestimonial(id).unwrap();
      } catch (err: any) {
        alert(err?.data?.message || "Failed to delete testimonial.");
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h2 className="text-xl font-bold text-slate-800 font-heading">Client Reviews</h2>
        <p className="text-xs font-semibold text-slate-400">Moderate and approve testimonials shown on the front page.</p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[250px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-400">
          <ShieldAlert className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No client testimonials exist.
        </div>
      ) : testimonials.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-400 shadow-sm">
          <MessageSquare className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No testimonials are currently in the database.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test: any) => (
            <div
              key={test._id}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-4">
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">{test.name}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{test.role}</p>
                  </div>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${
                      test.status === "approved"
                        ? "bg-emerald-100 text-emerald-700"
                        : test.status === "rejected"
                        ? "bg-rose-100 text-rose-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {test.status}
                  </span>
                </div>

                
                <div className="flex items-center gap-1">
                  {renderStars(test.rating || 5)}
                </div>

                
                <p className="text-xs text-slate-500 leading-relaxed font-semibold italic">
                  "{test.text}"
                </p>
              </div>

              
              <div className="border-t border-slate-100 mt-4 pt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {test.status !== "approved" && (
                    <button
                      onClick={() => handleUpdateStatus(test._id, "approved")}
                      disabled={isUpdating}
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-all active:scale-98"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Approve
                    </button>
                  )}
                  {test.status !== "rejected" && (
                    <button
                      onClick={() => handleUpdateStatus(test._id, "rejected")}
                      disabled={isUpdating}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer transition-all active:scale-98"
                    >
                      <X className="w-3.5 h-3.5" />
                      Reject
                    </button>
                  )}
                </div>

                <button
                  onClick={() => handleDelete(test._id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-all"
                  title="Delete Testimonial"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
