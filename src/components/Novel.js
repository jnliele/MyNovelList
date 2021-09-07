import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Novel = ({
  id,
  novelname,
  author,
  status,
  chapter,
  date,
  handleRemoveNovel
}) => {
    const history = useHistory();
    return (
        <Card style={{ width: '18rem' }} className="novel">
        <Card.Body>
            <Card.Title className="novel-title">{novelname}</Card.Title>
            <div className="novel-details">
            <div>Author: {author}</div>
            <div>Chapter: {chapter} </div>
            <div>Status: {status} </div>
            <div>Date: {new Date(date).toDateString()}</div>
            </div>
            <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
            <Button variant="danger" onClick={() => handleRemoveNovel(id)}>
            Delete
            </Button>
        </Card.Body>
        </Card>
    );
};

export default Novel;