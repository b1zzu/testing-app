
import { PushRegistration } from '@aerogear/push'
import { init } from '@aerogear/app';
import * as config from "./mobile-services"

const app = init(config);

document.addEventListener("deviceready", () => {

  const push = window.PushNotification.init({
    android: {},
    ios: {},
  });

  push.on('registration', data => {
    console.log(`registration id: ${data.registrationId}`);

    const push = new PushRegistration(app.config);

    console.log(JSON.stringify(push.pushConfig));

    push.register(data.registrationId, "somestuff", ["somecat"])
      .then(() => {
        console.log(`registered to ups`);
      }).catch(err => {
        console.error(`failed to register to ups: ${err}`)
      });
  });

  push.on("notification", data => {
    console.log(`recivied notification: ${data.message}`);
  })

  push.on("error", e => {
    console.error(e);
  });

}, false);
