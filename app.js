var firebaseConfig = {
    apiKey: "AIzaSyAJMfbX8KVJux5QQV6W2Q4vtA8FRSPMFf8",
    authDomain: "isc-day4.firebaseapp.com",
    databaseURL: "https://isc-day4.firebaseio.com",
    projectId: "isc-day4",
    storageBucket: "isc-day4.appspot.com",
    messagingSenderId: "634458689917",
    appId: "1:634458689917:web:8e510cbe47d702b2b57c14",
    measurementId: "G-F4Q1MHDYJF"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var rootRef = firebase.database().ref("Nefry");

//温度データ
rootRef.on("value", function (ss) {
    var msg = ss.val();
    //html のtempIDにFirebaseから取得した値を入れる
    document.getElementById("temp").innerText = msg.temp + "℃";
    Push.create('こんにちは！', {
        body: '更新をお知らせします！',
        timeout: 8000, // 通知が消えるタイミング
    });
});

Push.Permission.request();