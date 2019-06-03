import { SecurityService, DeviceCheckType } from '@aerogear/security';
import { Auth } from '@aerogear/auth';
import { init } from '@aerogear/app';
import { PushRegistration } from '@aerogear/push'
import * as config from "./mobile-services"

const app = init(config);

document.addEventListener("deviceready", () => {

  const push = PushNotification.init({
    android: {},
    ios: {},
  });

  push.on('registration', data => {

    new PushRegistration(app.config)
      .register(data.registrationId, "itisme", ["tutu"])
      .then(() => {
        document.getElementById("code").value = data.registrationId;
      }).catch(err => {
        done(err);
      });
  });
}, false);

