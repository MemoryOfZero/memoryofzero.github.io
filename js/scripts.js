var db = firebase.firestore()

function signUp() {
  alert('adding user');
  var email = document.querySelector("#inputEmail2").value;
  if (document.querySelector("#inputPassword2").value == document.querySelector("#inputPassword3").value) {
    var password = document.querySelector("#inputPassword2").value
  } else {
    alert("Passwords do not match")
    return
  };

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => alert("Error: " + error.message))
};

function logIn() {
  alert("logging in");
  var email = document.querySelector("#inputEmail1").value;
  var password = document.querySelector("#inputPassword1").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(error => alert("Error: " + error.message));
};

function logOut() {
  firebase.auth.signOut().then(() => alert("logged out").catch(error => alert("Error: " + error.message)));
};

function submit() {
  var f_name = document.querySelector("#fName").value;
  var l_name = document.querySelector("#lName").value;
  var in_email = document.querySelector("#email").value;
  var in_phone = document.querySelector("#phone").value;
  var in_comment = document.querySelector("#textArea").value;

  db.collection("comments").add({
    fName: f_name,
    lName: l_name,
    email: in_email,
    phone: in_phone,
    comment: in_comment
  }).then((docRef) => {
    console.log(docRef.id, " added to database");
  }).catch((error) => {
    alert("Error:" + error.message);
  });
};

