import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ColorLink } from './Typography'

const ProjectList = () => {
    return (
      <ListGroup>
        <ListGroupItem>
          <ColorLink>React [icon] [icon] [icon]</ColorLink>
        </ListGroupItem>
        <ListGroupItem>
          <ColorLink>GatsbyJS [icon] [icon] [icon]</ColorLink>
        </ListGroupItem>
        <ListGroupItem>
          <ColorLink>Shopify [icon] [icon] [icon]</ColorLink>
        </ListGroupItem>
      </ListGroup>
    )
}

export default ProjectList