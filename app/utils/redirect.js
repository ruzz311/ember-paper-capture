export const sectionDefault = {
  // <top-level-section> : <default-destination>
  'capture' : 'capture.index.list'
};

export const baseRedirectMap = {
  // <target> : <destination>
  'capture'             : sectionDefault.capture,
  'capture.index'       : sectionDefault.capture,
  'capture.index.index' : sectionDefault.capture
};

// States are matched against transition.targetName.
// If current transition is matched to a state, transitionTo the destination.
export default function redirect(additionalRedirectMap = {}, replace = true) {
  let redirects = Object.assign({}, baseRedirectMap, additionalRedirectMap);

  return function (model, transition) {
    let destination = redirects[transition.targetName];
    if (destination) {
      if (replace) {
        this.replaceWith(destination);
      } else {
        this.transitionTo(destination);
      }
    }
  }
}
