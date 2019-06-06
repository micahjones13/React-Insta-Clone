import React from 'react';
import dummyData from '../../dummy-data'

//                       postspage     loginpage
const withAuthenticate = SomeComp =>  SomeComp2 =>
class extends React.Component {
    state ={
        loggedIn: false,
        username: '',
        searchText: '',
        data: dummyData,
        filteredData: []
    }
    componentDidMount(){
        // if(localStorage.getItem('loggedIn')){
        //     localStorage.removeItem('loggedIn');
        //     this.setState({
        //         loggedIn: false
        //     })
        // } else{
        //     localStorage.setItem('loggedIn', true);
        //     this.setState({
        //         loggedIn: true
        //     })
        // }
        if (this.state.loggedIn === false){
            localStorage.setItem('loggedIn', false);
        }
        else {
            localStorage.setItem('loggedIn', true);
        }
        //Do i need the login event here? 
        //SO FAR: it loads up on the login page, without the storage of loggedIn existing yet. That's becasue it's set to false 
        //initially, so it immediatley removes it from storage. 
        //I need it to set to true when I hit the login button.
       
    }
    handleSearch = e =>{
        this.setState({
            searchText: e.target.value
        })
        
    //     if (this.state.searchText === ''){
    //         this.setState({
    //             filteredData: dummyData
    //         })
    // }else {
    //     let filtered = this.state.data.filter(
    //         (post) => {
    //             return post.username.indexOf(this.state.searchText) !== -1
    //         }
    //     )
    //     this.setState({
    //         filteredData: filtered
    //     })
  


        let filtered = this.state.data.filter(
            (post) => {
                return post.username.indexOf(this.state.searchText) !== -1
            }
        )
        this.setState({
            filteredData: filtered
        })

        // handleSearch = e => {
        //     this.setState({ search: e.target.value});
        
        //     let filteredDummy = this.state.dummy.filter(
        //         (contact) => {
        //             return contact.username.indexOf(this.state.search) !== -1;
        //         }
            
        //     )
            
        //     this.setState({filtered: filteredDummy})
        // }

    }

    handleChanges = e => {
        this.setState({
          username: e.target.value  
         
        });
    }

    login = e => {
            // localStorage.setItem('loggedIn',true)
            this.setState({
                username: this.state.username,
                loggedIn: true
            })
            localStorage.setItem('username', this.state.username);
            // window.location.reload();
            localStorage.setItem('loggedIn', true);
    }
    render() {
        if(this.state.loggedIn) {
            //postspage
        return (<SomeComp
                    data = {this.props.data}
                    handleSearch = {this.handleSearch}
                    value = {this.state.searchText}
                    dataArray = {this.state.searchText === '' ? this.state.data : this.state.filteredData}
                 
                
                
                        
                />
            );
        }
        else{
            //login page
            return <SomeComp2
                loggedIn = {this.state.loggedIn}
                value = {this.state.username}
                handleChanges = {this.handleChanges}
                login = {this.login}
            />
        }
    }
}

export default withAuthenticate;
// dataArray = {this.state.searchText === '' ? this.state.data : this.state.filteredData}