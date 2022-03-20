import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, region, flags} = props.country
    // console.log(props.country);
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Region: {region}</h4>
            <h4>Population: {population}</h4>
            <h5>Area: {area}</h5>
        </div>
    );
};

export default Country;