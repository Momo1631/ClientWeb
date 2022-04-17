import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class medtech extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentname = this.onChangeStudentname.bind(this);
    this.onChangeStudentid = this.onChangeStudentid.bind(this);
    this.onChangePaymentdeadline = this.onChangePaymentdeadline.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentname: "",
      studentid: "",
      paymentdeadline: new Date(),
      students: [],
    };
  }

  componentDidMount() {
    this.setState({
      students: ["test user"],
      studentname: "test user",
    });
  }

  onChangeStudentname(e) {
    this.setState({
      studentname: e.target.value,
    });
  }

  onChangeStudentid(e) {
    this.setState({
      studentid: e.target.value,
    });
  }
  onChangePaymentdeadline(date) {
    this.setState({
      paymentdeadline: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const student = {
      studentname: this.state.studentname,
      studentid: this.state.studentid,
      paymentdeadline: this.state.paymentdeadline,
    };
    console.log(student);

    window.location = "/";
  }
  render() {
    return (
      <div>
        <h3>Check MedTech Students Payment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Student Name: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.studentname}
              onChange={this.onChangeStudentname}
            >
              {this.state.students.map(function (student) {
                return (
                  <option key={student} value={student}>
                    {student}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Student ID: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.studentid}
              onChange={this.onChangeStudentid}
            />
          </div>
          <div className="form-group">
            <label>Payment Deadline: </label>
            <div>
              <DatePicker
                selected={this.state.paymentdeadline}
                onChange={this.onChangePaymentdeadline}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Check" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
