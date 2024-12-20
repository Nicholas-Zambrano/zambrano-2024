import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NewMember from "./components/NewMember";
import ExistingMember from "./components/ExistingMember";
import FamilyPage from "./components/FamilyPage";
import YanezFamily from "./components/YanezFamily";
import BustillosFamily from "./components/BustillosFamily";
import ReascosFamily from "./components/ReascosFamily";
import NacatosFamily from "./components/NacatosFamily";
import FernandezFamily from "./components/FernandezFamily";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-member" element={<NewMember />} />
        <Route path="/existing-member" element={<ExistingMember />} />
        <Route path="/family" element ={<FamilyPage/>} />
        <Route path="family/yanez" element={<YanezFamily/>}/>
        <Route path="family/bustillos" element={<BustillosFamily/>}/>
        <Route path="family/reascos" element={<ReascosFamily/>}/>
        <Route path="family/nacatos" element={<NacatosFamily/>}/>
        <Route path="family/fernandez" element={<FernandezFamily/>}/>
      </Routes>
    </Router>
  );
}

export default App;
