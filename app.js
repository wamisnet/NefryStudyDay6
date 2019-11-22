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
    if (msg.temp > 25) {
        Push.create('センサー情報', {
            body: '指定された温度を超えました。現在の温度は' + msg.temp + "℃です。",
            timeout: 8000, // 通知が消えるタイミング
        });
    }
    document.getElementById("LED1").innerText = "LED1 : " + (msg.led1 ? "ON" : "OFF");
    document.getElementById("LED2").innerText = "LED2 : " + (msg.led2 ? "ON" : "OFF");
    document.getElementById("LED3").innerText = "LED3 : " + (msg.led3 ? "ON" : "OFF");
    document.getElementById("LED4").innerText = "LED4 : " + (msg.led4 ? "ON" : "OFF");
});

Push.Permission.request();

function btnClick(io, state) {
    rootRef.child("led" + io).set(state);
}