import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../../Service/apiService';

const EditLocationPage = () => {
    const { locationId } = useParams();
    const navigate = useNavigate();
    const [locationDetails, setLocationDetails] = useState({
        locationPhotoUrl: '',
        locationType: '',
       
        locationDescription: '',
    });
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchLocationDetails = async () => {
            try {
                const response = await apiService.getLocationById(locationId);
                setLocationDetails({
                    locationPhotoUrl: response.location.locationPhotoUrl,
                    locationType: response.location.locationType,
                    locationDescription: response.location.locationDescription,
                });
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };
        fetchLocationDetails();
    }, [locationId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocationDetails(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        } else {
            setFile(null);
            setPreview(null);
        }
    };


    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append('locationType', locationDetails.locationType);
            formData.append('locationDescription', locationDetails.locationDescription);

            if (file) {
                formData.append('photo', file);
            }

            const result = await apiService.updateLocation(locationId, formData);
            if (result.statusCode === 200) {
                setSuccess('Location updated successfully.');
                
                setTimeout(() => {
                    setSuccess('');
                    navigate('/admin/manage-locations');
                }, 3000);
            }
            setTimeout(() => setSuccess(''), 5000);
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Do you want to delete this location?')) {
            try {
                const result = await apiService.deleteLocation(locationId);
                if (result.statusCode === 200) {
                    setSuccess('Location Deleted successfully.');
                    
                    setTimeout(() => {
                        setSuccess('');
                        navigate('/admin/manage-locations');
                    }, 3000);
                }
            } catch (error) {
                setError(error.response?.data?.message || error.message);
                setTimeout(() => setError(''), 5000);
            }
        }
    };

    return (
        <div className="edit-location-container">
            <h2>Edit Location</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <div className="edit-location-form">
                <div className="form-group">
                    {preview ? (
                        <img src={preview} alt="Location Preview" className="location-photo-preview" />
                    ) : (
                        locationDetails.locationPhotoUrl && (
                            <img src={locationDetails.locationPhotoUrl} alt="Location" className="location-photo" />
                        )
                    )}
                    <input
                        type="file"
                        name="locationPhoto"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="form-group">
                    <label>Location Type</label>
                    <input
                        type="text"
                        name="locationType"
                        value={locationDetails.locationType}
                        onChange={handleChange}
                    />
                </div>
        
                <div className="form-group">
                    <label>Location Description</label>
                    <textarea
                        name="locationDescription"
                        value={locationDetails.locationDescription}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button className="update-button" onClick={handleUpdate}>Update Location</button>
                <button className="delete-button" onClick={handleDelete}>Delete Location</button>
            </div>
        </div>
    );
};

export default EditLocationPage;