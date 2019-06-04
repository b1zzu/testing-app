
document.addEventListener("deviceready", () => {

  const push = PushNotification.init({
    android: {},
    ios: {},
  });

  push.on('registration', data => {
    console.log(`registration id: ${data.registrationId}`);
  });

  push.on("notification", data => {
    console.log(`recivied notification: ${data.message}`);
  })

  push.on("error", e => {
    console.error(e);
  });

}, false);

