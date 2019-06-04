import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ''
    };
  }

  componentDidMount() {
    console.log('CDM');
    this.setState({
      data: dummyData
    })
  }

 
  search = e => {
    //filter the data array according the input of the seach bar. If the input matches, display the posts with that username
    e.preventDefault();
    let filteredData = [];
    let currentData = this.state.data;

    filteredData = currentData.filter(item => {
      const lc = item.username.toLowerCase();
      const filter = this.state.searchText.toLowerCase();

      return lc.includes(filter);
    })

    this.setState({
      data: filteredData
    });



  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  

  render() {
    return (
      <div className="App">
        <SearchBar 
        handleChanges = {this.handleChanges}
        value = {this.state.searchText}
        search = {this.search}
        /> 
        {
          this.state.data.map(item => {
              return(
                  <PostContainer
                      key = {item.id}
                      item={item}
                     
                  />
              )
          })
        }
        
      </div>
    );
  }
}

export default App;

// <PostContainer data = {this.state.data.map(item => {
//   return(item = {item})
// })} />


//<PostContainer data = {this.state.data} />