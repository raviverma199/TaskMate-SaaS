import Signup from "./pages/signup";
import IntroPage from "./pages/intropage";

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
    </Routes>
      </Router>
  );
}

export default App;
