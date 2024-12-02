import Signup from "./pages/signup";
import IntroPage from "./pages/intropage";
import Dashboard from "./pages/dashboard";
import Sidebar from "./component/sidebar";
import Header from "./component/header";
import ProjectsPage from "./pages/project";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layout component for pages with Sidebar and Header
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

// Layout component for pages without Sidebar
const SimpleLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard with Sidebar */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        {/* Projects Page without Sidebar */}
        <Route
          path="/projects"
          element={
            <SimpleLayout>
              <ProjectsPage />
            </SimpleLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
