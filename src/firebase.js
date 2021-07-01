//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0NPnVkGKesZ3XjJZczp6_6EdHwRZKG1I",
    authDomain: "my-dictionary-28052.firebaseapp.com",
    projectId: "my-dictionary-28052",
    storageBucket: "my-dictionary-28052.appspot.com",
    messagingSenderId: "710736408365",
    appId: "1:710736408365:web:1db65c2c2cbc5f87feeda4",
    measurementId: "G-WNHQ77Q7WZ"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };