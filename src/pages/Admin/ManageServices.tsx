import React, { useState } from "react";
import {
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} from "../../redux/api/dashboard.api";
import { Plus, Pencil, Trash2, X, Upload, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function ManageServices() {
  const { data: services = [], isLoading, error } = useGetServicesQuery({});
  const [createService, { isLoading: isCreating }] = useCreateServiceMutation();
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();
  const [deleteService] = useDeleteServiceMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [formError, setFormError] = useState("");

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    setFile(null);
    setEditingId(null);
    setFormError("");
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsOpen(true);
  };

  const handleOpenEdit = (service: any) => {
    resetForm();
    setEditingId(service._id);
    setTitle(service.title);
    setCategory(service.category);
    setDescription(service.description);
    setIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteService(id).unwrap();
        toast.success("Service deleted successfully!");
      } catch (err: any) {
        toast.error(err?.data?.message || "Failed to delete service.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!title || !category || !description) {
      setFormError("All text fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    if (file) {
      formData.append("image", file);
    }

    try {
      if (editingId) {
        await updateService({ id: editingId, formData }).unwrap();
        toast.success("Service updated successfully!");
      } else {
        await createService(formData).unwrap();
        toast.success("Service created successfully!");
      }
      setIsOpen(false);
      resetForm();
    } catch (err: any) {
      const errMsg = err?.data?.message || "An error occurred while saving the service.";
      setFormError(errMsg);
      toast.error(errMsg);
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 font-heading">Consultancy Services</h2>
          <p className="text-xs font-semibold text-slate-400">Add, edit, and delete services provided to clients.</p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-all active:scale-98"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[250px]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-400">
          <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          No services exist in the database. Add one to get started!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-4">
                
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleOpenEdit(service)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                      title="Edit"
                      aria-label={`Edit ${service.title}`}
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="p-1.5 bg-slate-50 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer transition-colors"
                      title="Delete"
                      aria-label={`Delete ${service.title}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                
                {service.icon && (
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-50">
                    <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                )}

                <div>
                  <h3 className="text-base font-bold text-slate-800">{service.title}</h3>
                  <p className="text-xs font-semibold text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
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
                {editingId ? "Edit Service" : "Add Service"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
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
                  <label htmlFor="service-title" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Service Title
                  </label>
                  <input
                    id="service-title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Student Visa Consultancy"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label htmlFor="service-category" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Category
                  </label>
                  <input
                    id="service-category"
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Visa, Training, Consultation"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label htmlFor="service-desc" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Description
                  </label>
                  <textarea
                    id="service-desc"
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide a comprehensive description of the service..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/20 transition-all font-semibold resize-none"
                  />
                </div>

                
                <div className="space-y-1.5">
                  <label htmlFor="service-icon" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Service Icon/Image
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="service-icon" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50/50 hover:border-blue-500/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-6 h-6 text-slate-400 mb-2" />
                        <p className="text-xs font-bold text-slate-500">
                          {file ? file.name : "Click to upload service icon"}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                          PNG, JPG or SVG (Max 5MB)
                        </p>
                      </div>
                      <input
                        id="service-icon"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFile(e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                  </div>
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
                    "Save Service"
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
