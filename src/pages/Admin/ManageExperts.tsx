import React, { useState } from "react";
import {
  useGetExpertsQuery,
  useCreateExpertMutation,
  useUpdateExpertMutation,
  useDeleteExpertMutation,
} from "../../redux/api/dashboard.api";
import { Plus, Pencil, Trash2, X, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function ManageExperts() {
  const { data: experts = [], isLoading, error } = useGetExpertsQuery({});
  const [createExpert, { isLoading: isCreating }] = useCreateExpertMutation();
  const [updateExpert, { isLoading: isUpdating }] = useUpdateExpertMutation();
  const [deleteExpert] = useDeleteExpertMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Meet Our Experts");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [formError, setFormError] = useState("");

  const clearAllFields = () => {
    setName("");
    setRole("");
    setDescription("");
    setCategory("Meet Our Experts");
    setTags("");
    setFile(null);
    setEditingId(null);
    setFormError("");
  };

  const handlOpenAdd = () => {
    clearAllFields();
    setIsOpen(true);
  };

  const handlEditItem = (expert: any) => {
    clearAllFields();
    setEditingId(expert._id);
    setName(expert.name);
    setRole(expert.role);
    setDescription(expert.description);
    setCategory(expert.category);
    setTags(expert.tags?.join(", ") || "");
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this expert?")) {
      try {
        await deleteExpert(id).unwrap();
        toast.success("Expert deleted successfully!");
      } catch (err: any) {
        toast.error(err?.data?.message || "Failed to delete expert.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name || !role || !description || !category) {
      setFormError("All required text fields must be filled.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("description", description);
    formData.append("category", category);

    const tagsArray = tags.split(",").map((t) => t.trim()).filter(Boolean);
    formData.append("tags", JSON.stringify(tagsArray));

    if (file) {
      formData.append("file", file);
    }

    try {
      if (editingId) {
        await updateExpert({ id: editingId, expertData: formData }).unwrap();
        toast.success("Expert updated successfully!");
      } else {
        await createExpert(formData).unwrap();
        toast.success("Expert created successfully!");
      }
      setIsOpen(false);
      clearAllFields();
    } catch (err: any) {
      const errMsg = err?.data?.message || "Failed to save expert.";
      setFormError(errMsg);
      toast.error(errMsg);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-heading">Manage Experts & Consultants</h2>
          <p className="text-xs font-semibold text-slate-400">Add, edit, or remove experts from public facing sections.</p>
        </div>
        <button
          onClick={handlOpenAdd}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-98"
        >
          <Plus className="w-4 h-4" />
          Add Expert
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[250px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-400">
          <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No experts have been added yet. Add one to start!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experts.map((expert: any) => (
            <div
              key={expert._id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {expert.image && (
                <div className="w-full h-48 bg-slate-100 overflow-hidden relative">
                  <img src={expert.image} alt={expert.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/30 transition-colors" />
                </div>
              )}

              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 leading-tight">{expert.name}</h3>
                    <p className="text-[11px] font-bold text-blue-600 tracking-wider uppercase mt-1">
                      {expert.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => handlEditItem(expert)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(expert._id)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="bg-slate-50 px-2.5 py-1 rounded-md inline-block">
                  <p className="text-[10px] font-bold text-slate-500">
                    {expert.category}
                  </p>
                </div>

                <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-3">
                  {expert.description}
                </p>

                {expert.tags && expert.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {expert.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="bg-blue-50 text-blue-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in duration-200 my-8">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">
                {editingId ? "Edit Expert" : "Add Expert"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {formError && (
                <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs font-bold text-rose-500">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Sarah Chen"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Senior Academic Advisor"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Category
                  </label>
                  <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-slate-800 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  >
                    <option value="Meet Our Experts">Meet Our Experts</option>
                    <option value="Our Global Consultants">Our Global Consultants</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0]);
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-slate-800 text-sm outline-none cursor-pointer"
                  />
                </div>
              </div>

              {category === "Our Global Consultants" && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="e.g. STEM, PhD Programs, Immigration"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Description
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide a brief background or specialization..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 bg-slate-50 p-4 -mx-6 -mb-6">
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
                    "Save Expert"
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
