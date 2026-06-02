import React, { useState } from "react";
import {
  useGetDestinationsQuery,
  useCreateDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} from "../../redux/api/dashboard.api";
import { Plus, Pencil, Trash2, X, Loader2, AlertCircle } from "lucide-react";

interface IInstitute {
  name: string;
  estimatedFees: string;
}

export default function ManageDestinations() {
  const { data: destinations = [], isLoading, error } = useGetDestinationsQuery({});
  const [createDestination, { isLoading: isCreating }] = useCreateDestinationMutation();
  const [updateDestination, { isLoading: isUpdating }] = useUpdateDestinationMutation();
  const [deleteDestination] = useDeleteDestinationMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [processingTime, setProcessingTime] = useState("");
  const [livingCost, setLivingCost] = useState("");
  const [institutes, setInstitutes] = useState<IInstitute[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const [formError, setFormError] = useState("");

  const resetForm = () => {
    setCountry("");
    setDescription("");
    setProcessingTime("");
    setLivingCost("");
    setInstitutes([]);
    setFile(null);
    setEditingId(null);
    setFormError("");
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsOpen(true);
  };

  const handleOpenEdit = (dest: any) => {
    resetForm();
    setEditingId(dest._id);
    setCountry(dest.country);
    setDescription(dest.description);
    setProcessingTime(dest.processingTime || "");
    setLivingCost(dest.livingCost || "");
    setInstitutes(dest.topInstitutes || []);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this destination?")) {
      try {
        await deleteDestination(id).unwrap();
      } catch (err: any) {
        alert(err?.data?.message || "Failed to delete destination.");
      }
    }
  };

  const addInstituteRow = () => {
    setInstitutes([...institutes, { name: "", estimatedFees: "" }]);
  };

  const updateInstituteField = (index: number, field: keyof IInstitute, value: string) => {
    const updated = [...institutes];
    updated[index][field] = value;
    setInstitutes(updated);
  };

  const removeInstituteRow = (index: number) => {
    setInstitutes(institutes.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!country || !description || !processingTime || !livingCost) {
      setFormError("All required text fields must be filled.");
      return;
    }

    const formData = new FormData();
    formData.append("country", country);
    formData.append("description", description);
    formData.append("processingTime", processingTime);
    formData.append("livingCost", livingCost);
    formData.append("topInstitutes", JSON.stringify(institutes));
    if (file) {
      formData.append("image", file);
    }

    try {
      if (editingId) {
        await updateDestination({ id: editingId, formData }).unwrap();
      } else {
        await createDestination(formData).unwrap();
      }
      setIsOpen(false);
      resetForm();
    } catch (err: any) {
      setFormError(err?.data?.message || "Failed to save destination.");
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-heading">Featured Destinations</h2>
          <p className="text-xs font-semibold text-slate-400">Manage featured global study destinations, costs, and institutes.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-98"
        >
          <Plus className="w-4 h-4" />
          Add Destination
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[250px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-400">
          <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No study destinations have been added yet. Add one to list options!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest: any) => (
            <div
              key={dest._id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              
              {dest.imageUrl && (
                <div className="w-full h-40 bg-slate-100 overflow-hidden relative">
                  <img src={dest.imageUrl} alt={dest.country} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/30 transition-colors" />
                </div>
              )}

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{dest.country}</h3>
                    <p className="text-xs text-slate-500 font-semibold mt-1">
                      Time: {dest.processingTime} • Cost: {dest.livingCost}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleOpenEdit(dest)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(dest._id)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-semibold leading-relaxed line-clamp-3">
                  {dest.description}
                </p>

                {dest.topInstitutes && dest.topInstitutes.length > 0 && (
                  <div className="border-t border-slate-100 pt-3 space-y-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Institutes</p>
                    <div className="space-y-1">
                      {dest.topInstitutes.slice(0, 3).map((inst: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between text-xs font-semibold text-slate-600">
                          <span className="truncate max-w-[70%]">{inst.name}</span>
                          <span className="text-blue-600">{inst.estimatedFees}</span>
                        </div>
                      ))}
                      {dest.topInstitutes.length > 3 && (
                        <p className="text-[10px] text-slate-400 font-bold">
                          + {dest.topInstitutes.length - 3} more institutes
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in duration-200 my-8">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="text-base font-bold text-slate-800">
                {editingId ? "Edit Destination" : "Add Destination"}
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
                    Country Name
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Processing Time
                  </label>
                  <input
                    type="text"
                    required
                    value={processingTime}
                    onChange={(e) => setProcessingTime(e.target.value)}
                    placeholder="e.g. 4-6 Weeks"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Living Cost (Estimated)
                  </label>
                  <input
                    type="text"
                    required
                    value={livingCost}
                    onChange={(e) => setLivingCost(e.target.value)}
                    placeholder="e.g. £10,000 / Year"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Destination Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0]);
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 text-slate-800 text-sm outline-none cursor-pointer"
                  />
                </div>
              </div>

              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Description
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide visa processing information and study opportunities overview..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold resize-none"
                />
              </div>

              
              <div className="border-t border-slate-100 pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Top Institutes & Fees
                  </label>
                  <button
                    type="button"
                    onClick={addInstituteRow}
                    className="text-xs font-bold text-blue-600 hover:text-blue-500 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Institute
                  </button>
                </div>

                {institutes.length === 0 ? (
                  <p className="text-xs font-semibold text-slate-400 bg-slate-50 p-4 rounded-xl text-center border border-dashed">
                    No top institutes added yet. Click "Add Institute" to include items.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {institutes.map((inst, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <input
                          type="text"
                          required
                          value={inst.name}
                          onChange={(e) => updateInstituteField(idx, "name", e.target.value)}
                          placeholder="Institute Name (e.g. Oxford University)"
                          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-slate-800 text-xs font-semibold outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all"
                        />
                        <input
                          type="text"
                          required
                          value={inst.estimatedFees}
                          onChange={(e) => updateInstituteField(idx, "estimatedFees", e.target.value)}
                          placeholder="Estimated Fees (e.g. £15,000/Yr)"
                          className="w-44 bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-slate-800 text-xs font-semibold outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => removeInstituteRow(idx)}
                          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg cursor-pointer transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
                    "Save Destination"
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
