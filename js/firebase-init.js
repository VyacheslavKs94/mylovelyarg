// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue, push, serverTimestamp} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZ0BnnBEyOLwbUlZVYc_JE9TFCcLAtsas",
    authDomain: "lifeclicker-775e6.firebaseapp.com",
    databaseURL: "https://lifeclicker-775e6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lifeclicker-775e6",
    storageBucket: "lifeclicker-775e6.appspot.com",
    messagingSenderId: "484092324993",
    appId: "1:484092324993:web:773c413c62a37a2f9bb180",
    measurementId: "G-FQS5ZMQP9C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

window.db = db;
window.firebaseRef = ref;
window.firebaseSet = set;
window.firebaseOnValue = onValue;
window.firebasePush = push; // Attach Firebase `push` to the window object
window.firebaseServerTimestamp = serverTimestamp; // Attach serverTimestamp to the window object
