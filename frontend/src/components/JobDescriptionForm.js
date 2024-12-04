import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobDescriptionForm = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/interviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          job_description: jobDescription,
        }),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        navigate(`/interviews/${data.id}`);
      } else {
        setError('Error generating interview. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting job description:', err);
      setError('Error generating interview. Please try again.');
    }
  };

  return (
    <div className='job-description-form-container'>
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
