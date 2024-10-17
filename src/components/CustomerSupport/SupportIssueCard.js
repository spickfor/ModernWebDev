// SupportIssueCard.js
// a card that will display our individual issues in our customer support page
import React from 'react';
import './SupportIssueCard.css'; // Import CSS for styling the card

const SupportIssueCard = ({ issue }) => {
    return (
        <div className="issue-card">
            <h2>{issue.name}</h2>
            <p><strong>Description:</strong> {issue.description}</p>
            <p><strong>Status:</strong> <span className={issue.status === 'Resolved' ? 'status-resolved' : 'status-pending'}>{issue.status}</span></p>
        </div>
    );
};

export default SupportIssueCard;
