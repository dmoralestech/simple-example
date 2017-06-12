import classNames from 'classnames';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './loadingMask.css';

const onOff = (inFlight) => inFlight ? 'on' : 'off';

export default class LoadingMask extends Component {

  constructor(props, context) {
    super(props, context);
    this.displayName = 'components/LoadingMask';
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  /**
   * onClick handler prevents clicks from penetrating the loading mask.
   * @param {event} e - dom event.
   * @private
   * @return {boolean}
   */
  onClickHandler(e) {
    if (this.props.inFlight) {
      e.stopPropagation();
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className={classNames(['loading-mask',
        {'loading-mask--on': this.props.inFlight},
        {'loading-mask--off': this.props.inFlight}])}
           onClick={this.onClickHandler}
           id="loading-mask"
           data-component-name={this.displayName}>
        <div
          id="loading-mask-message-wrapper"
          className={ 'loading-mask--message--' + onOff(this.props.inFlight)}
          ref={(lmm) => {
            if (lmm !== null) { // this little bit of code moves the margin.
              lmm.style['margin-left'] = ((lmm.offsetWidth / 2) * -1) + 'px';
              lmm.style['margin-top'] = ((lmm.offsetHeight / 2) * -1) + 'px';
            }
          }}>
          <div role="alert" aria-busy="true" id="loading-mask-message">
            <div className="fa fa-spinner fa-spin" id="loading-mask-message-icon"/>
            Loading
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

LoadingMask.propTypes = {
  children: PropTypes.node.isRequired,
  inFlight: PropTypes.bool.isRequired
};