//components

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";



export default function RootLayout() {
const {pathname} = useLocation()



  return (
    <div className="RootLayout">
      <header>
      <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
