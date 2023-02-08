// import { config } from '@/config'

// export const getPushNotificationsToken = () => {
//   return messaging.getToken({ vapidKey: config.FIREBASE.PUSH_NOTIFICATIONS.API_KEY })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken)
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log('No registration token available. Request permission to generate one.')
//         // shows on the UI that permission is required
//       }
//     }).catch((err) => {
//       console.log('An error occurred while retrieving token. ', err)
//     })
// }
export {}
