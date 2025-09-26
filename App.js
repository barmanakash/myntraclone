import './App.css';
import GetHelp from './component/gethelp';
import LoginSignup from './component/loginsignup';
import Practice from './component/practice';
import Home from './component/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kids from './component/kids';



function App() {
  return (
    // <div>
    //   <Practice/>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/gethelp" element={<GetHelp />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/kids" element={<Kids />}/>
      </Routes>
    </Router>
  );
}

export default App;
