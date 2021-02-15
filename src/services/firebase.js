import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCkdWm92N6brYRoz7WGFeQxrTmdBX0_3hI',
  authDomain: 'pizzariali.firebaseapp.com',
  databaseURL: 'https://pizzariali.firebaseio.com',
  projectId: 'pizzariali',
  storageBucket: 'pizzariali.appspot.com',
  messagingSenderId: '592046647589',
  appId: '1:592046647589:web:11401a8b1db206da3d12cc',
  measurementId: 'G-Z4CWHQL2NQ',
}

firebase.initializeApp(firebaseConfig)
export default firebase
