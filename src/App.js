import React, { Component } from "react";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
          <div className="App-Div">
            <Feed />
            <ContactList />
          </div>
        );
  }
}

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />
//     </div>
//   );
// }

export default App;
