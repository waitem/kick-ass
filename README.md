# Meteor JS, and how to leverage the Javascript framework for building a kick-ass app

## Prerequisite - Install meteor

```bash
curl https://install.meteor.com/ | sh
```

## Step 1 - Create a new meteor project

```bash
cd ~/checkout
meteor create kick-ass
cd kick-ass
```

Build server/client & start the server:

```bash
meteor
```

Open browser (client) on localhost:3000

> Take a look at the code - the same code can be run on client and server (backend) ...

## Step 2 - Modify default sample code to show a fixed list of attendees

## Step 3 - Switch from fixed list to use a database (mongodb)

Define database
Modify helper code
Manually add one attendee into database:

```
db.attendees.insert({ name: "Mark Waite", createdAt: new Date() });
```

## Step 4 - Add form to add attendees

Open a second browser to see live update on all connected clients

> Explain optimistic UI (see: <http://info.meteor.com/blog/optimistic-ui-with-meteor-latency-compensation> 
> for the full story)

## Step 5 - Sort attendee list by reverse date (newest at top of list)

## Step 6 - Deploy to the WWW - and let everyone play with the app!

```bash
meteor deploy <appname>.meteor.com
```

## Step 7 - Build Mobile app - e.g. for Android (prerequisite: Android Studio installed)

Specify the server (and optionally, port) where the client should connect to using the ```--mobile-server``` option

```bash
meteor run android-device --mobile-server <server[:port]>
```

e.g. for testing use local WiFi address & port 3000

For deployed server, just use server address, e.g. app-name.meteor.com

