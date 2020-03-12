import React from 'react';
import './comparison-table.style.scss';

export const ComparisonTable = (props) => {

    const {products, attributes} = props;

    const getListDisplayHelper = function(list) {
        return list.join(', ');
    }

    return (
        products && products.length>1? 
        <div className='table-container'>
            <div className='features'>
                <div className='top-info'>Features</div>
                <div className='features-list'>
                    {
                        attributes.map( attribute => 
                            <span style={{textTransform: 'capitalize'}}>
                                {attribute}
                            </span>
                        )
                    }
                </div>
            </div>

            {   
                products.map( (product) =>
                    <div className='features'>
                        <div className='top-info'>{product.name}</div>
                        <div className='features-list'>
                            {
                                attributes.map(attribute =>
                                    <span style={{ textTransform: 'capitalize' }}>
                                        {
                                            Array.isArray( product[attribute] ) ?
                                                getListDisplayHelper(product[attribute]) 
                                                    :
                                                product[attribute] || '-'
                                        }
                                    </span>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
            : 
        null
    )
}
