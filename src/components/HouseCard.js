import React from 'react';
import styled from 'styled-components';

  
const Card = styled.div`
grid-column: span 1;
padding: 1em;
box-shadow: 0px 3px 6px rgba(5,36,36,0.1);`



const HouseCard = (props) => {

    // const getImage = (id) => {
    //     const key = 'AIzaSyDwlNhKFu4vePr_9fYSnJCMZtWXZyioSWk'
    //     const baseURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id='+ id + '&fields=photos&key=' + key;
    //     const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    //     fetch(proxyURL + baseURL)
    //     .then(data => data.json())
    //     .then(res => {
    //         if (res.result.photos[0].photo_reference){
    //             return ("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + res.result.photos[0].photo_reference +  "&key=" + key)
    //         } else {
    //             return ("data:image/png;base64,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")
    //         }
    //     })
    //     .catch(err => console.log('Could not get place info:' + err))
    // }

    
    const test = (id) => {
        return ("data:image/png;base64,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")
    }
    const house = props.house.fields;

    console.log(house)
    return (
        <Card>
        <h3>{house.Name}</h3>
        <p>{house.Rent}</p>
        <p>{house["Sqft."]}</p>
        {house.PlaceID ? <img alt={house.Name} src={test(house.PlaceID)} /> : <div>Loading images....</div>}
      </Card>
    )
}

export default HouseCard