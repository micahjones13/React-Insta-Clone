import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div `
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    

    input{
        text-align: center;
        height: 20px;
        width: 10%;
        margin-top: 5px;
        border-color: green;
    }
    button{
        margin-top: 5px;
        padding: 10px;
        width: 5%;
        background: lightblue;
            &:hover{
                background: black;
                color: white;
            }
    }
`;

const LoginPage = (props) => {
    return(
        
        <LoginContainer>
             <input type = 'text' placeholder = 'username' value = {props.value} onChange = {props.handleChanges}></input>
             
             <input type = 'text' placeholder = 'password'></input>
             <button onClick = {props.login}>Login</button>
         </LoginContainer>
        
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