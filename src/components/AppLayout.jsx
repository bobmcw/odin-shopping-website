import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [cart, setCart] = useState({})
  return (
    <>
      <Navbar />
      <Outlet context={[cart, setCart]}/>
    </>
  );
}
export default AppLayout;
