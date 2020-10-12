import React from 'react';

export default function JobDescription (props) {
    const list = props.list
    return (
        <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    )
}