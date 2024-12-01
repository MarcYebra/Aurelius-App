import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const JobDescriptionForm = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/interviews', {
        job_description: jobDescription,
      });

      navigate(`/interviews/${response.data.id}`);
    } catch (err) {
      setError('Error generating interview. Please try again.');
    }
  };

  return (
    <div className='job-description-form-container' >
      <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className='job-description-form-textarea'
          />
        <button type="submit" className='generate-button GIB'>
          Generate Interview
        </button>
      </form>
      <br />
      <div className='job-description-form-error'>
        {error && <p style={{ color: 'white' }}>{error}</p>}
      </div>
    </div>
  );
};

export default JobDescriptionForm;
