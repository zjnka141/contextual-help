import React, { PureComponent } from 'react';

export default class AccordionControl extends PureComponent {
  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        <h1>AAAAAAA</h1>
        <input name="accordion" type="text" onChange={this.onChange} />
      </div>
    );
  }
}