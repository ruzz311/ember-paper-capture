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
      unfreeze : this.unfreeze.bind(this)
    });
  },

  // any options you want to Webcam.set(key, val);
  webcamOptions : {
    // width: 640,
    // height: 480,
    dest_width: 640,
    dest_height: 480,
    flip_horiz: true// flip horizontal (mirror mode)
  },

  didInsertElement() {
    const options = this.getWithDefault('webcamOptions', {});

    Object.keys(options).map(key => {
      Webcam.set(key, options[key]);
    });

    this._super(...arguments);
  },

  freeze () {
    Webcam.freeze();

    this.set('isFrozen', true);

    if (!this.isDestroying && !this.isDestroyed) {
      this.get('didFreeze')(Webcam);
    }
  },

  unfreeze() {
    Webcam.unfreeze();

    this.set('isFrozen', false);

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
