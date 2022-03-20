import React from 'react';
import './Countries.css'

const Countries = (props) => {
    // console.log(props.country);
   const {area, name, region, flags} = props.country
    return (
        <div className='country bg-warning'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Countries;