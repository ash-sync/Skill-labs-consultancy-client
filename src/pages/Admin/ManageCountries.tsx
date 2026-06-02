import React, { useState } from "react";
import {
  useGetCountriesQuery,
  useCreateCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
} from "../../redux/api/dashboard.api";
import { Plus, Pencil, Trash2, X, Loader2, AlertCircle } from "lucide-react";

export default function ManageCountries() {
  const { data: countries = [], isLoading, error } = useGetCountriesQuery({});
  const [createCountry, { isLoading: isCreating }] = useCreateCountryMutation();
  const [updateCountry, { isLoading: isUpdating }] = useUpdateCountryMutation();
  const [deleteCountry] = useDeleteCountryMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [fees, setFees] = useState("");
  const [deadline, setDeadline] = useState("");
  const [institutes, setInstitutes] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const [newInstituteName, setNewInstituteName] = useState("");
  const [formError, setFormError] = useState("");

  const resetForm = () => {
    setName("");
    setFees("");
    setDeadline("");
    setInstitutes([]);
    setFile(null);
    setEditingId(null);
    setNewInstituteName("");
    setFormError("");
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsOpen(true);
  };

  const handleOpenEdit = (country: any) => {
    resetForm();
    setEditingId(country._id);
    setName(country.name);
    setFees(country.fees || "");
    setDeadline(country.deadline || "");
    setInstitutes(country.institutes || []);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this country?")) {
      try {
        await deleteCountry(id).unwrap();
      } catch (err: any) {
        alert(err?.data?.message || "Failed to delete country.");
      }
    }
  };

  const handleAddInstitute = (e: React.FormEvent) => {
    e.preventDefault();
    if (newInstituteName.trim()) {
      setInstitutes([...institutes, newInstituteName.trim()]);
      setNewInstituteName("");
    }
  };

  const handleRemoveInstitute = (idx: number) => {
    setInstitutes(institutes.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name) {
      setFormError("Country name is required.");
      return;
    }

    try {
      if (editingId) {
        await updateCountry({
          id: editingId,
          data: {
            name,
            fees,
            deadline,
            institutes,
          },
        }).unwrap();
      } else {
        const createFormData = new FormData();
        createFormData.append("name", name);
        createFormData.append("fees", fees);
        createFormData.append("deadline", deadline);
        createFormData.append("institutes", JSON.stringify(institutes));
        if (file) {
          createFormData.append("image", file);
        }

        await createCountry(createFormData).unwrap();
      }
      setIsOpen(false);
      resetForm();
    } catch (err: any) {
      setFormError(err?.data?.message || "An error occurred while saving country.");
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-heading">Global Country Visa & Study</h2>
          <p className="text-xs font-semibold text-slate-400">Add, edit, and delete study destination country requirements.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-98"
        >
          <Plus className="w-4 h-4" />
          Add Country
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[250px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-400">
          <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No country profiles exist. Click add country to specify visa rules!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country: any) => (
            <div
              key={country._id}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  {country.image ? (
                    <div className="w-12 h-8 rounded bg-slate-50 overflow-hidden shadow-sm">
                      <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-12 h-8 rounded bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">
                      FLAG
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleOpenEdit(country)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(country._id)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-800">{country.name}</h3>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-semibold text-slate-600">
                    <p className="bg-slate-50 p-2 rounded-lg">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Est. Fees</span>
                      {country.fees || "N/A"}
                    </p>
                    <p className="bg-slate-50 p-2 rounded-lg">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Deadline</span>
                      {country.deadline || "N/A"}
                    </p>
                  </div>
                </div>

                {country.institutes && country.institutes.length > 0 && (
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Institutes</span>
                    <div className="flex flex-wrap gap-1">
                      {country.institutes.map((inst: string, idx: number) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
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
                {editingId ? "Edit Country Requirements" : "Add Study Country"}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Country Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Canada"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Flag / Cover Banner
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFile(e.target.files[0]);
                      }
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-4 text-slate-800 text-sm outline-none cursor-pointer font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Estimated Tuition Fees
                  </label>
                  <input
                    type="text"
                    value={fees}
                    onChange={(e) => setFees(e.target.value)}
                    placeholder="e.g. $15k - $25k / Year"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Application Deadline
                  </label>
                  <input
                    type="text"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    placeholder="e.g. Sept 15 for Winter"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>
              </div>

              
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Affiliated Institutes List
                </label>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newInstituteName}
                    onChange={(e) => setNewInstituteName(e.target.value)}
                    placeholder="Add an institute name (e.g. McGill University)"
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-slate-800 text-xs font-semibold outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={handleAddInstitute}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 max-h-24 overflow-y-auto bg-slate-50 p-2.5 rounded-xl border">
                  {institutes.length === 0 ? (
                    <span className="text-[11px] font-semibold text-slate-400 block mx-auto py-1">
                      No institutes added. Specify at least one if possible.
                    </span>
                  ) : (
                    institutes.map((inst, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-white border border-slate-200 text-slate-700 font-bold px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                      >
                        {inst}
                        <button
                          type="button"
                          onClick={() => handleRemoveInstitute(idx)}
                          className="hover:text-rose-500 rounded p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))
                  )}
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
                    "Save Country"
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
