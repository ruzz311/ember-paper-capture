import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('capture', function CaptureRoute() {
    this.route('index', { path: '/' }, function() {
      this.route('now');
      this.route('list');
    });
    this.route('show', { path: '/:capture_id' });
  });

  // this.route('login');
  //
  // this.route('home', { path: '/' });
  //
  // this.route('markets', function () {
  //   this.route('show', { path: '/:market_id' }, function () {
  //     this.route('general', function () {
  //       this.route('index', { path: '/' });
  //       this.route('show', { path: '/:supplier_id' });
  //     });
  //     this.route('loans', function () {
  //       this.route('index', { path: '/' }, function () {
  //         this.route('summary');
  //         this.route('management');
  //         this.route('transactions');
  //         this.route('reports');
  //       });
  //       this.route('show', { path: '/:loan_id' });
  //     });
  //   });
  // });
  // Handle missing routes
  this.route('page-not-found', { path: '/*404' });
});

export default Router;
