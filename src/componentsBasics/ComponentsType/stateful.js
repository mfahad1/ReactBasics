import React from 'react';
import { ShowCount } from './stateless';


class StatefulComponent extends React.Component {
  /*
    State should never be mutated directly.
    To update state react api called setState is used which is asynchronous
  */
  state = {
    counter: 0
  }
  constructor(props) {
    super(props);
    /*
      We can initialize state here as well
    */
    this.heading = 'Understanding the StateFul Component'
  }

  incrementCounterButton() {

    return (
      <button onClick={() => this.incrementCounter()}>
        Add 1
      </button>
    );
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        {this.heading}
        <ShowCount value={this.state.counter} />
        {this.incrementCounterButton()}
      </div>
    )
  }
}

export default StatefulComponent;