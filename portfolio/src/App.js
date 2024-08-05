import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [sidebarPos, setSidebarPos] = useState("-300px");

  const openSidebar = () => setSidebarPos("0px");
  const closeSidebar = () => setSidebarPos("-300px");
  return (
    <div className="container">
      <Sidebar sidebarPos={sidebarPos} onClose={closeSidebar} />
      <Content openSidebar={openSidebar} />
    </div>
  );
}

export default App;
