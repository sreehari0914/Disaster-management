import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import DisasterDetailsList1 from '../components/Card';
import { FaSearch } from 'react-icons/fa';

function DisasterDetailsList() {
  const storedBackgroundColor = localStorage.getItem('backgroundColor') || '#2b3035';
  const [backgroundColor, setBackgroundColor] = useState(storedBackgroundColor);
  const [disasterDetails, setDisasterDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('time');
  const [sortDirection, setSortDirection] = useState('asc');

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

  useEffect(() => {
    localStorage.setItem('backgroundColor', backgroundColor);
  }, [backgroundColor]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (option) => {
    if (option === sortOption) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
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
    const comparison = sortDirection === 'asc' ? 1 : -1;
    return a[sortOption] > b[sortOption] ? comparison : -comparison;
  });

  return (
    <div style={{ backgroundColor,background:'#2b3035',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '10px', display: 'flex', gap: '20px' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <FaSearch style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search by state or type of disaster"
            value={searchTerm}
            onChange={handleSearch}
            style={{ paddingLeft: '30px', backgroundColor: '#F0F0F0', color: '#333',borderRadius:'10px'}}
          />
        </div>
        <button onClick={() => handleSort('time')} style={{ backgroundColor: 'green', color: '#fff',borderRadius:'5px' }}>SORT BY TIME</button>
        <button onClick={() => handleSort('DII')} style={{ backgroundColor: 'green', color: '#fff',borderRadius:'5px' }}>SORT BY DII</button>
        <button onClick={() => handleDirectionChange('asc')} style={{ backgroundColor: 'green', color: '#fff',borderRadius:'5px' }}>ASC</button>
        <button onClick={() => handleDirectionChange('desc')} style={{ backgroundColor: 'green', color: '#fff',borderRadius:'5px' }}>DESC</button>
      </div>
      {sortedDisasters.map((disaster, index) => (
        <DisasterDetailsList1 key={index} disasterDetails={disaster} />
      ))}
    </div>
  );
}

export default DisasterDetailsList;
