import React, { useEffect, useState } from 'react';
import Countries from '../countries/Countries';
import './Country.css'

const Country = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    return (
        <div >
            <h2>Hello from countries: {countries.length}</h2>
            
            <div className='Countries-container'>
            {
                countries.map(country => <Countries country={country} key={country.cca3}></Countries>)
            }
            </div>
        </div>
    );
};






export default Country;