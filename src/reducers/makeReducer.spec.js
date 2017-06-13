import reducer from './makeReducer';
import * as makeActions from '../actionCreators/makeActions';

let expect = require('chai').expect;

describe('REDUCER: ', () => {

  const initialState = undefined;

  describe('makeReducer.js', () => {

    it('should return the current state when action actionConstants is of unknown', () => {
      expect(reducer(initialState, {})).to.deep.equal({makes: []});
    });

    describe('ACTIONS.MAKE.INITIATE', () => {
      it('should return the current state because this does nothing', () => {
        expect(reducer(initialState, makeActions.initiateRequest())).to.deep.equal({makes: []});
      });
      it('should return the current state because this does nothing, with an id', () => {
        expect(reducer(initialState, makeActions.initiateRequest(10))).to.deep.equal({makes: []});
      });
    });

    describe('ACTIONS.MAKE.LOAD', () => {
      it("should replace array of makes and not touch the message", () => {
        let stateFulInitialState = {makes: [{id: 100}, {id: 200}] };
        Object.freeze(stateFulInitialState);
        expect(reducer(stateFulInitialState, makeActions.loadData([{id: 300}, {id: 400}]))).to.deep.equal({
          makes: [{id: 300}, {id: 400}]
        });
      });
      it("should replace array of makes not touch the message, test against merge", () => {
        let newState = {makes: [{id: 300},{id: 400},{id: 500}] };
        Object.freeze(newState);
        expect(reducer(newState, makeActions.loadData([{id: 100}, {id: 200}]))).to.deep.equal({
          makes: [{id: 100}, {id: 200}]
        });
      });
    });

  });
});
