import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
constructor(){
  super();

  this.state= {
    bikes:[],
    searchField:''
   
};

}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({bikes: users}));
}

handleChange = (e) => {
  this.setState({searchField: e.target.value})
}
  
  render() {
    const {bikes, searchField } = this.state;
 
    const filteredMonsters =bikes.filter(bike=>
      bike.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
    
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox
    placeholder ='Search Monsters' 
    handleChange={this.handleChange}
    />
      <CardList bikes ={filteredMonsters}/>    
    
    
    </div>
    );
  }
}

export default App;
