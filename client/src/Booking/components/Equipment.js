import React, { Component } from 'react';

class Equipment extends Component {

  handleCheckbox = (event) => {
    const name = event.target.name;
    this.props.onChange(name);
  }

  render() {
    return (
      <div className="equipment-container">
        <span className="glyphicon glyphicon-asterisk" />
        <span>We need : </span>
        <label htmlFor="TV">
          <input
            name="TV"
            type="checkbox"
            onChange={this.handleCheckbox}
          />
          <span className="equipment-label-checkbox">TV</span>
        </label>
        <label htmlFor="No TV">
          <input
            name="No TV"
            type="checkbox"
            onChange={this.handleCheckbox}
          />
          <span className="equipment-label-checkbox">No TV</span>
        </label>
      </div>
    );
  }
}

export default Equipment;
