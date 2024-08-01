import "./App.css";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
