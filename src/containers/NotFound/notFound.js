import React, {Component} from 'react';

export class NotFound extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/NotFound';
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        <h1>404 Item not found</h1>
        <em>The item you are looking for does not exist.</em>
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

export {NotFound as default};
