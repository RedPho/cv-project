import React, { Component } from "react";
import Form from "./components/form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      phoneValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newValue = e.target.value;
    if (e.target.id == "nameInput") {
      this.setState({nameValue: newValue});
    }
    else if (e.target.id == "emailInput") {
      this.setState({emailValue: newValue});
    }
    else {
      this.setState({phoneValue: newValue});
    }
  }

  render() {
    return (
      <div className="App">
        <Form values={this.state} handle={this.handleChange}/>
      </div>
    );
  }
}

export default App;
