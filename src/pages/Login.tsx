/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useLoginMutation } from "../redux/features/auth/auth.api";
import { useNavigate } from "react-router";
import { Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!email || !password) {
      setLoginError("Please enter both email and password.");
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const res = await loginUser({ email, password }).unwrap();
      if (res.success && res.data) {





        const token = res.data.accessToken;
        

        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        const decodedUser = JSON.parse(jsonPayload);

        dispatch(
          setUser({
            user: {
              _id: decodedUser._id,
              name: decodedUser.name,
              email: decodedUser.email,
              role: decodedUser.role,
            },
            token,
          })
        );
        toast.success("Welcome back! Logged in successfully.");
        navigate("/admin/dashboard");
      } else {
        setLoginError("Login failed. Invalid credentials.");
        toast.error("Login failed. Invalid credentials.");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      const errMsg = err?.data?.message || err?.message || "Invalid email or password.";
      setLoginError(errMsg);
      toast.error(errMsg);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden px-4 font-sans">
      
      <div className="absolute top-1/4 -left-1/10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 -right-1/10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse duration-8000" />

      
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative z-10 transition-all duration-300 hover:border-white/15">
        
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white tracking-wide">
            SKILL<span className="text-blue-500 font-medium">LABS</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Administrator Portal Access
          </p>
        </div>

        {loginError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-center">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-2">
            <label htmlFor="login-email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@gmail.com"
                className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
              />
            </div>
          </div>

          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="login-password" className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                Password
              </label>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white placeholder-slate-500 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          

          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-98 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Authenticating...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/"
            className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4"
          >
            Back to Public Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
