import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiService from '../../Service/apiService';
import DatePicker from 'react-datepicker';

const LocationDetailsPage = () => {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const [locationDetails, setLocationDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [farmerId, setFarmerId] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [recordConfirmationCode, setConfirmationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8087/locations/types', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          mode: 'cors',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch location details');
        }

        const data = await response.json();
        setLocationDetails(data.location);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [locationId]);

  const handleConfirmBooking = async () => {
    if (!checkInDate || !checkOutDate) {
      setErrorMessage('Please select check-in and check-out dates.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
  };

  if (isLoading) return <p>Loading location details...</p>;
  if (error) return <p>{error}</p>;
  if (!locationDetails) return <p>Location not found.</p>;

  return (
    <div className="location-details-booking">
      {showMessage && (
        <p>Booking successful! Confirmation code: {recordConfirmationCode}</p>
      )}
      {errorMessage && <p>{errorMessage}</p>}
      <h2>Location Details</h2>
      <button onClick={() => setShowDatePicker(true)}>Book Now</button>
      {showDatePicker && (
        <DatePicker selected={checkInDate} onChange={setCheckInDate} />
      )}
      <button onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default LocationDetailsPage;
