import config from 'ember-get-config';
import Component from 'ember-component';
import computed from 'ember-computed';
import Webcam from 'webcamjs';
import EmberWebcam from 'ember-webcam/components/ember-webcam';

EmberWebcam.reopen({
  isFrozen : false,

  init() {
    this._super(...arguments);
    this.set('camera', {
      snap     : this.snap.bind(this),
      freeze   : this.freeze.bind(this),
      unfreeze : this.unfreeze.bind(this),
      isFrozen: false
    });
  },

  // any options you want to Webcam.set(key, val);
  webcamOptions : {
    width: 640,
    height: 480,
    // dest_width: 640,
    // dest_height: 480,
    enable_flash: false,
    force_flash: false,
    flip_horiz: true // mirror mode
  },

  didReceiveAttrs() {
    this._super(...arguments);
    const options = this.getWithDefault('webcamOptions', {});
    Webcam.set(options);
  },

  freeze () {
    Webcam.freeze();
    this.set('camera.isFrozen', true);
    if (!this.isDestroying && !this.isDestroyed) {
      this.get('didFreeze')(Webcam);
    }
  },

  unfreeze() {
    Webcam.unfreeze();
    this.set('camera.isFrozen', false);
    if (!this.isDestroying && !this.isDestroyed) {
      this.get('didUnfreeze')(Webcam);
    }
  },

  // Configurable function handlers
  didFreeze(){
  },
  didUnfreeze(){
  },
});

export default EmberWebcam;
