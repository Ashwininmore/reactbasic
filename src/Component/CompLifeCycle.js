
import React, { Component } from "react";

class CompLife extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ashu" };

    this.UpdateName = this.UpdateName.bind(this);
    this.testclick = this.testclick.bind(this);
  }

  UpdateName(event) {
    console.log("This is event: "+event);
    this.setState({ name: event.
      target.value });
  }

  testclick(event) {
    alert("The name entered is: " + this.state.name);
  }

  componentDidMount() {
    console.log("Mounting State : calling method componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Update  State : calling method shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("Update  State : calling method componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("UnMounting State : calling method componentWillUnmount");
  }
  render() {
    return (
      <div>
        
Enter Your Name:
        <input type="text" 

        onChange={this.UpdateName} 
        className="myclass"/>
        <br />
        <h2>{this.state.name}</h2>
        <input type="button" value="Click Here" onClick={this.testclick} />
      </div>
    );
  }
}
export default CompLife;
