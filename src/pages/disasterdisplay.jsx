import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import DisasterDetailsList1 from '../components/Card'; // Assuming this is the correct path
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons library

function DisasterDetailsList() {
  const [disasterDetails, setDisasterDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('time'); // Default sorting by time
  const [sortDirection, setSortDirection] = useState('asc'); // Default ascending order

  useEffect(() => {
    async function fetchDisasterData() {
      try {
        const { data, error } = await supabase.from('Disaster').select('*');

        if (error) {
          console.error('Error fetching disaster data:', error);
        } else {
          setDisasterDetails(data || []);
        }
      } catch (error) {
        console.error('Error fetching disaster data:', error.message);
      }
    }

    fetchDisasterData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (option) => {
    if (option === sortOption) {
      // Toggle between ascending and descending order
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set a new sort option and default to ascending order
      setSortOption(option);
      setSortDirection('asc');
    }
  };

  const handleDirectionChange = (direction) => {
    setSortDirection(direction);
  };

  const filteredDisasters = disasterDetails.filter(
    (disaster) =>
      disaster.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disaster.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedDisasters = filteredDisasters.sort((a, b) => {
    // Change 'time' and 'DII' with your actual property names
    const comparison = sortDirection === 'asc' ? 1 : -1;
    return a[sortOption] > b[sortOption] ? comparison : -comparison;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <div style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <FaSearch style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search by state or type of disaster"
            value={searchTerm}
            onChange={handleSearch}
            style={{ paddingLeft: '30px', backgroundColor: '#F0F0F0', color: '#333' }}
          />
        </div>
        <button onClick={() => handleSort('time')} style={{ backgroundColor: '#FF6347', color: '#fff' }}>SORT BY TIME</button>
        <button onClick={() => handleSort('DII')} style={{ backgroundColor: '#6A5ACD', color: '#fff' }}>SORT BY DII</button>
        <button onClick={() => handleDirectionChange('asc')} style={{ backgroundColor: '#32CD32', color: '#fff' }}>RECENT</button>
        <button onClick={() => handleDirectionChange('desc')} style={{ backgroundColor: '#1E90FF', color: '#fff' }}>OLD</button>
      </div>
      {sortedDisasters.map((disaster, index) => (
        <DisasterDetailsList1 key={index} disasterDetails={disaster} />
      ))}
    </div>
  );
}

export default DisasterDetailsList;
