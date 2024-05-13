import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Skills from "./pages/skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogDetail from "./pages/blogdetail";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard/dashboard";
import BlogDashboard from "./pages/dashboard/blogDashboard";
import UserDashboard from "./pages/dashboard/user";



function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      {/* <h1 >hello</h1> */}
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/portofolio" element={<Portfolio />} />
            <Route path="/dashboard/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/blogdashboard" element={<BlogDashboard />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/blogdetail/:id" element={<BlogDetail />} />
            <Route path="*" element={<h3>PAGE NOT FOUND</h3>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
