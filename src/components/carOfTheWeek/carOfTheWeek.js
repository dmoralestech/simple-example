import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {addZeroes, currency, numberWithCommas} from '../../utils';
import Img from '../../components/img/img';

/**
 * The Car of the Week Display Object
 * @class
 */
export default class CarOfTheWeek extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'components/CarOfTheWeek';
  }

  render() {
    let {name, price, review, imageUrl, manufacture} = this.props;
    return (
      <div data-component-name={this.displayName}>
        <dl tabIndex="0">
          <dl id="modelName" aria-label={`The car of the week is the ${name} manufactured by ${manufacture}.`}>{name} by {manufacture}</dl>
          <dt id="modelCost"
             aria-label={`The suggested retail price is ${currency(numberWithCommas(addZeroes(price)))}.`}>MSRP: {currency(numberWithCommas(addZeroes(price)))}</dt>
          <dt id="review">{review}</dt>
          <dt id="modelImg"><Img src={imageUrl} id="cotwImg" fallbackSrc="./missingImage.svg" alt={`picture of the car of the week, the ${name}`}/></dt>
        </dl>
      </div>
    )
  }
}

CarOfTheWeek.propTypes = {
  name: PropTypes.string.isRequired,
  manufacture: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired,
  review: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};
