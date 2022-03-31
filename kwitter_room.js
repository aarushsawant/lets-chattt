
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBqXX2VkZsqdTXki1VcT1XZ_oiR-Kj5GMU",
      authDomain: "kwitter-53bf4.firebaseapp.com",
      databaseURL: "https://kwitter-53bf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-53bf4",
      storageBucket: "kwitter-53bf4.appspot.com",
      messagingSenderId: "356190271971",
      appId: "1:356190271971:web:4fd7464e3ef050c68888d6",
      measurementId: "G-W3W0DPVTL4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
console.log("Room Name -" + room_name);
row="<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this id)'>"+room_name+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addroom()
{
      room_name=document.getElementById("room_name", room_name).value;

      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function  logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

