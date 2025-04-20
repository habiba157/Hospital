// !starttt

// var signupName = document.getElementById('signupName');
// var signupEmail = document.getElementById('signupEmail');
// var signupPassword = document.getElementById('signupPassword');
// var signinEmail = document.getElementById('signinEmail');
// var signinPassword = document.getElementById('signinPassword');
// var signupDiv = document.getElementById("signupDiv");
// var signinDiv = document.getElementById("signinDiv");
// var homeSection = document.getElementById("home");
// var users = [];
// var username = localStorage.getItem('sessionUsername')
// if (username != null) {
//   document.getElementById('username').innerHTML = "Welcome " + username;
// }
// if (localStorage.getItem('users') == null) {
//   users = []
// } else {
//   users = JSON.parse(localStorage.getItem('users'))
// }


// function signUp() {
//   if (isEmpty() == false) {
//     document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//     return false
//   }
//   var signUp = {
//     name: signupName.value,
//     email: signupEmail.value,
//     password: signupPassword.value,
//   }
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (emailRegex.test(signupEmail.value)) {


//     if (users.length == 0) {

//       users.push(signUp);
//       localStorage.setItem('users', JSON.stringify(users));
//       document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
//       showSigninDiv();
//       return true
//     }
//     if (isEmailExist() == true) {
//       document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

//     } else {
//       users.push(signUp);
//       localStorage.setItem('users', JSON.stringify(users));
//       document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
//       showSigninDiv();

//     }



//   } else {
//     document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Wrong format of email</span>'

//   }





// }

// function isEmpty() {

//   if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
//     return false
//   } else {
//     return true
//   }
// }





// // for check email is exist
// function isEmailExist() {
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
//       return true;
//     }
//   }
// }


// function showSigninDiv() {
//   if (signinDiv.classList.contains("d-none")) {
//     signinDiv.classList.replace("d-none", "d-block");
//     signupDiv.classList.replace("d-block", "d-none");
//     homeSection.classList.replace("d-block", "d-none");
//   }
// }
// function showSignupDiv() {
//   if (signupDiv.classList.contains("d-none")) {
//     signinDiv.classList.replace("d-block", "d-none");
//     signupDiv.classList.replace("d-none", "d-block");
//     homeSection.classList.replace("d-block", "d-none");
//   }
// }
// function showHomeDiv() {
//   if (homeSection.classList.contains("d-none")) {
//     signinDiv.classList.replace("d-block", "d-none");
//     signupDiv.classList.replace("d-block", "d-none");
//     homeSection.classList.replace("d-none", "d-block");
//   }
// }

// function isLoginEmpty() {

//   if (signinPassword.value == "" || signinEmail.value == "") {
//     return false
//   } else {
//     return true
//   }
// }

// function login() {
//   if (isLoginEmpty() == false) {
//     document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//     return false
//   }
//   var password = signinPassword.value;
//   var email = signinEmail.value;
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password.toLowerCase() == password.toLowerCase()) {
//       localStorage.setItem('sessionUsername', users[i].name);
//       showHomeDiv();
//     } else {
//       document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
//     }
//   }

// }
var signupRole = document.getElementById('signupRole');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var signupDiv = document.getElementById("signupDiv");
var signinDiv = document.getElementById("signinDiv");
var homeSection = document.getElementById("home");
var users = [];

document.addEventListener('DOMContentLoaded', () => {
  const currentDateInput = document.getElementById('currentDate');
  const futureDateInput = document.getElementById('futureDate');

  if (currentDateInput && futureDateInput) {
    currentDateInput.value = getCurrentDate();
    futureDateInput.value = getCurrentDatePlusYear();
  } else {
    console.error('One or both input elements not found.');
  }
});

function getCurrentDate() {
  const today = new Date();
  return today.toISOString().slice(0, 10); // Format the date as YYYY-MM-DD
}

function getCurrentDatePlusYear() {
  const today = new Date();
  today.setFullYear(today.getFullYear() + 1);
  return today.toISOString().slice(0, 10); // Format the date as YYYY-MM-DD
}
var username = localStorage.getItem('sessionUsername');

var toggler = document.getElementById('toggler');
showHidePassword = () => {
  if (signinPassword.type == 'password') {
    signinPassword.setAttribute('type', 'text');
    toggler.classList.add('fa-eye-slash');
  } else {
    toggler.classList.remove('fa-eye-slash');
    password.setAttribute('type', 'password');
  }
};
if (toggler) {
  toggler.addEventListener('click', showHidePassword);
}
else {
  console.log("no toggler");
}

if (localStorage.getItem('users') == null) {
  users = [
    {
      role: "admin",
      email: "mostafa@gmail.com",
      password: "12345678"
    },
    {
      role: "admin",
      email: "mohamed@gmail.com",
      password: "12345678"
    },
    {
      role: "admin",
      email: "habiba@gmail.com",
      password: "12345678"
    }
  ]

  localStorage.setItem('users', JSON.stringify(users));
} else {
  users = JSON.parse(localStorage.getItem('users'))
  console.log(users);
}

// users.push(JSON.stringify(admins))
//localStorage.setItem('admins', JSON.stringify(admins));
console.log("admin" + users)

function signUp() {
  if (isEmpty() == false) {
    document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
  }
  var signUp = {
    role: signupRole.value,
    email: signupEmail.value,
    password: signupPassword.value,
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(signupEmail.value)) {
    if (users.length == 0) {
      users.push(signUp);
      localStorage.setItem('users', JSON.stringify(users));
      document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
      window.location.href = "../index.html"
      return true
    }
    if (isEmailExist() == true) {
      document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
      users.push(signUp);
      localStorage.setItem('users', JSON.stringify(users));
      document.getElementById('incorrect').innerHTML = '<span class="text-success m-3">Success</span>';
      window.location.href = "../index.html"
    }
  } else {
    document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">Wrong format of email</span>'
  }

}

function isEmpty() {

  if (signupRole.value == "" || signupEmail.value == "" || signupPassword.value == "") {
    return false
  } else {
    return true
  }
}





// for check email is exist
function isEmailExist() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() === signupEmail.value.toLowerCase()) {
      return true;
    }
  }
}

