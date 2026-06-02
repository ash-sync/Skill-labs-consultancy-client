import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}

interface AuthState {
  user: IUser | null;
  token: string | null;
}

const initialState: AuthState = {
  user: localStorage.getItem("auth_user")
    ? JSON.parse(localStorage.getItem("auth_user")!)
    : null,
  token: localStorage.getItem("auth_token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: IUser | null; token: string | null }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      if (action.payload.token) {
        localStorage.setItem("auth_token", action.payload.token);
      } else {
        localStorage.removeItem("auth_token");
      }
      if (action.payload.user) {
        localStorage.setItem("auth_user", JSON.stringify(action.payload.user));
      } else {
        localStorage.removeItem("auth_user");
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
