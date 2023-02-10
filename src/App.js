import React, { Component } from "react";
import Form from "./components/form";
import Cv from "./components/cv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      phoneValue: "",
      
      schoolValue: "",
      studyTitleValue: "",
      studyDateValue: "",
      
      companyValue: "",
      positionValue: "",
      mainTasksValue: "",
      jobFromValue: "",
      jobUntilValue: "",

      cvVisibility: "hidden",
      formVisibility: "visible",
      cvHW: "",
      formHW: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this)
  }

  handleChange(e) {
    let newValue = e.target.value;
    switch(e.target.id) {
      case "nameInput":
        this.setState({nameValue: newValue});
        break;
      case "emailInput":
        this.setState({emailValue: newValue});
        break;
      case "phoneInput":
        this.setState({phoneValue: newValue});
        break;
      case "schoolInput":
        this.setState({schoolValue: newValue});
        break;
      case "studyTitleInput":
        this.setState({studyTitleValue: newValue});
        break;
      case "studyDateInput":
        this.setState({studyDateValue: newValue});
        break;
      case "companyInput":
        this.setState({companyValue: newValue});
        break;
      case "positionInput":
        this.setState({positionValue: newValue});
        break;
      case "mainTasksInput":
        this.setState({mainTasksValue: newValue});
        break;
      case "jobFromInput":
        this.setState({jobFromValue: newValue});
        break;
      case "jobUntilInput":
        this.setState({jobUntilValue: newValue});
        break;
      default:
        console.log("error");
    }
  }

  edit() {
    this.setState({
      formVisibility: "visible",
      cvVisibility: "hidden",
      cvHW: "0px",
      formHW: ""
    });
  }

  submit() {
    this.setState({
      formVisibility: "hidden",
      cvVisibility: "visible",
      cvHW: "",
      formHW: "0px"
    });
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} className="App">
        <Form values={this.state} handle={this.handleChange} visibility={this.state.formVisibility} wh={this.state.formHW}/>
        <button style={{visibility: this.state.formVisibility, width:"6em", marginTop: "1em"}} onClick={this.submit}>Submit</button>
        <Cv values={this.state} visibility={this.state.cvVisibility} wh={this.state.cvHW}/>
        <button style={{visibility: this.state.cvVisibility, width:"6em", marginTop: "1em"}} onClick={this.edit}>Edit</button>
      </div>
    );
  }
}

export default App;
