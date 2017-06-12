
import {connect} from 'react-redux';
import {safeGet} from '../../utils';
import React, {Component} from 'react';
import Img from '../../components/img';
import {bindActionCreators} from 'redux';
import * as ModelAction from '../../actionCreators/modelActions';
import { Redirect } from 'react-router-dom';
import {addZeroes, currency, numberWithCommas} from '../../utils';

const renderDetails = (item,i) => (<dl key={i}>
  <dt>{item.name}</dt>
  <p id="cost"
     aria-label={`The manufacturers suggested retail price is ${currency(numberWithCommas(addZeroes(item.price)))}`}>MSRP: {currency(numberWithCommas(addZeroes(item.price)))}</p>
  <Img alt={`picture of the car ${item.name}`} src={item.imageUrl} fallbackSrc="./missingImage.svg"/>
</dl>);
const notFound = () => (<Redirect to='/notFound'/>);

export class Detail extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/Detail';
  }

  componentWillMount(){
     this.props.modelActionDispatcher.fetchModelByModelId(safeGet( this.props, 'match.params.id', null ));
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        <h1>Car Details</h1>
        {this.props.models === 0 ? notFound(): this.props.models.map(renderDetails) }
      </div>
    );
  }
}

Detail.defaultProps = {
  models : []
};

/**
 * Map a specific store's state to the props.
 * @param state
 * @returns {{models: *}}
 */
let mapStateToProps = (state /**, ownProps **/) => {
  return {
    models: state.modelReducer.models,
  };
};

/**
 * Map the Action(s)'s Dispatcher(s) to the props. The way this is written all the action's dispatch functions are
 * mapped to the given name space.
 * @param dispatch
 * @returns {{modelActionDispatcher: (A|B|M|N)}}
 */
let mapDispatchToProps = (dispatch) => {
  return {
    modelActionDispatcher: bindActionCreators(ModelAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps /**, mergeProps **/)(Detail);

