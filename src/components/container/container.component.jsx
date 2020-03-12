import React, { useState, useContext } from 'react';
import './container.style.scss';

import { Card } from '../card/card.component';
import { ComparisonTable } from '../comparison-table/comparison.table.component';
import { Modal } from '../modal/modal.component';
import { AttributesList } from '../attributes-list/attributes-list.component';

import { AttributeContext } from '../../context/attributes.context';

const PRODUCTS = require('../../product/product.json');


export const Container = () => {

    const [showModal, setShowModal] = useState(false);

    const { allAttributes, selectedProductIds, activeAttributes, replaceActiveAttributes, addProductForComparison, removeProduct } = useContext(AttributeContext);

    const [tempSelectedAttributes, setTempSelectedAttributes] = useState(activeAttributes);

    const handleChange = function (event) {
        const { name, checked } = event.target;
        if (checked) {
            if (name === 'all') {
                setTempSelectedAttributes(allAttributes);
                return;
            }
            setTempSelectedAttributes([...tempSelectedAttributes, name]);
        }
        else {
            if (name === 'all') {
                setTempSelectedAttributes([]);
                return;
            }
            setTempSelectedAttributes(tempSelectedAttributes.filter(attribute => attribute !== name));
        }
    }


    const comparisonAction = function (id) {
        if (selectedProductIds.indexOf(id) > -1) {
            removeProduct(id);
        } else {
            addProductForComparison(id);
        }
    }

    const updateAttributes = function () {
        replaceActiveAttributes(tempSelectedAttributes);
        setShowModal(false);
    }

    return (
        <div>
            <div className='header'>
                <h1> PRODUCTS </h1>
                <div className='button' onClick={() => setShowModal(true)}>
                    Modify Attributes
                </div>
            </div>
            <div className='product-container'>
                {PRODUCTS.map(product => {
                    if (selectedProductIds.indexOf(product.id) > -1)
                        return <Card product={product} selected comparisonAction={comparisonAction} />
                    else
                        return <Card product={product} comparisonAction={comparisonAction} />
                }
                )}
            </div>
            <ComparisonTable products={PRODUCTS.filter(product => selectedProductIds.indexOf(product.id) > -1)} attributes={activeAttributes} />
            <Modal
                show={showModal}
                close={() => setShowModal(false)}
                title='Modify Comparison Attributes'
                save={updateAttributes}
            >
                <AttributesList tempSelectedAttributes={tempSelectedAttributes} handleChange={handleChange} />
            </Modal>
        </div>
    )
}
