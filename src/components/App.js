import React from 'react';

//functional (stateless) component
// const App = () => {
//   return <div> I am now rendered</div>;
// }

//Class component (stateful) component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'It\'s Working'
    }
  }

  render() {
    return (
    <div>
      <div>{this.state.text}</div>
    </div>
    );
  }
}


export default App;



/*
Practice Example

Goal => Have input box display the text as we type
  -> On clicking bold, make the data display BOLD
  1. Make an event handler -> onChange (key-stroke changes) that runs function handleInputChange (function we make);
      => handleInputChange => take our keystrokes and save data in state
*/

//A little input example
/*
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.values
    });
  }

  render() {
    return (
    <div>
      <input onChange={this.handleInputChange} />
      <div>{this.state.text}</div>
    </div>
    );
  }
}
*/