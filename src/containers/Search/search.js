import React, {Component} from 'react';
import Select from '../../components/select/select';
import SelectItem from '../../components/selectItem/selectItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MakeAction from '../../actionCreators/makeActions';
import * as ModelAction from '../../actionCreators/modelActions';
import * as SelectionActions from '../../actionCreators/selectionActions';
import {Button} from 'react-bootstrap';
import './search.css';

export class Search extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/Search';
    // the only reason I bind here is so there is no confusion of where it executes.
    this.onSelect = this.onSelect.bind(this);
    this.onClickDetails = this.onClickDetails.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }

  /**
   * Load all the makes before render
   */
  componentWillMount(){
    this.props.makeActionDispatcher.initiateRequest();
  }

  /**
   * returns an event listener with a type in scope
   * @param {string} type - the path inside the state.
   * @returns {function(*)}
   */
  onSelect(type) {
    return (event) => {
      let {value, text} = event;
      if (type === 'selected.make') {
        this.props.selectionsActionDispatcher.setMake({value, text});
        this.props.modelActionDispatcher.fetchModeldByMake(value);
      } else {
        this.props.selectionsActionDispatcher.setModel({value, text});
      }
    }
  }

  onClickDetails() {
    this.props.history.push(`/make/model/${this.props.selected.model.value}`);
  }

  isDisabled() {
    /**
     * I hate this kind of logic.
     *   Basically, if the make value has been selected, and the model value has been selected.
     *   then enable the view details button.
     */
    return ! ( this.props.selected.make.value !== null && this.props.selected.model.value !== null );
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        <h1>Search</h1>

        <fieldset tabIndex="0">
          <legend>Select a Make and Model to view the details</legend>
          <Select id='make_select'
                  title={this.props.selected.make.text}
                  bsStyle='primary'
                  disabled={this.props.makes.length===0}
                  classNames={'container--search-btn'}>
            {this.props.makes.map((item,i) => (
              <SelectItem key={i}
                          id={`make_item_${i}`}
                          value={item.id}
                          text={item.name}
                          onSelect={this.onSelect('selected.make')}/>))}
          </Select>
          <Select id='model_select'
                  title={this.props.selected.model.text}
                  bsStyle='primary'
                  disabled={this.props.models.length===0}
                  classNames={'container--search-btn'}>
            {this.props.models.map((item,i) => (
              <SelectItem key={i}
                          id={`model_item_${i}`}
                          value={item.id}
                          text={item.name}
                          onSelect={this.onSelect('selected.model')}/>))}
          </Select>
          <Button bsStyle="success" onClick={this.onClickDetails} disabled={this.isDisabled()}>View Details</Button>
        </fieldset>
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
    selected: {
      make: {
        text: state.selectionsReducer.get('make').get('text'),
        value: state.selectionsReducer.get('make').get('value')
      },
      model: {
        text: state.selectionsReducer.get('model').get('text'),
        value: state.selectionsReducer.get('model').get('value')
      }
    }
  };
};

/**
 * Map the Action(s)'s Dispatcher(s) to the props. The way this is written all the action's dispatch functions are
 * mapped to the given name space.
 * @param dispatch
 * @returns {{makeActionDispatcher: (A|B|M|N), modelActionDispatcher: (A|B|M|N), messageActionDispatcher: (A|B|M|N)}}
 */
let mapDispatchToProps = (dispatch) => {
  return {
    makeActionDispatcher: bindActionCreators(MakeAction, dispatch),
    modelActionDispatcher: bindActionCreators(ModelAction, dispatch),
    selectionsActionDispatcher: bindActionCreators(SelectionActions,dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps /**, mergeProps **/)(Search);
