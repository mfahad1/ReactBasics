import React from 'react';

class Layout extends React.Component {

  state = {
    counter: 0
  };
  constructor(props) {
    super(props);
    console.log('in constructor');
    console.log(props, this.state);
    console.log('*******************');
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps  ------------------- ");
    console.log(props, state);
    console.log('*******************');
    return {
      counter: state.counter + 1
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate -------------------");
    console.log("previous state and props", this.state , this.props);
    console.log("next state and props", nextProps, nextState);
    // by default returns true //
    console.log('*******************');
    return true;
    // if(this.props === nextProps ) return false;
  }

  render() {
    console.log('Render Triggered');
    console.log('*******************');
    return (
      <div>
        <h1>Lifecycle of a Component</h1>
        <h2  id='counterDiv' >
          Final Counter : {this.state.counter}
        </h2>

        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Increase Counter
        </button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()");
    console.log("ref to previous dom: ", document.getElementById('counterDiv').innerHTML);
    console.log('*******************');
    return {
      counter: prevState.counter + 1,
      message: 'updated from snapshotMethod'
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
    console.log('*******************');
  }

}

export default Layout;