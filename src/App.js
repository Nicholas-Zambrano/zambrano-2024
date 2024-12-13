import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NewMember from "./components/NewMember";
import ExistingMember from "./components/ExistingMember";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-member" element={<NewMember />} />
        <Route path="/existing-member" element={<ExistingMember />} />
      </Routes>
    </Router>
  );
}

export default App;
