import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import apiService from '../../Service/apiService';

const LocationSearch = ({ handleSearchResult }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [locationType, setLocationType] = useState('');
  const [locationTypes, setLocationTypes] = useState([]);
  const [error, setError] = useState('');

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

  /**This methods is going to be used to show errors */
  const showError = (message, timeout = 5000) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, timeout);
  };

  /**THis is going to be used to fetch avaailabe locations from database base on seach data that'll be passed in */
  const handleInternalSearch = async () => {
    if (!startDate || !endDate || !locationType) {
      showError('Please select all fields');
      return false;
    }
    try {
      // Convert startDate to the desired format
      const formattedStartDate = startDate ? startDate.toISOString().split('T')[0] : null;
      const formattedEndDate = endDate ? endDate.toISOString().split('T')[0] : null;
      // Call the API to fetch available locations
      const response = await apiService.getAvailableLocationsByDateAndType(formattedStartDate, formattedEndDate, locationType);

      // Check if the response is successful
      if (response.statusCode === 200) {
        if (response.locationList.length === 0) {
          showError('Location not currently available for this date range on the selected location type.');
          return
        }
        handleSearchResult(response.locationList);
        setError('');
      }
    } catch (error) {
      showError("Unown error occured: " + error.response.data.message);
    }
  };

  return (
    <section>
      <div className="search-container">
        <div className="search-field">
          <label>Check-in Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Check-in Date"
          />
        </div>
        <div className="search-field">
          <label>Check-out Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select Check-out Date"
          />
        </div>

        <div className="search-field">
          <label>Location Type</label>
          <select value={locationType} onChange={(e) => setLocationType(e.target.value)}>
            <option disabled value="">
              Select Location Type
            </option>
            {locationTypes.map((locationType) => (
              <option key={locationType} value={locationType}>
                {locationType}
              </option>
            ))}
          </select>
        </div>
        <button className="home-search-button" onClick={handleInternalSearch}>
          Search Locations
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default LocationSearch;