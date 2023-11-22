import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase/client";
import { useAuth } from "../context/AuthProvider";
import logo2 from "../images/brand communication-amico.png"

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

  const handleUpdate = async () => {
    try {
      const { data, error } = await supabase.from('Users').update({
        skill: formData.skill,
        contact: formData.phone,
        experience: formData.experience,
        name: formData.name,
      }).eq('id', user.id);

      if (error) {
        console.error('Error updating user:', error);
        return;
      }

      console.log('User updated:', data);
    } catch (error) {
      console.error('Error updating user:', error.message);
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
    <div style={{ backgroundColor: '#2b3035', minHeight: '100vh', padding: '50px', color: '#fff', display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        {/* Replace 'imagePath' with the path to your image */}
        <img src={logo2} alt="LeftImage" style={{ maxWidth: '100%', height: '85%' }} />
      </div>

      <div style={{ flex: 2, maxWidth: '700px', padding: '30px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px',fontFamily:'poppins,sans-serif' }}>VOLUNTEER REGISTRATION</h2>
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary" style={{background:'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
              Register Me
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleUpdate} style={{background:'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerRegistrationForm;
