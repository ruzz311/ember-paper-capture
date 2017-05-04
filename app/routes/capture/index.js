import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model, transition) {

    if (['capture.index', 'capture'].indexOf(transition.targetName) != -1) {
      this.transitionTo('capture.index.list');
    }
  }
});
