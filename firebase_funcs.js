// This registration token comes from the client FCM SDKs.
// Firebase Info
import { initializeApp, applicationDefault } from "firebase-admin/app";
import admin from "firebase-admin";
initializeApp({
  credential: applicationDefault(),
  // databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});

export const sendNotif = (deviceToken) => {
  const notification_options = {
    priority: "high",
  };
  try {
    admin
      .messaging()
      .sendToDevice(
        deviceToken,
        {
          notification: { title: "Yaswitha", body: "Bujji Konda" },
        },
        notification_options
      )
      .then((res) => {
        console.log("NOTIF SENT");
      });
  } catch (err) {
    console.error(err);
  }

  // Send a message to the device corresponding to the provided
  // registration token.
  // getMessaging()
  //   .send(message)
  //   .then((response) => {
  //     // Response is a message ID string.
  //     console.log("Successfully sent message:", response);
  //   })
  //   .catch((error) => {
  //     console.log("Error sending message:", error);
  //   });
};
