Attendees = new Mongo.Collection("attendees");

if (Meteor.isClient) {

    Template.attendeeList.helpers({
        attendees: function () {
            return Attendees.find({});
        }
    });

    Template.registerAttendee.events({
        'submit .registerAttendee': function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            console.log(event);
            // Get value from form element
            var text = event.target.attendeeName.value;

            // Insert an attendee into the collection
            Attendees.insert({
                name: text,
                createdAt: new Date() // current time
            });

            // Clear form
            event.target.attendeeName.value = "";
        }

    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
