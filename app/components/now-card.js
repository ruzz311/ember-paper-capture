import Ember from 'ember';

export default Ember.Component.extend({
  dataUri : null,
  isFrozen: false,
  webcamError: null,
  images: Ember.A(),

  actions : {
    // Delivers a data URI when snapshot is taken.
    didSnap(dataUri) {
      Ember.debug('didSnap', arguments);
      this.set('isFrozen', false);
      this.set('dataUri', dataUri);

      const now = new Date();
      const timestamp = +now;
      const captureImage = Ember.Object.create({
        'name': `${timestamp}.jpg`,
        'content_type': 'image/jpg',
        'data': dataUri
        // 'data': btoa(dataUri) // base64-encoded `String`, or a DOM `Blob`, or a `File`
      });

      this.get('model.newCapture.images').addObject(captureImage)
    },

    // Delivers a data URI when snapshot is frozen (used for review).
    didFreeze() {
      Ember.debug('didFreeze', arguments);
      this.set('isFrozen', true);
    },

    didUnfreeze() {
      Ember.debug('didUnfreeze', arguments);
      this.set('isFrozen', false);
    },

    saveCapture(){
      Ember.debug('saveCapture', arguments);
      this.sendAction('createCapture', this.get('model.newCapture'))
    },

    // Fires when a WebcamError occurs.
    didError(error) {
      console.error(error);
      this.set('webcamError', error);
    }
  }
});
