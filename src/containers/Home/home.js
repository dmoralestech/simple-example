import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as MakeAction from '../../actionCreators/makeActions';
import * as ModelAction from '../../actionCreators/modelActions';
import * as CarOfTheWeekAction from '../../actionCreators/carOfTheWeekActions';
import CarOfTheWeek from "../../components/carOfTheWeek/carOfTheWeek";

/**
 * THe Home Container.
 *
 * Responsible for loading the car of the week
 *
 */
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
    let {name = '', price = 0, imageUrl = null, review = null, manufacture = null} = this.props.cotw;
    return (
      <div data-component-name={this.displayName}>
        <h1>Car of the week</h1>
        <CarOfTheWeek name={name} price={price} imageUrl={imageUrl} review={review} manufacture={manufacture}/>
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
