// const env = process.env.NODE_ENV
// let firebaseConfig
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
// if (env === 'production') {
//   firebaseConfig = {
//     apiKey: "AIzaSyDS0iigtbLHgCHs_jlzo0qJXP3temn_FWI",
//     authDomain: "lcp-caracas-a5bf3.firebaseapp.com",
//     databaseURL: "https://lcp-caracas-a5bf3.firebaseio.com",
//     projectId: "lcp-caracas-a5bf3",
//     storageBucket: "lcp-caracas-a5bf3.appspot.com",
//     messagingSenderId: "483035691854",
//     appId: "1:483035691854:web:5b7958674c01544a77fc1f",
//     measurementId: "G-MV1ZL5Q5FF"
//   }
// } else {
//   firebaseConfig = {
//     apiKey: "AIzaSyBfJ-4c8hMUfODbt5hIDbdaISgZqfayr6Q",
//     authDomain: "lcp-caracas-test.firebaseapp.com",
//     databaseURL: "https://lcp-caracas-test-default-rtdb.firebaseio.com",
//     projectId: "lcp-caracas-test",
//     storageBucket: "lcp-caracas-test.appspot.com",
//     messagingSenderId: "456792375106",
//     appId: "1:456792375106:web:df022c46417a443b72d2db",
//     measurementId: "G-WFZ5XRWKYE"
//   }
// }


firebase.initializeApp({
  apiKey: "AIzaSyDS0iigtbLHgCHs_jlzo0qJXP3temn_FWI",
  authDomain: "lcp-caracas-a5bf3.firebaseapp.com",
  databaseURL: "https://lcp-caracas-a5bf3.firebaseio.com",
  projectId: "lcp-caracas-a5bf3",
  storageBucket: "lcp-caracas-a5bf3.appspot.com",
  messagingSenderId: "483035691854",
  appId: "1:483035691854:web:5b7958674c01544a77fc1f",
  measurementId: "G-MV1ZL5Q5FF"
})

const messaging = firebase.messaging()
// Both of them ain't working

// background notifications will be received here
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/img/logo.webp'
  }

  return self.registration.showNotification(notificationTitle, notificationOptions)
})

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/img/logo.webp'
  }

  return self.registration.showNotification(notificationTitle, notificationOptions)
})

