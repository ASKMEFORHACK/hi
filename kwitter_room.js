
var firebaseConfig = {
  apiKey: "AIzaSyBjK_JJBwGNeVlskyWbYjtlYngGsaa3mS4",
  authDomain: "kwitter-c92d5.firebaseapp.com",
  databaseURL: "https://kwitter-c92d5-default-rtdb.firebaseio.com",
  projectId: "kwitter-c92d5",
  storageBucket: "kwitter-c92d5.appspot.com",
  messagingSenderId: "667685019266",
  appId: "1:667685019266:web:9d54b460e6fb0200f99e9b"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "kwitter.html";
}

