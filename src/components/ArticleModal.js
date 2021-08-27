import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';

const ArticleButton = styled.button`
  box-shadow: 0px -10px 0px rgba(247, 179, 116, 0.7) inset;
  border: none;
  background: transparent;
  color: #4f4f4a;
  font-weight: bold;
  font-size: 1rem;
  &:hover{
    background-color: #f9f9ff;
  }
`
export default function ArticleModal(props) {
    const article = props.article;
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <React.Fragment>
        <ArticleButton onClick={handleShow}>
          Read more
        </ArticleButton>
  
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
    <Modal.Title>{article.name}</Modal.Title>
          </Modal.Header>
    <Modal.Body>{article.preview}</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger"  onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
