import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase/client";
import { useAuth } from "../context/AuthProvider";

const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',

    experience: '',
    skill: '',
  });

  const { user } = useAuth();

  const skillOptions = [
    'First Aid',
    'CPR',
    'Search and Rescue',
    'Communication Skills',
    'Team Coordination',
    'Medical Training',
    'Logistics',
    'Shelter Management',
    'Psychological Support',
    'Food Distribution',
    'Water Supply Management',
    'Construction',
    'Transportation',
    'Language Translation',
    'Volunteer Management',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('Users').insert([
        {
          id: user.id,
          skill: formData.skill,
          contact: formData.phone,
          experience: formData.experience,
          name: formData.name,
         
        },
      ]);

      if (error) {
        console.error('Error adding user:', error);
        return;
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        experience: '',
        skill: '',
      });

      console.log('User added:', data);
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from('Users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user data:', error);
          return;
        }

        if (data) {
          setFormData({
            name: data.name || '',
            phone: data.contact || '',
            email: data.email || '',
            experience: data.experience || '',
            skill: data.skill || '',
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    if (user && user.id) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#2b3035',
        }}
      >
        <div
          className="container registration-container"
          style={{
            color: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 1.2)',
          }}
        >
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="mb-4">VOLUNTEER REGISTRATION</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
               
                <div className="mb-3">
                  <label htmlFor="experience" className="form-label">
                    Experience
                  </label>
                  <textarea
                    className="form-control"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="skill" className="form-label">
                    Skill
                  </label>
                  <select
                    className="form-select"
                    id="skill"
                    name="skill"
                    value={formData.skill}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a skill</option>
                    {skillOptions.map((skill, index) => (
                      <option key={index} value={skill}>
                        {skill}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegistrationForm;
