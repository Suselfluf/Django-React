import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class connectionExample extends React.Component{
  componentDidMount(){
    const apiUrl = 'http://localhost:8000/api/Jacket';
    fetch(apiUrl)
    .then((response)=> response.json())
    .then((data) => console.log(data))
  }
  render(){
    return <div>Hello world Connection</div>
  }
}

export default connectionExample;
