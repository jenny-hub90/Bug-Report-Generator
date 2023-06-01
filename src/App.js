import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import BugForm from './components/BugForm';
import BugRecords from './components/BugRecords';
import BugRecord from './components/BugRecord';
import AllBugs from './components/AllBugs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bugForm" element={<BugForm />} />
        <Route path="/bugRecords" element={<BugRecords />} />
        <Route path="/record" element={<BugRecord />} />
        <Route path="/allBugs" element={<AllBugs />} />
      </Routes>
    </Router>
  );
}

export default App;