function isLoginEmpty() {

  if (signinPassword.value == "" || signinEmail.value == "") {
    return false
  } else {
    return true
  }
}

function login() {
  if (isLoginEmpty() == false) {
    document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
  }
  var password = signinPassword.value;
  var email = signinEmail.value;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password.toLowerCase() == password.toLowerCase() && users[i].role == "doctor") {
      localStorage.setItem('sessionUsername', users[i].role);

      document.getElementById('incorrect').innerHTML = '<span class="p-2 text-success">Success</span>'

      window.location.href = "pages/dashboard.html";     
      console.log('if doctor')
      break;
    }
    else if (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password.toLowerCase() == password.toLowerCase() && users[i].role == "admin") {
      var name = users[i].email.split("@")[0];
      console.log(name);
      var username = name[0].toUpperCase() + name.slice(1);
      // console.document('incorrect').innerHTML = '<span class="p-2 text-danger">else if</span>
      alert("Welcome, DR. " + username);
      localStorage.setItem('sessionUsername', users[i].role);
      window.location.href = "pages/dashboard.html";
      $(".btn-end").off('click').on('click', function () {
        window.location.href = "dashboard.html";
      });
      document.getElementById('incorrect').innerHTML = '<span class="p-2 text-success">Success</span>'

      console.log('else if admin');
      break;
    }
    else if (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password.toLowerCase() == password.toLowerCase() && users[i].role == "employee") {
      localStorage.setItem('sessionUsername', users[i].role);
      window.location.href = "pages/patient_list.html";
      $(".btn-end").off('click').on('click', function () {
        window.location.href = "patient_list.html";
      });
      document.getElementById('incorrect').innerHTML = '<span class="p-2 text-success">Success</span>'

      console.log('else if employee');
      break;
    }
    else {
      console.log('else');
      document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    }
  }

}


function authorize() {
  let user = localStorage.getItem('sessionUsername');
  let elements = document.querySelectorAll('.role-based');
  elements.forEach(element => {
    const role = element.getAttribute('data-role');
    // if (user !== role) {
    //     element.style.display = 'none';
    //     console.log(element+"authorize not equal role first if");
    // }
    // else if (role === 'both') {
    //     user = 'employee';
    //     if (user !== role) {
    //         element.style.display = 'none';
    //         console.log(element+"authorize not equal role nested if");
    //         alert('employee not authorized');
    //     }

    // }
    console.log(user + " role");

    if (role === 'admin' && user !== role) {
      console.log('if admin');
      element.style.display = 'none';
      console.log(element + "authorize admin");
    }
    else if (role === 'doctor' && user !== role) {
      console.log(user + " rolee doctor else if");
      // user = 'doctor';
      element.style.display = 'none';
      console.log(element + "authorize doctor");
    }
    else if (role === 'employee' && user !== role) {
      // user = 'employee';
      element.style.display = 'none';
      console.log(element + "authorize employee");
    }
    else if (role === 'both' && user === 'employee') {
      element.style.display = 'none';
      console.log(element + "authorize both");
    }
  });
}


// window.onload = authorize;
$(document).ready(function () {
  authorize();
});


function logout() {
  localStorage.removeItem('sessionUsername')
}

// To hide certain parts of three different pages based on user roles, you can use JavaScript to dynamically show or hide elements based on the user's role. Here's a more detailed example:

// ### HTML (Page 1)
// html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Page 1</title>
// </head>
// <body>
//     <div id="adminSection" class="role-based" data-role="admin">
//         <h1>Admin Section</h1>
//         <p>Only visible to admins.</p>
//     </div>
//     <div id="userSection" class="role-based" data-role="user">
//         <h1>User Section</h1>
//         <p>Visible to all users.</p>
//     </div>
//     <script src="auth.js"></script>
// </body>
// </html>


// {/* ### HTML (Page 2)
// html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Page 2</title>
// </head>
// <body>
//     <div id="adminSection" class="role-based" data-role="admin">
//         <h1>Admin Section</h1>
//         <p>Only visible to admins.</p>
//     </div>
//     <div id="userSection" class="role-based" data-role="user">
//         <h1>User Section</h1>
//         <p>Visible to all users.</p>
//     </div>
//     <script src="auth.js"></script>
// </body>
// </html>

// {/*
// ### HTML (Page 3)
// html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Page 3</title>
// </head>
// <body>
//     <div id="adminSection" class="role-based" data-role="admin">
//         <h1>Admin Section</h1>
//         <p>Only visible to admins.</p>
//     </div>
//     <div id="userSection" class="role-based" data-role="user">
//         <h1>User Section</h1>
//         <p>Visible to all users.</p>
//     </div>
//     <script src="auth.js"></script>
// </body>
// </html> */}

// {/*
// const users = [
//     { username: 'admin', role: 'admin' },
//     { username: 'user1', role: 'user' }
// ];

// // Function to get the current user (mock implementation)
// function getCurrentUser() {
//     // In a real application, you would get this from your authentication system
//     return users[0]; // Assuming the first user is logged in
// }

// // Function to check user role and show/hide sections
// function authorize() {
//     const user = ;
//     const elements = document.querySelectorAll('.role-based');
//     elements.forEach(element => {
//         const role = element.getAttribute('data-role');
//         if (user.role !== role) {
//             element.style.display = 'none';
//         }
//     });
// } 

