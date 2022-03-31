//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                likes:0
          });
          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
likes=message_data['likes'];
namewith_tick="<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message1="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
thumpsup="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
row=namewith_tick+message1+like_button+thumpsup;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      button_id=message_id;
      like=document.getElementById(button_id).value;
      update_like=Number(like)+1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({ like : update_like });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}