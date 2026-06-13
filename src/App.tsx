import { Suspense } from "react";
import "./App.css";
import CommonLayout from "./components/layout/CommonLayout";
import { Outlet } from "react-router";
import { Loader2 } from "lucide-react";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <CommonLayout>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-32 bg-transparent min-h-[50vh]">
              <Loader2 className="w-10 h-10 animate-spin text-orange-500" />
            </div>
          }
        >
          <Outlet />
          <Footer />
        </Suspense>
      </CommonLayout>
    </>
  );
}

export default App;
