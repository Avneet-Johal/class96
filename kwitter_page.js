const firebaseConfig = {
      apiKey: "AIzaSyAGNr2WuggbanoskiyzjcLB2tkACiPIINA",
      authDomain: "kwitter-d1357.firebaseapp.com",
      databaseURL: "https://kwitter-d1357-default-rtdb.firebaseio.com",
      projectId: "kwitter-d1357",
      storageBucket: "kwitter-d1357.appspot.com",
      messagingSenderId: "179443343451",
      appId: "1:179443343451:web:2b8b41ca53f14cebae1f7e"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("name");
   room_name=localStorage.getItem("room_name");
   function send()
   {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value="";
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}