/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix : 'ember-paper-capture',
    environment  : environment,
    rootURL      : '/',
    locationType : 'auto',
    EmberENV     : {
      FEATURES          : {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES : {
        // Prevent Ember Data from overriding Date.parse.
        Date : false
      }
    },

    APP : {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy : {
      'default-src' : "'none'",
      'script-src'  : "'self' 'unsafe-inline'",
      'style-src'   : "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src'    : "'self' fonts.gstatic.com",
      'connect-src' : "'self'",
      'img-src'     : "'self' data:",
      'media-src'   : "'self'"
    },

    emberPouch : {

    }
  };

  if (environment === 'development') {
    ENV.emberPouch.localDb = 'early-test';
    ENV.emberPouch.remoteDb = 'http://localhost:5984/my_couch';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.emberPouch.localDb = 'test';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.emberPouch.localDb = 'prod';
    ENV.rootURL = '/ember-paper-capture/';

  }

  return ENV;
};
