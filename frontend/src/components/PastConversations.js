import React, { useEffect, useState } from 'react';

const PastConversations = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    fetch('/api/conversations')
      .then(response => response.json())
      .then(data => setConversations(data))
      .catch(error => console.error('Error fetching conversations:', error));
  }, []);

  return (
    <div className="conversations-container">
      <h2>Past Conversations</h2>
      {conversations.length === 0 ? (
        <p>No past conversations found.</p>
      ) : (
        <ul className="conversations-list">
          {conversations.map(conversation => (
            <li key={conversation.id} className="conversation-item">
              <div>
                <strong>Date:</strong> {new Date(conversation.date).toLocaleString()}
              </div>
              <div>
                <strong>Interview Topic:</strong> {conversation.topic}
              </div>
              <button
                onClick={() => alert(`Viewing details for conversation ID: ${conversation.id}`)}
                className="view-details-button"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PastConversations;