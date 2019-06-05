import React from 'react';



const LoginPage = (props) => {
    return(
        
        <div className = 'login'>
             <input type = 'text' placeholder = 'username' value = {props.value} onChange = {props.handleChanges}></input>
             <input type = 'text' placeholder = 'password'></input>
             <button onClick = {props.login}>Login</button>
         </div>
        
    );
}

// class LoginPage extends React.Component  {
//     state = {
//         username: '',
//         usernameExists: true,
//         loggedIn: this.props.loggedIn
//     }
//     // handleChanges = e => {
//     //     this.setState({
//     //       username: e.target.value  
         
//     //     });
//     // }
//     login = e => {
//         // e.preventDeafult() //I don't think we want this, because of the referesh 
//         //see if username is there. if it's not, set it 
//         //This login function should set a `username` on `localStorage`.
//         // You'll need to check local storage to see if a user is logged in.
//         // if (localStorage.getItem('usernameStatus')){
//         //   //set the username equal to the input value on login.js of username input, set localstorage to hold that
//         // //   this.setState({
//         // //     username: e.target.value
//         // //   })
          
//         //   localStorage.setItem('username', this.state.username)
//         // }
//         // if(localStorage.getItem('username', '')){
//         // localStorage.setItem('username', this.state.username);
//         // }
//         // else {
//         //     localStorage.removeItem('username')
//         // }
        
//         // if (localStorage.getItem('usernameExists')){
//         //     localStorage.removeItem('usernameExists')
//         //     this.setState({
//         //         usernameExists: false
//         //     })
//         // }
//         // else{
//         //     localStorage.setItem('usernameExists', true);
//         //     localStorage.setItem('username', this.state.username);
//         //     this.setState({
//         //         usernameExists: true
//         //     })
//         // }
        
//         //if logged in is true, update username
//         if(localStorage.getItem('loggedIn', false)){
//             this.setState({
//                 username: this.state.username
//             })
//         }

//       }


      
//     render(){
//         return(
//             <div className = 'login'>
//                 <input type = 'text' placeholder = 'username' value = {this.state.username} onChange = {this.handleChanges}></input>
//                 <input type = 'text' placeholder = 'password'></input>
//                 <button onClick = {this.login}>Login</button>
//             </div>
//         );
//      }

// }

export default LoginPage;