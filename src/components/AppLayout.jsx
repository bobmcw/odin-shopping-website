import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [cart, setCart] = useState(new Map())
  useEffect(() => {
    console.log(cart);
  }, [cart])
  return (
    <>
      <Navbar />
      <Outlet context={[cart, setCart]} />
    </>
  );
}
export default AppLayout;
