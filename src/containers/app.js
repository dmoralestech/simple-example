import Home from './Home/home';
import Search from './Search/search';
import Detail from './Detail/detail';
import SystemError from './SystemError/systemError';
import React, {Component} from 'react';
import NotFound from './NotFound/notFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MessageActions from '../actionCreators/messageActions';
import LoadingMask from '../components/loadingMask/loadingMask'
import Message from '../components/message/message';
import {Navigation} from './Navigation/navigation';

export class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.displayName = 'containers/App';
    this.onError = this.onError.bind(this);
    window.addEventListener('error', this.onError );
  }

  onError(e) {
    console.log('caught the error: ' + e );
    window.location.replace('/error');
  }

  render() {
    return (
      <div data-component-name={this.displayName}>
        <Router>
          <div>
            <Navigation/>
            <main id='main' role='main'>
              <LoadingMask inFlight={this.props.inFlight}>
                <Message message={this.props.message} isError={this.props.isError}>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/search' exact component={Search} />
                    <Route path='/make/model/:id' component={Detail} />
                    <Route path='/error' component={SystemError} />
                    <Route path='/notFound' component={NotFound} />
                    <Route component={NotFound}/>
                  </Switch>
                </Message>
              </LoadingMask>
            </main>
          </div>
        </Router>
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
    inFlight: state.messageReducer.get('inFlight'),
    isError: state.messageReducer.get('isError'),
    message: state.messageReducer.get('message')
  };
};

/**
 * Map the Action(s)'s Dispatcher(s) to the props. The way this is written all the action's dispatch functions are
 * mapped to the given name space.
 * @param dispatch
 * @returns {{messageActionDispatcher: (A|B|M|N)}}
 */
let mapDispatchToProps = (dispatch) => {
  return {
    messageActionDispatcher: bindActionCreators(MessageActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps /**, mergeProps **/)(App);