import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const NovelForm = (props) => {
  const [novel, setNovel] = useState(() => {
    return {
      novelname: props.novel ? props.novel.novelname : '',
      author: props.novel ? props.novel.author : '',
      chapter: props.novel ? props.novel.chapter : '',
      status: props.novel ? props.novel.status : '',
      date: props.novel ? props.novel.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { novelname, author, status, chapter } = novel;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [novelname, author, status, chapter];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const novel = {
        id: uuidv4(),
        novelname,
        author,
        status,
        chapter,
        date: new Date()
      };
      props.handleOnSubmit(novel);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'chapter':
        if (value === '' || parseInt(value) === +value) {
          setNovel((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setNovel((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Novel Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="novelname"
            value={novelname}
            placeholder="Enter name of novel"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Novel Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="chapter">
          <Form.Label>Chapter</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="chapter"
            value={chapter}
            placeholder="Enter chapters read"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Novel Status</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="status"
            value={status}
            placeholder="Enter reading status of novel"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NovelForm;