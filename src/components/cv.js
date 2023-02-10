import React, { Component } from "react";
import styles from "../styles/cv.css"

class Cv extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cv" style={{visibility: this.props.visibility, height: this.props.wh, width: this.props.wh} }>
        <h3>General</h3>
        <div id="cvName">{this.props.values.nameValue}</div>
        <div id="cvEmail">{this.props.values.emailValue}</div>
        <div id="cvPhone">{this.props.values.phoneValue}</div>
        <h3>Educational</h3>
        <div id="cvSchool">{this.props.values.schoolValue}</div>
        <div id="cvStudyName">{this.props.values.studyTitleValue}</div>
        <div id="cvStudyDate">{this.props.values.studyDateValue}</div>
        <h3>Practical</h3>
        <div id="cvCompany">{this.props.values.companyValue}</div>
        <div id="cvPosition">{this.props.values.positionValue}</div>
        <div id="cvMainTasks">{this.props.values.mainTasksValue}</div>
        <div id="cvJobFrom">{this.props.values.jobFromValue}</div>
        <div id="cvJobUntil">{this.props.values.jobUntilValue}</div>
      </div>
    )
  }
}

export default Cv;