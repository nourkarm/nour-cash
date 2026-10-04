// Firebase Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDlG3Yn6QqScAL1ZuAlexkkM3Or1C3segs",
  authDomain: "nourcash-web.firebaseapp.com",
  projectId: "nourcash-web",
  storageBucket: "nourcash-web.firebasestorage.app",
  messagingSenderId: "211551687077",
  appId: "1:211551687077:web:bf134ba03078a48773584c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title || 'نور كاش';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/android-chrome-192x192.png',
    badge: '/android-chrome-192x192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
