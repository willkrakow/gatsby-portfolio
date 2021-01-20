import React from 'react';
import { BioText } from './Typography';
import styled from 'styled-components';

const ListItem = styled.li`
    list-style: none;
    border-left: 5px solid teal;
    padding: 0.5em;
`

const JobDetail = styled.ul`
    padding-left: 1em;
`

export default function JobDescription (props) {
    const list = props.list
    return (
      <JobDetail>
        {list.map((item, index) => (
          <ListItem key={index}>
            <BioText>{item}</BioText>
          </ListItem>
        ))}
      </JobDetail>
    )
}