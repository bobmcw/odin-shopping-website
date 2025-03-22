import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [cart, setCart] = useState(new Map())
  return (
    <>
      <Navbar />
      <Outlet context={[cart, setCart]} />
    </>
  );
}
export default AppLayout;
