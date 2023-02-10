import React, {Component} from "react";
import styles from "./styles/form.css";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form">
        General
        <label>Name: <input id="nameInput" onChange={this.props.handle} value={this.props.values.nameValue}/></label>
        <label>E-Mail: <input id="emailInput" onChange={this.props.handle} value={this.props.values.emailValue} type={"email"}/></label>
        <label>Phone: <input id="phoneInput" onChange={this.props.handle} value={this.props.values.phoneValue} type={"number"}/></label>
      </div>
    )
  }
}

export default Form;