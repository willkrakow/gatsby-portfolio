import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HouseCard from '../components/HouseCard.js'
const Parent = styled.div`
margin: 50px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 100px;
grid-row-gap: 50px;`

const Houses = () => {

  const [houseOptions, setHouseOptions] = useState();

  const fetchAirtable = () => {
    fetch('https://api.airtable.com/v0/appBLeDFiLGP0A0gR/Housing?api_key=key50ZFiQWYsasdjS')
    .then((resp) => resp.json())
    .then((data) => {setHouseOptions(data.records)})
    .catch(err => {
      console.log(err)
      // Error :(
    });
  }


  useEffect(() => {
    fetchAirtable();
  }, []) 
    
  
return (
  <Parent>
    {houseOptions ? houseOptions.map((house, index) => (
      <HouseCard key={index} house={house} />
    )) : <p>loading</p>}
  </Parent>
)
}

export default Houses