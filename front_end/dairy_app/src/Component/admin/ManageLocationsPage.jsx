import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../../Service/apiService';
import Pagination from '../Common/Pagination';
import LocationResult from '../Common/LocationResult';

const ManageLocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [locationTypes, setLocationTypes] = useState([]);
  const [selectedLocationType, setSelectedLocationType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [locationsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await apiService.getAllLocations();
        const allLocations = response.locationList;
        setLocations(allLocations);
        setFilteredLocations(allLocations);
      } catch (error) {
        console.error('Error fetching locations:', error.message);
      }
    };

    const fetchLocationTypes = async () => {
      try {
        const types = await apiService.getLocationTypes();
        setLocationTypes(types);
      } catch (error) {
        console.error('Error fetching location types:', error.message);
      }
    };

    fetchLocations();
    fetchLocationTypes();
  }, []);

  const handleLocationTypeChange = (e) => {
    setSelectedLocationType(e.target.value);
    filterLocations(e.target.value);
  };

  const filterLocations = (type) => {
    if (type === '') {
      setFilteredLocations(locations);
    } else {
      const filtered = locations.filter((location) => location.locationType === type);
      setFilteredLocations(filtered);
    }
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Pagination
  const indexOfLastLocation = currentPage * locationsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
  const currentLocations = filteredLocations.slice(indexOfFirstLocation, indexOfLastLocation);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='all-locations'>
      <h2>All Locations</h2>
      <div className='all-location-filter-div' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='filter-select-div'>
          <label>Filter by Location Type:</label>
          <select value={selectedLocationType} onChange={handleLocationTypeChange}>
            <option value="">All</option>
            {locationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button className='add-location-button' onClick={() => navigate('/admin/add-location')}>
            Add Location
          </button>
        </div>
      </div>

      <LocationResult locationsSearchResults={currentLocations} />

      <Pagination
        locationsPerPage={locationsPerPage}
        totalLocations={filteredLocations.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default ManageLocationsPage;