import React, {Component} from 'react';
import PropTypes from 'prop-types';

const alertMessage = (msg) => (<div className="alert alert-danger alert-dismissable fade in"
                                    id="message-box"
                                    aria-atomic="true"
                                    aria-live="assertive"
                                    role="alert"
                                    aria-labelledby="message"
                                    tabIndex="0"
                                    ref={(cbtn) => {
                                      if (cbtn !== null) {
                                        cbtn.focus();
                                      }
                                    }}>
                                  <a href="#"
                                     className="close"
                                     data-dismiss="alert"
                                     aria-label="close"
                                     id="message-box-close"
                                     tabIndex="0"
                                     >&times;</a>
                                  <div id="message"><strong>Warning</strong>&nbsp;{msg}</div>
                                </div>);

export default class Message extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'components/Message';
  }

  render() {
    let {isError, message} = this.props;
    return (
      <div id="message"
           data-component-name={this.displayName}>
        { isError && message ? alertMessage(message) : null }
        {this.props.children}
      </div>
    )
  }
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string,
  isError: PropTypes.bool.isRequired,
};
