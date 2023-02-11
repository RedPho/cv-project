import React, {Component} from "react";
import styles from "../styles/form.css";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{visibility: this.props.visibility, height: this.props.wh, width: this.props.wh}} className="form">
        <h3>General</h3>
        <label>Name: <input id="nameInput" onChange={this.props.handle} value={this.props.values.nameValue}/></label>
        <label>E-Mail: <input id="emailInput" onChange={this.props.handle} value={this.props.values.emailValue} type={"email"}/></label>
        <label>Phone: <input id="phoneInput" onChange={this.props.handle} value={this.props.values.phoneValue} type={"number"}/></label>
        <h3>Educational</h3>
        <label>School Name: <input id="schoolInput" onChange={this.props.handle} value={this.props.values.schoolValue}/></label>
        <label>Title of Study: <input id="studyTitleInput" onChange={this.props.handle} value={this.props.values.studyTitleValue}/></label>
        <label>Date of Study: <input id="studyDateInput" onChange={this.props.handle} value={this.props.values.studyDateValue}/></label>
        <h3>Practical</h3>
        <label>Company Name: <input id="companyInput" onChange={this.props.handle} value={this.props.values.companyValue}/></label>
        <label>Position Title: <input id="positionInput" onChange={this.props.handle} value={this.props.values.positionValue}/></label>
        <label>Main Tasks: <input id="mainTasksInput" onChange={this.props.handle} value={this.props.values.mainTasksValue}/></label>
        <label>From: <input type={"Date"} id="jobFromInput" onChange={this.props.handle} value={this.props.values.jobFromValue}/></label>
        <label>Until: <input type={"Date"} id="jobUntilInput" onChange={this.props.handle} value={this.props.values.jobUntilValue}/></label>
      </div>
    )
  }
}

export default Form;