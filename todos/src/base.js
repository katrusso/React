// import Rebase from 're-base'
// // connection to rebase db for data persistance
// //makes it so we can access this db from any one of our files

// const base = Rebase.createClass({
// 	apiKey: "AIzaSyBIdDI-UUQV13E1jxxQ-MG4WBDQ8x8r2bc",
//     authDomain: "todo-katrusso.firebaseapp.com",
//     databaseURL: "https://todo-katrusso.firebaseio.com",
// })

// export default base


var Rebase = require('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
	apiKey: "AIzaSyBIdDI-UUQV13E1jxxQ-MG4WBDQ8x8r2bc",
    authDomain: "todo-katrusso.firebaseapp.com",
    databaseURL: "https://todo-katrusso.firebaseio.com",
});
var base = Rebase.createClass(app.database());

export default base
