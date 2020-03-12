import React, { createContext, useReducer } from 'react';
import RootReducer from '../reducer/root.reducer';

import { getAllComparisonProperties } from '../utils/utils';

const initialAttributes = getAllComparisonProperties();

const initialAttributesState = {
  activeAttributes: initialAttributes,
  allAttributes: initialAttributes,
  selectedProductIds: []
};

export const AttributeContext = createContext(initialAttributesState);

export const AttributesProvider = function({ children }) {
  const [state, dispatch] = useReducer(RootReducer, initialAttributesState);

  const replaceActiveAttributes = function(newActiveList) {
    dispatch({
      type: 'REPLACE_ACTIVE_ATTRIBUTE',
      payload: newActiveList
    });
  };

  const addProductForComparison = function(id) {
    dispatch({
        type: 'ADD_PRODUCT',
        payload: id
      });
  }

  const removeProduct = function(id) {
    dispatch({
        type: 'REMOVE_PRODUCT',
        payload: id
      });
  }

  return (
    <AttributeContext.Provider
      value={{
        allAttributes: state.allAttributes,
        activeAttributes: state.activeAttributes,
        selectedProductIds: state.selectedProductIds,
        replaceActiveAttributes,
        addProductForComparison,
        removeProduct
      }}
    >
      {children}
    </AttributeContext.Provider>
  );
};
