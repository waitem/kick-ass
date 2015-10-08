Attendees = new Mongo.Collection("attendees");

if (Meteor.isClient) {

    Template.attendeeList.helpers({
        attendees: function () {
            return Attendees.find({});
        }
    });

    Template.attendeeList.events({
        'click button': function () {
            // placeholder for now ...
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
