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
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    function addroom()
    {
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
      purpose:"adding user name"
 })
 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   console.log("room name - " + Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
     
      });});}
getData();
function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}