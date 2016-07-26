import { Mongo } from 'meteor/mongo';
 
export const Docs = new Mongo.Collection('docs');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('docs', function tasksPublication() {
    return Docs.find();
  });
}

Meteor.methods({

});