import React from 'react';

const ShoppingList = (props)=> (  	  
        <ol className="item-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
)

export default ShoppingList;