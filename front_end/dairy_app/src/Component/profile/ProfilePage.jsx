import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../Service/apiService';

const ProfilePage = () => {
    const [farmer, setFarmer] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFarmerProfile = async () => {
            try {
                const response = await apiService.getFarmerProfile();
                // Fetch user bookings using the fetched user ID
                const farmerPlusBookings = await apiService.getFarmerBookings(response.farmer.id);
                setFarmer(farmerPlusBookings.farmer)

            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchFarmerProfile();
    }, []);

    const handleLogout = () => {
        apiService.logout();
        navigate('/home');
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="profile-page">
            {farmer && <h2>Welcome, {farmer.name}</h2>}
            <div className="profile-actions">
                <button className="edit-profile-button" onClick={handleEditProfile}>Edit Profile</button>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            {farmer && (
                <div className="profile-details">
                    <h3>My Profile Details</h3>
                    <p><strong>Email:</strong> {farmer.email}</p>
                    <p><strong>Phone Number:</strong> {farmer.phoneNumber}</p>
                </div>
            )}
            <div className="bookings-section">
                <h3>My Booking History</h3>
                <div className="booking-list">
                    {farmer && farmer.bookings.length > 0 ? (
                        farmer.bookings.map((booking) => (
                            <div key={booking.id} className="booking-item">
                                <p><strong>Booking Code:</strong> {booking.recordConfirmationCode}</p>
                                <p><strong>Check-in Date:</strong> {booking.checkInDate}</p>
                                <p><strong>Check-out Date:</strong> {booking.checkOutDate}</p>
                                
                                <p><strong>Room Type:</strong> {booking.location.locationType}</p>
                                <img src={booking.location.locationPhotoUrl} alt="Room" className="location-photo" />
                            </div>
                        ))
                    ) : (
                        <p>No bookings found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;