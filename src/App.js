import React, {Component} from 'react'
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component{

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>
        response.json())
          .then(users=> this.setState({monsters: users}))
  }


  handleChange = e => {
    this.setState({searchField:e})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return(
      <div className="App">
        <h1 className="title">Monsters rolodex</h1>
        <SearchBar type='search' placeholder='Search for a monster' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
