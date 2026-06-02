import "./App.css";
import CommonLayout from "./components/layout/CommonLayout";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </>
  );
}

export default App;
