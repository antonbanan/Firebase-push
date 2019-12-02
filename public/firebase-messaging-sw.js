importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

var config = {
 	apiKey: "AIzaSyDTbeOMHPesGkvTHmi1_iNGwO5ctiVXhys",
	authDomain: "push-banan.firebaseapp.com",
	databaseURL: "https://push-banan.firebaseio.com",
	projectId: "push-banan",
	storageBucket: "push-banan.appspot.com",
	messagingSenderId: "213429851920",
	appId: "1:213429851920:web:380d660b73ca28e8843795"
};

firebase.initializeApp(config);
console.log("worker start")
var messaging = firebase.messaging();