import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {MenuItem} from 'react-bootstrap';
import classNames from 'classnames';

export default class SelectItem extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'components/SelectItem';
  }

  render() {
    let {value, text, id} = this.props;
    return (
      <MenuItem id={id}
                className={classNames(this.props.classNames)}
                eventKey={ {value, text} }
                onSelect={this.props.onSelect}>{this.props.text}</MenuItem>
    )
  }
}

SelectItem.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.node,
  text: PropTypes.node,
  classNames: PropTypes.object
};
