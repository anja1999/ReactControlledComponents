import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = (newItem) => {   
    console.log(newItem)
    this.setState(oldState => ({
      items: [...oldState.items, newItem],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };


  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<AddItem addItem={this.addItem}/>
		<DeleteItem noItemsFound={this.noItemsFound} deleteLastItem={this.deleteLastItem}/>
        <p className="items">Items</p>
		<ShoppingList items={this.state.items}/>     
      </div>
    );
  }
}

export default App;
