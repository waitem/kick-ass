if (Meteor.isClient) {

    Template.attendeeList.helpers({
        attendees: [
            {name: 'Mark Waite'},
            {name: 'Another attendee'}
        ]
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
