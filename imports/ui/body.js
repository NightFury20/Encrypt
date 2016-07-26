import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/db.js';
 
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('docs');
});
 
Template.body.helpers({
  docs() {
    return Docs.find({});
  },
});