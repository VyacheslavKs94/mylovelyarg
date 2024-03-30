// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

window.writeScore = writeScore;
window.getScores = getScores;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ0BnnBEyOLwbUlZVYc_JE9TFCcLAtsas",
    authDomain: "lifeclicker-775e6.firebaseapp.com",
    databaseURL: "https://lifeclicker-775e6-default-rtdb.europe-west1.firebasedatabase.app", // Add your database URL here
    projectId: "lifeclicker-775e6",
    storageBucket: "lifeclicker-775e6.appspot.com",
    messagingSenderId: "484092324993",
    appId: "1:484092324993:web:773c413c62a37a2f9bb180",
    measurementId: "G-FQS5ZMQP9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeScore(userId, score) {
    const db = getDatabase(app); // Make sure to pass `app` to getDatabase
    const scoreRef = ref(db, 'scores/' + userId);
    set(scoreRef, {
        user: userId,
        score: score,
        timestamp: Date.now()
    });
}

function getScores() {
    const db = getDatabase(app); // Make sure to pass `app` to getDatabase
    const scoresRef = ref(db, 'scores/');
    onValue(scoresRef, (snapshot) => {
        const scores = snapshot.val();
        // Process and display scores in your leaderboard
        console.log(scores);
    });
}

// Export these functions if they need to be used in other files
export { writeScore, getScores };
