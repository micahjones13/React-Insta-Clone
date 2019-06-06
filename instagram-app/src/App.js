import React from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage.js';
import withAuthenticate from './components/authentication/withAuthenticate.js';
import LoginPage from './components/Login/Login';

import './App.css';

//HOC
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: '',
      
    };
  }

  componentDidMount() {
    console.log('CDM');
    this.setState({
      data: dummyData
    })
  }

 
  // search = e => {
  //   //filter the data array according the input of the seach bar. If the input matches, display the posts with that username
  //   let filtered = [];

  //     if(this.state.searchText !== '') {
  //       filtered = this.state.data.filter(item => {
  //         return(item.username.includes(this.state.searchText))
  //       });

  //       this.setState({
  //         data: filtered
  //       }) 
  //     } else {
  //       this.setState({ data: dummyData })
  //     }
    



  // }

  // handleChanges = e => {
  //   this.setState({
  //     //[e.target.name]
  //    searchText: e.target.value
  //   });

  //   let filtered = [];

  //     if(this.state.searchText !== '') {
  //       filtered = this.state.data.filter(item => {
  //         return(item.username.includes(this.state.searchText))
  //       });

  //       // this.setState({
  //       //   data: filtered
  //       // }) 
  //     } else {
  //       // this.setState({ data: dummyData })
  //       filtered = dummyData;
  //     }
  //     this.setState({
  //       data: filtered,
       
  //     }) 
  // }

  
  

  render() {
    return (
      <div className="App">
      
       <ComponentFromWithAuthenticate
          data = {this.state.data}
          handleChanges = {this.handleChanges}
          value = {this.state.searchText}
       />
        
      </div>
    );
  }
}

export default App;

//PUT THIS BACK AFTER TESTING LOGIN 
// <ComponentFromWithAuthenticate
// data = {this.state.data}
// handleChanges = {this.handleChanges}
// value = {this.state.searchText}
// />


 
// search = e => {
//   //filter the data array according the input of the seach bar. If the input matches, display the posts with that username
//   e.preventDefault();
//   let filteredData = [];
//   let currentData = [];

//   if (this.state.searchText !== ''){
//     currentData = this.state.data;
//     console.log('top of if');

//   filteredData = currentData.filter(item => {
//     const lc = item.username.toLowerCase();
//     const filter = this.state.searchText.toLowerCase();

//     return lc.includes(filter);
//   })
// }else {
//   filteredData = this.state.data;
// }
//   this.setState({
//     data: filteredData
//   });



// }


//ORIGINAL WORKING MAP BEFORE IMPLEMENTING POSTPAGE
// <SearchBar 
//           handleChanges = {this.handleChanges}
//           value = {this.state.searchText}
//         /> 
// {
//   this.state.data.map(item => {
//       return(
//           <PostContainer
//               key = {item.id}
//               item={item}
//               search = {this.search}
//           />
//       )
//   })
// }