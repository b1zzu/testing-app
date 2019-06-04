# How to reproduce

1. Go to Firebase and create a new project with a new app called `io.cordova.hellocordova` and download the *google-services.json*
2. Put the *google-services.json* in the root of this project
3. Start UPS `docker-compose up`
4. Go to UPS admin page http://localhost:8089 create a new application and add and android variant using firebase sender id and sender key
5. Change **Variant ID**, **Variant Secret** and **Sender ID** in *mobile-services.js* using the ones provided by UPS
6. Start and android vm or connect your smartphone and check that the device is connected using `adb devices`
7. Install node dependencies and cordova plugins `npm install`
8. Build the app and install it in the connected device `npm start`
9. Open the app called **HelloCordova**
10. The **registration id** should be logged to the console
11. Go to Firebase and then to Cloud Messaging and send a test message to the device using the **registration id**
12. A **received notification** log should appear in the console (sometime it doesn't work)
13. Go to the UPS admin and try to send a test message
13. Another **received notification** log should appear but it doesn't 
<!--  -->