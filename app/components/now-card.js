import Ember from 'ember';

export default Ember.Component.extend({
  dataUri : null,

  // setupCamera () {
  //
  // }

  actions : {
    // Delivers a data URI when snapshot is taken.
    didSnap(dataUri) {
      this.set('dataUri', dataUri);
      this.set('isFrozen', false);
    },

    // Delivers a data URI when snapshot is frozen (used for review).
    didFreeze() {
      console.log(arguments)
      debugger;
      this.set('isFrozen', true);
      // this.set('dataUri');
    },

    didUnfreeze() {
      console.log(arguments)
      debugger;
      this.set('isFrozen', false);
      //this.set('dataUri', dataUri);
    },

    // Fires when a WebcamError occurs.
    didError(error) {
      console.error(error);
    },

    saveCapture(dataUri){
      console.log(arguments);
      debugger;
      this.set('dataUri', dataUri);
    }
  }
});
