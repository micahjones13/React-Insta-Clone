import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar /> 
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