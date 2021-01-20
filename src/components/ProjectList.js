import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ColorLink } from './Typography'

const ProjectList = () => {
    return (
      <ListGroup>
        <ListGroupItem>
          <ColorLink iconIsActive >React [icon] [icon] [icon]</ColorLink>
        </ListGroupItem>
        <ListGroupItem>
          <ColorLink iconIsActive >GatsbyJS [icon] [icon] [icon]</ColorLink>
        </ListGroupItem>
        <ListGroupItem>
          <ColorLink iconIsActive >Shopify [icon] [icon] [icon]</ColorLink>
        </ListGroupItem>
      </ListGroup>
    )
}

export default ProjectList