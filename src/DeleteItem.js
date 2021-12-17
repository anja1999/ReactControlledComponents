import React, { Component } from "react";

class DeleteItem extends Component {
  
   ondelete = event => {
    this.props.deleteLastItem();
  };
  
  render(){
   
    return (
      <button onClick={this.ondelete} disabled={this.props.noItemsFound()}>
          Delete Last Item
        </button>
    )
  }  
}
export default DeleteItem;