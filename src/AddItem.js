import React, { Component } from "react";

class AddItem extends Component {
   state = {
    value: ''
  };
  
  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };
  
  addNewItem = event =>{
    event.preventDefault();
    this.props.addItem(this.state.value);    
  }
  
   inputIsEmpty = () => {
    return this.state.value === '';
  };
  
  render(){
    const newValue = this.state.value    
    return(
         <form onSubmit={this.addNewItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={newValue}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
    )
  }  
}

export default AddItem;