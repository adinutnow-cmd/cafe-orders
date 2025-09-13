// Use Firebase v8 inside Service Worker
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

console.log("🛠 Service Worker loaded");

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDR9hkeAE5jn-Ojoq7ANMA28EKBlGWRwNQ",
  authDomain: "cafeorders-3cd97.firebaseapp.com",
  databaseURL: "https://cafeorders-3cd97-default-rtdb.firebaseio.com",
  projectId: "cafeorders-3cd97",
  storageBucket: "cafeorders-3cd97.firebasestorage.app",
  messagingSenderId: "1066008207283",
  appId: "1:1066008207283:web:016435ecd8c9ba327d35c6",
  measurementId: "G-TY9137GQ82"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📦 Background message received:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});
