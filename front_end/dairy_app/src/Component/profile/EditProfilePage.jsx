import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../Service/apiService';

const EditProfilePage = () => {
    const [farmer, setFarmer] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFarmerProfile = async () => {
            try {
                const response = await apiService.getFarmerProfile();
                setFarmer(response.farmer);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchFarmerProfile();
    }, []);

    const handleDeleteProfile = async () => {
        if (!window.confirm('Are you sure you want to delete your account?')) {
            return;
        }
        try {
            await apiService.deleteFarmer(farmer.id);
            navigate('/signup');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="edit-profile-page">
            <h2>Edit Profile</h2>
            {error && <p className="error-message">{error}</p>}
            {farmer && (
                <div className="profile-details">
                    <p><strong>Name:</strong> {farmer.name}</p>
                    <p><strong>Email:</strong> {farmer.email}</p>
                    <p><strong>Phone Number:</strong> {farmer.phoneNumber}</p>
                    <button className="delete-profile-button" onClick={handleDeleteProfile}>Delete Profile</button>
                </div>
            )}
        </div>
    );
};

export default EditProfilePage;