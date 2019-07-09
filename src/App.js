import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hello: "World!"
    };
  }

  render() {
    return (
      <div>
        <h1>Hello{ this.state.hello }</h1>
      </div>
    );
  }

    
}

export default App;