importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDuGLk6xsETWv3ZGdva9GWNUAqZsgL8-Yc",
    authDomain: "frezzo-cdefe.firebaseapp.com",
    databaseURL: "https://frezzo-cdefe.firebaseio.com",
    projectId: "frezzo-cdefe",
    storageBucket: "frezzo-cdefe.appspot.com",
    messagingSenderId: "785201367290",
    appId: "1:785201367290:web:8eb9267f70502166596143",
    measurementId: "G-RRCYWW4S96"
});
const messaging = firebase.messaging();