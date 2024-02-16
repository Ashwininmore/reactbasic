/*The state is a built-in React 
object that is used to contain 
data or information about the 
component. A component's state 
can change over time; whenever 
it changes, the component 
re-renders.*/
import {Component} from 'react';
class Stateexample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
      <p>This is from example</p>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => 
        this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
export default Stateexample