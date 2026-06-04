import React, { useState } from "react";
import {
  useGetFaqsQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} from "../../redux/api/dashboard.api";
import { Plus, Pencil, Trash2, X, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function ManageFAQs() {
  const { data: faqs = [], isLoading, error } = useGetFaqsQuery({});
  const [createFaq, { isLoading: isCreating }] = useCreateFaqMutation();
  const [updateFaq, { isLoading: isUpdating }] = useUpdateFaqMutation();
  const [deleteFaq] = useDeleteFaqMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [order, setOrder] = useState<number>(0);

  const [formError, setFormError] = useState("");

  const resetForm = () => {
    setQuestion("");
    setAnswer("");
    setOrder(0);
    setEditingId(null);
    setFormError("");
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsOpen(true);
  };

  const handleOpenEdit = (faq: any) => {
    resetForm();
    setEditingId(faq._id);
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setOrder(faq.order || 0);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this FAQ?")) {
      try {
        await deleteFaq(id).unwrap();
        toast.success("FAQ deleted successfully!");
      } catch (err: any) {
        toast.error(err?.data?.message || "Failed to delete FAQ.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!question || !answer) {
      setFormError("Question and Answer text are required.");
      return;
    }

    const payload = {
      question,
      answer,
      order: Number(order),
    };

    try {
      if (editingId) {
        await updateFaq({ id: editingId, faqData: payload }).unwrap();
        toast.success("FAQ updated successfully!");
      } else {
        await createFaq(payload).unwrap();
        toast.success("FAQ created successfully!");
      }
      setIsOpen(false);
      resetForm();
    } catch (err: any) {
      const errMsg = err?.data?.message || "An error occurred while saving FAQ.";
      setFormError(errMsg);
      toast.error(errMsg);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-heading">Frequently Asked Questions</h2>
          <p className="text-xs font-semibold text-slate-400">Add and manage answers to standard client questions.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-98"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[250px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-400">
          <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No FAQs exist in the system. Add one to list rules!
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4 divide-y divide-slate-100">
          {faqs.map((faq: any, idx: number) => (
            <div
              key={faq._id}
              className={`flex flex-col md:flex-row justify-between items-start gap-4 ${
                idx > 0 ? "pt-4" : ""
              }`}
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  {faq.order !== undefined && (
                    <span className="text-[10px] font-bold text-slate-400 border px-1.5 py-0.5 rounded">
                      Order: {faq.order}
                    </span>
                  )}
                  <h3 className="text-sm font-bold text-slate-800">
                    Q: {faq.question}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  A: {faq.answer}
                </p>
              </div>

              <div className="flex items-center gap-1.5 self-end md:self-start">
                <button
                  onClick={() => handleOpenEdit(faq)}
                  className="p-1.5 bg-slate-50 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                  title="Edit"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(faq._id)}
                  className="p-1.5 bg-slate-50 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">
                {editingId ? "Edit FAQ" : "Add FAQ"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {formError && (
                <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs font-bold text-rose-500">
                  {formError}
                </div>
              )}

              <div className="space-y-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Question
                  </label>
                  <input
                    type="text"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="e.g. What is the visa processing fee?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Answer
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Provide a precise and helpful answer..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold resize-none"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Display Order (Numeric)
                  </label>
                  <input
                    type="number"
                    value={order}
                    onChange={(e) => setOrder(Number(e.target.value))}
                    placeholder="e.g. 1"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>
              </div>

              
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreating || isUpdating}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  {(isCreating || isUpdating) ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save FAQ"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
