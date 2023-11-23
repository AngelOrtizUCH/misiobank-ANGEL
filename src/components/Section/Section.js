import React from 'react';
import '../Section/Section.css'

const Section = ({ transactions }) => {
    return (
    <div className='section'>
        <h2 className='h2-section'>Transacciones</h2>
        <ul className='ul-section'>
            <li className='li-section'>Compra por internet: Tantrico   $535.66</li>
            <li className='li-section'>Donacion: Spot publicitario Milei $304.33</li>
        </ul>
    </div>
    );
};

export default (Section);