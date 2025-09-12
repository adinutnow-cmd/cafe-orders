// Service Worker للتنبيهات بالخلفية
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDR9hkeAE5jn-Ojoq7ANMA28EKBlGWRwNQ",
  authDomain: "cafeorders-3cd97.firebaseapp.com",
  projectId: "cafeorders-3cd97",
  storageBucket: "cafeorders-3cd97.appspot.com",
  messagingSenderId: "1066008207283",
  appId: "1:1066008207283:web:016435ecd8c9ba327d35c6",
  measurementId: "G-TY9137GQ82"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});
