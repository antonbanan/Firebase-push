importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyDvPrPgSeeRh6DMdSUmSFPKbg2zfQLfd9Y",
	authDomain: "banan-app.firebaseapp.com",
	databaseURL: "https://banan-app.firebaseio.com",
	projectId: "banan-app",
	storageBucket: "banan-app.appspot.com",
	messagingSenderId: "608639374220",
	appId: "1:608639374220:web:789457e3984276a242fca9",
	measurementId: "G-2LG2NTZCSR"
};

firebase.initializeApp(config);

var messaging = firebase.messaging();