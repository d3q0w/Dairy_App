import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import apiService from '../../Service/apiService';

const LocationResult = ({ locationSearchResults }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const isAdmin = apiService.isAdmin();
    return (
        <section className="location-results">
            {locationSearchResults && locationSearchResults.length > 0 && (
                <div className="location-list">
                    {locationSearchResults.map(location => (
                        <div key={location.id} className="location-list-item">
                            <img className='location-list-item-image' src={location.locationPhotoUrl} alt={location.locationType} />
                            <div className="location-details">
                                <h3>{location.locationType}</h3>
                                <p>Name: ${location.locationName} / night</p>
                                <p>Description: {location.locationDescription}</p>
                            </div>

                            <div className='book-now-div'>
                                {isAdmin ? (
                                    <button
                                        className="edit-location-button"
                                        onClick={() => navigate(`/admin/edit-location/${location.id}`)} // Navigate to edit location with location ID
                                    >
                                        Edit Location
                                    </button>
                                ) : (
                                    <button
                                        className="book-now-button"
                                        onClick={() => navigate(`/location-details-book/${location.id}`)} // Navigate to book location with location ID
                                    >
                                        View/Book Now
                                    </button>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default LocationResult;