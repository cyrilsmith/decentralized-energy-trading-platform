import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/404';
import Welcome from './pages/Welcome'; // Import Welcome page

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Start with the Welcome page */}
        <Route path="/" element={<Welcome />} />

        {/* User authentication routes */}
        <Route path="/user/*" element={<UserLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Authenticated routes */}
        <Route path="/app" element={<BasicLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
