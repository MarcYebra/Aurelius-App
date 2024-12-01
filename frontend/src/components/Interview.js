import React, { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import axios from '../api/axios';

const Interview = ({ interviewId }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const {
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`/interviews/${interviewId}`);
        setQuestions(response.data.questions_and_answers);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching questions:', err);
      }
    };

    fetchQuestions();
  }, [interviewId]);

  const handleSubmitRecording = async () => {
    try {
      const audioBlob = await fetch(mediaBlobUrl).then((res) => res.blob());

      const formData = new FormData();
      formData.append('audio', audioBlob);

      const questionId = questions[currentQuestionIndex].id;
      await axios.post(`/questions_and_answers/${questionId}/transcribe`, formData);

      alert('Answer recorded and submitted successfully!');
    } catch (err) {
      console.error('Error submitting the recording:', err);
      alert('There was an error submitting your answer.');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Interview complete! Thank you!');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Interview</h1>
      <p>Question {currentQuestionIndex + 1}:</p>
      <h2>{questions[currentQuestionIndex].question}</h2>

  
      <div style={{ marginTop: '20px' }}>
        <button onClick={startRecording} style={{ padding: '10px 20px' }}>
          Start Recording
        </button>
        <button onClick={stopRecording} style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Stop Recording
        </button>
      </div>

      {mediaBlobUrl && (
        <div style={{ marginTop: '20px' }}>
          <audio src={mediaBlobUrl} controls />
          <button onClick={handleSubmitRecording} style={{ padding: '10px 20px', marginLeft: '10px' }}>
            Submit Answer
          </button>
        </div>
      )}

      <button onClick={handleNextQuestion} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Next Question
      </button>
    </div>
  );
};

export default Interview;
