var ref = new Firebase("https://fiery-inferno-4972.firebaseio.com");
var userId;

// This should be refactored at some point since it's redundant with the auth in firebase.js
$(document).ready(function(){
  
  var authData = ref.getAuth();
  
  // User is logged in
  if(authData) {
    
    userId = authData.uid;
    
    var usersRef = ref.child("droneblocks/users/" + userId + "/missions");
    
    usersRef.orderByChild("createdAt").on("child_added", function(snapshot) {
      $("#missionList").append('<a href="index.html?missionId=' + snapshot.val().missionId + '" class="collection-item">' + snapshot.val().title + '</a>');
    });
    
    
  // User not logged in take them to the block page
  } else {
    
    document.location.href = "index.html";
    
  }
  
});

function getMissionsForUser() {
  var missionsRef = ref.child("droneblocks/missions");
  missionsRef.orderByChild({
    
  });
}