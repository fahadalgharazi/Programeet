var auth = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
        db = firebase.firestore()
		db.collection("userInfo").doc(user.uid).get()
			.then(function (doc) {
				if (doc.exists) {
                    var downloadURL = doc.data().downloadURL;
                    myimg.src = downloadURL;
                }
            })
            document.getElementById('navbar navbar-light navbar-expand-md').innerHTML = `<div class="container-fluid">
            <a class="navbar-brand" href="index.html">PrograMeet</a>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><a class="nav-link active" href="explore.html">Explore</a></li>
                        <!-- <li class="nav-item"><a class="nav-link active" href="ask.html">Ask</a></li> -->
                        <li class="nav-item"><a class="nav-link active" href="contact.html">Contact</a></li>
                        <li class="nav-item"><a class="nav-link active" href="events.html">Events</a></li>
                        <li class="nav-item"><a class="nav-link active" href="form.html">Form</a></li>
                        <li class="nav-item"><a class="nav-link active" href="resources.html">Resources</a></li>
                        <li class="nav-item"><a class="nav-link active"><img class="side-link-icons profile w-inline-block" id="myimg"></a></li>
                        <li class="nav-item"><a class="nav-link active" href="/chat/chat.html"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.searchpng.com%2Fwp-content%2Fuploads%2F2019%2F02%2FChat-Icon-PNG.png&f=1&nofb=1" style=" width:25px"><a class="nav-link active" ></a></li>
                        <button class="btn btn-primary" type="button" onclick="logout()" style="margin-bottom: 19px;">Logout</button>
                    </ul></div>
            </div>
            <hr>`

    } else {
        document.getElementById('navbar navbar-light navbar-expand-md').innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="index.html">PrograMeet</a>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="explore.html">Explore</a></li>
                    <!-- <li class="nav-item"><a class="nav-link active" href="ask.html">Ask</a></li> -->
                    <li class="nav-item"><a class="nav-link active" href="contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link active" href="events.html">Events</a></li>
                    <li class="nav-item"><a class="nav-link active" href="form.html">Form</a></li>
                    <li class="nav-item"><a class="nav-link active" href="resources.html">Resources</a></li>
                    <li class="nav-item"><a class="nav-link active"><img class="side-link-icons profile w-inline-block" id="myimg"></a></li>
                    <li class="nav-item"><a class="nav-link active" href="settings.html"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fshopping-180%2F32%2F43-512.png&f=1&nofb=1"><a class="nav-link active" ></a></li>
                    <button class="btn btn-primary" type="button" onclick="logout()" style="margin-bottom: 19px;">Logout</button>
                </ul></div>
        </div>
        <hr>`
    }
})
function logout(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}
      
    
