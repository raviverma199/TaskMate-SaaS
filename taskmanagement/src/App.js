import Signup from "./pages/signup";
import IntroPage from "./pages/intropage";
import Dashboard from "./pages/dashboard";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={< Dashboard />}></Route>
    </Routes>
      </Router>
  );
}

export default App;
