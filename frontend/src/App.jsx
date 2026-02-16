import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import { Home } from './pages/public/Home';
import { Login } from './pages/public/Login';
import { Register } from './pages/public/Register';
import { Programs } from './pages/public/Programs';
import { Admissions } from './pages/public/Admissions';
import { Contact } from './pages/public/Contact';
import { Gallery } from './pages/public/Gallery';

import { About } from './pages/public/About';

import { AuthProvider } from './context/AuthContext';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminLogin } from './pages/admin/AdminLogin';
import { ParentDashboard } from './pages/parent/ParentDashboard';

// Placeholder components for those not yet implemented
// They will be implemented in the next steps
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <h1 className="text-4xl text-sunshine font-display font-bold">{title} Page</h1>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          {/* Protected Routes */}
          <Route path="/admin-portal" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
