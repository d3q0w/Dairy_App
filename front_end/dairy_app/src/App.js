

// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Component/Common/Navbar';
import FooterComponent from './Component/Common/Footer';
import LoginPage from './Component/auth/Login';
import RegisterPage from './Component/auth/Register';
import HomePage from './Component/home/homePage';
import AllLocations from './Component/booking/AllLocations';
import LocationDetails from './Component/booking/FindBooking';
import FindBookingPage from './Component/booking/FindBooking';
import AdminPage from './Component/admin/AdminPage';
import EditLocationPage from './Component/admin/EditLocationPage';
import AddLocationPage from './Component/admin/AddLocationPage';
import ManageLocationsPage from './Component/admin/ManageLocationsPage';
import EditBookingPage from './Component/admin/EditBookingPage';
import ProfilePage from './Component/profile/ProfilePage';
import EditProfilePage from './Component/profile/EditProfilePage';
import { ProtectedRoute, AdminRoute } from './Service/guard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/locations" element={<AllLocations />} />
            <Route path="/find-booking" element={<FindBookingPage />} />

            {/* Protected Routes */}
            <Route path="/location-details-book/:locationId"
              element={<ProtectedRoute element={<LocationDetails />} />}
            />
            <Route path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route path="/edit-profile"
              element={<ProtectedRoute element={<EditProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route path="/admin/manage-locations"
              element={<AdminRoute element={<ManageLocationsPage />} />}
            />
            <Route path="/admin/edit-location/:locationId"
              element={<AdminRoute element={<EditLocationPage />} />}
            />
            <Route path="/admin/add-location"
              element={<AdminRoute element={<AddLocationPage />} />}
            />
            <Route path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageLocationsPage />} />}
            />
            <Route path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
