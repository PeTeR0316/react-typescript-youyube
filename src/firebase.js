import firebase from "firebase/app";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyBOZIpAguupdTPX4IWJrk63rw9nMzvCt8M",
    authDomain: "react-ab316.firebaseapp.com",
    projectId: "react-ab316",
    storageBucket: "react-ab316.appspot.com",
    messagingSenderId: "182351669462",
    appId: "1:182351669462:web:2d7c6be4817abb27dbc177",
    measurementId: "G-XXPTRFYJC3"
};

// firebaseConfig 정보로 firebase 시작
// 필요한 곳에서 사용할 수 있도록 내보내기
export default firebase.initializeApp(firebaseConfig);