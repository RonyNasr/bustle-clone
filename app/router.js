import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});


Router.map(function() {
  this.route('news');
  this.route('entertainment');
  this.route('fashionBeauty');
  this.route('lifestyle');
  this.route('books');
  this.route('contact');
  this.route('explore');
});

export default Router;
