import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import BugForm from './components/BugForm';
import BugRecords from './components/BugRecords';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/BugForm" element={<BugForm />} />
        <Route path="/BugRecords" element={<BugRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
