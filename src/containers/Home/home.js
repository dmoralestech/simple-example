import {connect} from 'react-redux';
import Img from '../../components/img';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as MakeAction from '../../actionCreators/makeActions';
import * as ModelAction from '../../actionCreators/modelActions';
import * as CarOfTheWeekAction from '../../actionCreators/carOfTheWeekActions';
import {addZeroes, currency, numberWithCommas} from '../../utils';

export class Home extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/Home';
  }

  /**
   * Load all the makes before render
   */
  componentWillMount() {
    this.props.carOfTheWeekActionDispatcher.initiateRequest();
  }

  render() {
    let {name = '', price = 0, imageUrl = null, review = null} = this.props.cotw;
    return (
      <div data-component-name={this.displayName}>
        <h1>Car of the week</h1>
        <fieldse tabindex="0">
          <legend id="model" aria-label={`The car of the week is the ${name}`}>{name}</legend>
          <p id="cost"
             aria-label={`The manufacturers suggested retail price is ${currency(numberWithCommas(addZeroes(price)))}`}>MSRP: {currency(numberWithCommas(addZeroes(price)))}</p>
          <p id="review">{review}</p>
          <Img src={imageUrl} id="car_of_the_week_img" fallbackSrc="./missingImage.svg" alt={`picture of the car of the week, the ${name}`}/>
        </fieldse>
      </div>
    );
  }
}

/**
 * Map a specific store's state to the props.
 * @param state
 * @returns {{makes: (*|Array), models: (*|Array)}}
 */
let mapStateToProps = (state /**, ownProps **/) => {
  return {
    makes: state.makeReducer.makes,
    models: state.modelReducer.models,
    cotw: state.carOfTheWeekReducer.cotw,
  };
};

/**
 * Map the Action(s)'s Dispatcher(s) to the props. The way this is written all the action's dispatch functions are
 * mapped to the given name space.
 * @param dispatch
 * @returns {{makeActionDispatcher: (A|B|M|N), modelActionDispatcher: (A|B|M|N)}}
 */
let mapDispatchToProps = (dispatch) => {
  return {
    makeActionDispatcher: bindActionCreators(MakeAction, dispatch),
    modelActionDispatcher: bindActionCreators(ModelAction, dispatch),
    carOfTheWeekActionDispatcher: bindActionCreators(CarOfTheWeekAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps /**, mergeProps **/)(Home);
