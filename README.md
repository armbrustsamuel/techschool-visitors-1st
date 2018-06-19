# techschool-visitors-1st
First Edition Visitors List for TechSchool

## Microservice
Add the microservice as a destination as follows:

1. Enter in your hanatrial cockpit
2. Enter in the `Destinations` left side menu
3. Create a new destination with the following data:

| Name | Type | Description | URL | Proxy Type | Authentication | 
| :--------- |:--------- |:--------- |:---------| :-------- | :---------- |
| cf-python-visitors | HTTP| Visitors | http://getstartedpython-incommensurable-basidiospore.mybluemix.net | Internet | NoAuthentication |

### Creating the app

1. Create a new `model/formatter.js` file;
2. Create a new `List` Object with a `NotificationListItem` in the Visitors.view.xml file;
3. Create the initial functions for the `NotificationListItem` in the Visitors.controller.js file;
4. Change the project name in the `i18n.properties` file;
5. Enable connection with the `cf-python-visitors` microservice;
6. Create new method with ajax call to the `cf-python-visitors` microservice;
7. Add new feature to the Notification List app.

## Accessing the BlueMix website to generate data
http://getstartedpython-incommensurable-basidiospore.mybluemix.net/

1. Enter your data
2. Press enter
3. A new entry should be created for your user

## Example
https://techschoolvisitors1st-i843890trial.dispatcher.hanatrial.ondemand.com/?hc_reset




