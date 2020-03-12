import React, { useState, useContext } from 'react';
import './attributeslist.style.scss';
import { AttributeContext } from '../../context/attributes.context';

export const AttributesList = (props) => {

    const { allAttributes } = useContext(AttributeContext);
    const [searchFieldVal, setSearchFieldVal] = useState('');

    return (
        <div>

            <input className='search-input' type='text' value={searchFieldVal} onChange={(e) => setSearchFieldVal(e.target.value)} />

            <div className='attributes-checkbox-container'>
                <label className='container'>Select All
                    <input
                        name='all'
                        type='checkbox'
                        checked={props.tempSelectedAttributes.length === allAttributes.length}
                        onChange={props.handleChange}
                    />
                    <span className='checkmark'></span>
                </label>
                {
                    allAttributes.filter(
                        attribute => attribute.includes(searchFieldVal.toLocaleLowerCase())
                    ).map(
                        attribute =>
                            <label className='container'>{attribute}
                                <input
                                    name={attribute}
                                    type='checkbox'
                                    checked={props.tempSelectedAttributes.indexOf(attribute) > -1}
                                    onChange={props.handleChange}
                                />
                                <span className='checkmark'></span>
                            </label>
                    )
                }
            </div>
        </div>
    )
}
