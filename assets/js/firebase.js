// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxloZvfl8MuRCcH3T9cVaIZl0lA1x1mmw",
  authDomain: "gamehub-ee1b3.firebaseapp.com",
  databaseURL: "https://gamehub-ee1b3.firebaseio.com",
  projectId: "gamehub-ee1b3",
  storageBucket: "gamehub-ee1b3.appspot.com",
  messagingSenderId: "778532278767"
};
firebase.initializeApp(config);
var dataRef = firebase.database();
var removal = [];

dataRef.ref().on("child_added", function (childSnapshot) {


  var gameID = childSnapshot.val().name;
  var searchedID = childSnapshot.val().appid;

  var newOption = $("<option>");
  newOption.attr("value", gameID);
  newOption.attr("href", '#');
  newOption.attr("data-appid", searchedID);
  newOption.text(gameID);

  // this makes sure that we don't have multiple things in our search bar.
  console.log("game ID" + gameID + "\n");
  if (removal.indexOf(gameID) === -1) {
    removal.push(gameID);
    $("#previousSearch").append(newOption);
    console.log("removal " + removal);
  }
  //  var removal = [];
  //  $('datalist option').each(function () {
  //    if (removal[this.value]) {
  //     $(this).remove()
  //    }
  //   removal[this.value] = true;
  //  })
});


//       dataRef.remove()
//         .then(function() {
//           console.log("Remove succeeded.")
//         })
//         .catch(function(error) {
//           console.log("Remove failed: " + error.message)
//         });
// }
//   function removing(){
// var gameName = firebase.database().ref(gameID);
// var query = gameName.orderByChild('name').equalTo(name);
// query.on('child_added', function(snapshot) {
//     snapshot.ref.remove();
// })

// https://firebase.google.com/docs/reference/js/firebase.database.Reference#remove
//  <span> <a href="#" class='wishlist' data-name=${steamPrevious} data-appid=${searchedID}> ${gameID} </a></span>`);