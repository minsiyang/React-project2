import React, {Component} from "react";
import { hot } from "react-hot-loader";
import './App.css';
import NoteList from './NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yo, React!</h1>
        <h2>Here we go~~</h2>
        <NoteList />
      </div>
    )
  }
}

export default hot(module)(App);