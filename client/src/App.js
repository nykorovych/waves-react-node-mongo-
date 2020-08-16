import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    axios.get('/api/product/brands').then(res => console.log(res))
  }
  render() {
    return <div className="App">NOPE COCK</div>;
  }
}

export default App;
