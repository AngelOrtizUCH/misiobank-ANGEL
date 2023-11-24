import React from 'react';
import '../Section/Section.css'

const Section = ({ transactions }) => {
    return (
        <div className='section'>
    <h2 className='h2-section'>Transacciones</h2>
    <ul className='ul-section'>
        <li className='li-section gasto'>Compra por internet: Tantrico   -$535.66</li>
        <li className='li-section ingreso'>Donacion: Spot publicitario Milei $304.33</li>
        <li className='li-section gasto'>Pago de factura de electricidad   -$120.50</li>
        <li className='li-section gasto'>Compra de comestibles en el supermercado   -$75.25</li>
        <li className='li-section gasto'>Retiro de efectivo en cajero automático   -$200.00</li>
        <li className='li-section gasto'>Pago de la membresía del gimnasio   -$45.99</li>
        <li className='li-section gasto'>Compra de libros en línea   -$68.20</li>
        <li className='li-section gasto'>Recarga de tarjeta de transporte público   -$30.00</li>
        <li className='li-section gasto'>Pago de factura de teléfono   -$50.75</li>
        <li className='li-section gasto'>Almuerzo en un restaurante local   -$25.50</li>
        <li className='li-section gasto'>Compra de ropa en una tienda de moda   -$90.00</li>
        <li className='li-section ingreso'>Suscripción mensual a servicio de streaming $12.99</li>
    </ul>
</div>

    
    );
};

export default (Section);