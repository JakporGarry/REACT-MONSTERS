import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list-component';

import {SearchInput} from './components/search-input.component';

import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:"",
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) 
    .then(users => this.setState ({monsters:users}))  
  }

  render(){
    
    const {monsters, searchField} = this.state;
    const FilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className = "App">
      <h1>REACT MONSTERS</h1>
      <SearchInput placeholder= "search monsters" handleChange={e => this.setState({searchField: e.target.value})}/>
      <CardList monsters = {FilteredMonsters}>
      </CardList> 
      </div>

    )
  }
}
export default App;
