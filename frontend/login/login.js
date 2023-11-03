function signup() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let pass1 = document.querySelector("#pass1").value;
  let pass2 = document.querySelector("#pass2").value;

  localStorage.setItem("nameC", name);
  localStorage.setItem("emailC", email);
  localStorage.setItem("pass1C", pass1);
  localStorage.setItem("pass2C", pass2);
  alert("You Are Successfully SignIn Please Go to LogIn");
}
function login() {
  console.log('clicked login')
  let email = document.querySelector("#email1").value;
  let pass = document.querySelector("#password").value;

  var em = localStorage.getItem("emailC");
  var pa = localStorage.getItem("pass2C");
  var btn = document.querySelector(".button");

  fetch("localhost:7001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set Content-Type header here
    },
    body: JSON.stringify({
      username: email,
      password: pass,
      courseId: 1,
      course: {
        courseId: 1,
        courseMetaData: "s",
        courseName: "s",
        courseImageLink: "w",
        courseLink: "w",
        ytCourseLinks: ["", "", "", ""],
      },
      courseList: [],
    }),
  })
    .then((res) => {
      if (res.headers == 200) {
        btn = window.location.replace("../index.html");
      }
    })
    .catch((error) => console.log("ERROR:", error));

  // if (email == em && pa == pass) {
  //   btn = window.location.replace("../index.html");
  // } else {
  //   alert("login failed");
  // }
}
