import React, { Component } from 'react';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', notes: [] };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState( { input: event.target.value } )
  }

  handleSubmit(event) {
    this.state.notes.push(this.state.input)
    this.setState({notes: this.state.notes});
    this.setState({input: ''})
    event.preventDefault();
  }

  render(){
    return (
      <div className="NoteList">
        <form>
          <label>
            Add Note: <input type="text" value={this.state.input} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        <ul>{this.state.notes.map((note, index) => {
          return <li key={index}>{note}</li>
        })}</ul>
      </div>
    )
  }
}

export default NoteList;