import React from 'react';
import './card.style.scss';

export const Card = (props) => {

    const { image, name, description, price, id } = props.product;
    const isSelected = props.selected;

    return (
        <div className='card-container'>
            <div className='img-container'>
                <div style={{ display: isSelected ? 'block' : 'none' }} className='hover-overlay'>
                </div>
                <img className='product-img' src={image} alt='' />
                <div class='hover-button' onClick={() => props.comparisonAction(id)}>
                    {isSelected ? 'Remove' : 'Compare'}
                </div>
            </div>
            <div className='card-info'>
                <div className='product-info'>
                    <span className='product-name'> {name} </span>
                    <span className='product-price'> {price} </span>
                </div>
                <div className='product-desc'>
                    <span> {description} </span>
                </div>
            </div>
        </div>
    )
}
