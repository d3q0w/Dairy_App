import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../Service/apiService';


const AddLocationPage = () => {
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
    const [locationTypes, setLocationTypes] = useState([]);
    const [newLocationType, setNewLocationType] = useState(false);


    useEffect(() => {
        const fetchLocationTypes = async () => {
            try {
                const types = await apiService.getLocationTypes();
                setLocationTypes(types);
            } catch (error) {
                console.error('Error fetching location types:', error.message);
            }
        };
        fetchLocationTypes();
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocationDetails(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleLocationTypeChange = (e) => {
        if (e.target.value === 'new') {
            setNewLocationType(true);
            setLocationDetails(prevState => ({ ...prevState, locationType: '' }));
        } else {
            setNewLocationType(false);
            setLocationDetails(prevState => ({ ...prevState, locationType: e.target.value }));
        }
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


    const addLocation = async () => {
        if (!locationDetails.locationType || !locationDetails.locationDescription) {
            setError('All location details must be provided.');
            setTimeout(() => setError(''), 5000);
            return;
        }

        if (!window.confirm('Do you want to add this location?')) {
            return
        }

        try {
            const formData = new FormData();
            formData.append('locationType', locationDetails.locationType);
            
            formData.append('locationDescription', locationDetails.locationDescription);

            if (file) {
                formData.append('photo', file);
            }

            const result = await apiService.addLocation(formData);
            if (result.statusCode === 200) {
                setSuccess('Location Added successfully.');
                
                setTimeout(() => {
                    setSuccess('');
                    navigate('/admin/manage-locations');
                }, 3000);
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
            setTimeout(() => setError(''), 5000);
        }
    };

    return (
        <div className="edit-location-container">
            <h2>Add New Location</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <div className="edit-location-form">
                <div className="form-group">
                    {preview && (
                        <img src={preview} alt="Location Preview" className="location-photo-preview" />
                    )}
                    <input
                        type="file"
                        name="locationPhoto"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="form-group">
                    <label>Location Type</label>
                    <select value={locationDetails.locationType} onChange={handleLocationTypeChange}>
                        <option value="">Select a location type</option>
                        {locationTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                        <option value="new">Other (please specify)</option>
                    </select>
                    {newLocationType && (
                        <input
                            type="text"
                            name="locationType"
                            placeholder="Enter new location type"
                            value={locationDetails.locationType}
                            onChange={handleChange}
                        />
                    )}
                </div>
               
                <div className="form-group">
                    <label>Location Description</label>
                    <textarea
                        name="locationDescription"
                        value={locationDetails.locationDescription}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button className="update-button" onClick={addLocation}>Add Location</button>
            </div>
        </div>
    );
};

export default AddLocationPage;