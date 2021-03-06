/**
 * Action Types are Constants that are used to identify action on data in the store or side effects like loading data
 * with sagas.
 *
 * If you see videos or projects on Github normally you will see a set of flat constants. I saw someone doing this,
 * and I like it because it shows relationships.
 *
 * @type {{MAKE: {INITIATE: string, LOAD: string}, MODEL: {INITIATE: {BYMAKEID: string, BYID: string}, LOAD: string}, MESSAGE: {SAVE: string, ISERROR: string, INFLIGHT: string}, COTW: {INITIATE: string, LOAD: string}, SELECTION: {MAKE: string, MODEL: string, RESET: string}}}
 */
const ACTIONS = {
  MAKE: {
    INITIATE: 'make.initiate',
    LOAD: 'make.load'
  },
  MODEL: {
    INITIATE: {
      BYMAKEID: 'model.initiate.makeid',
      BYID: 'model.initiate.modelid',
    },
    LOAD: 'model.load'
  },
  MESSAGE:{
    SAVE: 'message.save',
    ISERROR: 'message.iserror',
    INFLIGHT: 'message.inflight',
  },
  COTW: {
    INITIATE: 'cotw.initiate',
    LOAD: 'cotw.load'
  },
  SELECTION:{
    MAKE:'selection.make',
    MODEL:'selection.model',
    RESET:'selection.reset'
  }
};

export {ACTIONS as default};

