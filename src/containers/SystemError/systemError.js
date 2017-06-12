import React, {Component} from 'react';

export class SystemError extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/SystemError';
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        <h1>System Error</h1>
        <em id="details">This application is encountered an unexpected error.</em>
        <fieldset tabIndex="0">
          <legend>Suggested error remediation</legend>
          <ul>
            <li>You can close this browser, and try again.</li>
            <li>If the problem occurs again. please contact us.</li>
          </ul>
        </fieldset>
      </div>
    );
  }
}

export {SystemError as default};
