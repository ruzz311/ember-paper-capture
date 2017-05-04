import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      newCapture: this.store.createRecord('capture', {
        title: `New Capture ${(new Date()).toUTCString()}`,
        dateStart: new Date(),
        dateEnd: new Date()
      })
    }
  },
  actions : {
    createCapture(capture){
      capture.set('dateEnd', new Date());
      return capture.save();
    }
  }
});
