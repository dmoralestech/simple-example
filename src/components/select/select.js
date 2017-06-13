import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {DropdownButton} from 'react-bootstrap';
import classNamesFn from 'classnames';

/**
 * A Select widget.
 * @class
 */
export default class Select extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'components/Select';
  }

  render() {
    let {classNames, bsStyle, title, disabled, id} = this.props;
    return (
      <DropdownButton id={id}
                      className={classNamesFn(classNames)}
                      bsStyle={bsStyle}
                      title={title}
                      disabled={disabled}
                      data-component-name={this.displayName}>
        {this.props.children}
      </DropdownButton>
    )
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  classNames: PropTypes.object,
  bsStyle: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool
};
