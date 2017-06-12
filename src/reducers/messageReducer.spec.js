// let describe = require('mocha').describe;
// let before = require('mocha').before;
// let after = require('mocha').after;
// let it = require('mocha').it;
// let assert     = require('assert');
// let should     = require('should');
let chai = require('chai');
let assert = require('chai').assert;
let expect = require('chai').expect;
import { fromJS } from 'immutable';

import reducer from './messageReducer';
import * as messageActions from '../actionCreators/messageActions';

describe('REDUCER: ', () => {

  const initialState = undefined;
  const toJs = (result) => ['message','isError', 'inFlight'].reduce(function(iv,itm){ iv[itm] = result.get(itm); return iv; },{});

  describe('messageReducer.js', () => {

    it('should return the current state when action actionConstants is of unknown', () => {
      let result = reducer(initialState, {});
      let unwrappedResult = toJs(result);
      expect(unwrappedResult).to.deep.equal({ message: null, isError: false, inFlight: false });
    });

    describe('ACTIONS.MESSAGE.SAVE', () => {
      it('should return the state with the new message', () => {
        let newState = fromJS({ message: 'Bow Wow', isError: false, inFlight: false });
        let result =reducer(newState, messageActions.saveMessage('Meow'));
        let unwrappedResult = toJs(result);
        expect(unwrappedResult).to.deep.equal({ message: 'Meow', isError: false, inFlight: false });
      });
    });

    describe('ACTIONS.MESSAGE.ISERROR', () => {
      it('should return the state with the isError Flag true', () => {
        let newState = fromJS({ message: 'Bow Wow', isError: false, inFlight: false });
        let result =reducer(newState, messageActions.setError(true));
        let unwrappedResult = toJs(result);
        expect(unwrappedResult).to.deep.equal({ message: 'Bow Wow', isError: true, inFlight: false });
      });
    });

    describe('ACTIONS.MESSAGE.INFLIGHT', () => {
      it('should return the state with the INFLIGHT Flag true', () => {
        let newState = fromJS({ message: 'Bow Wow', isError: false, inFlight: false });
        let result =reducer(newState, messageActions.setInFlight(true));
        let unwrappedResult = toJs(result);
        expect(unwrappedResult).to.deep.equal({ message: 'Bow Wow', isError: false, inFlight: true });
      });
    });

    describe('mashup saveMessage setError setInFlight', () => {
      it('should return the state with the INFLIGHT Flag true', () => {
        let newState = fromJS({ message: 'Bow Wow', isError: false, inFlight: false });
        newState = reducer(newState, messageActions.saveMessage('Meow'));
        newState = reducer(newState, messageActions.setError(true));
        let result = reducer(newState, messageActions.setInFlight(true));
        let unwrappedResult = toJs(result);
        expect(unwrappedResult).to.deep.equal({ message: 'Meow', isError: true, inFlight: true });
      });
    });

  });
});
