
// var status_list = document.querySelectorAll(".status");
// var btn = document.querySelectorAll(".btn-show");

// for (var i = 0; i < status_list.length; i++) {

//     if (status_list[i].innerHTML == "Active") {

//         // btn[i].addEventListener("click", function () {

//       for (var j = 0; j < btn.length; j++) {
//         btn[j].addEventListener("click", function () {
//             window.location.href = "pages/home.html";
//         });
//     }

//     }
//     else if (status_list[i].innerHTML == "Pending") {

//         for (var j = 0; j < btn.length; j++) {
//             btn[j].addEventListener("click", function () {
//                 window.location.href = "pages/home_manager.html";
//             });
//         }
//     }
//     else{}
    
// }

// function updateButtonHrefs() {
//     const statusElements = document.querySelectorAll('table tr td:nth-child(4)'); // Assuming the status elements are in the second column of each row
//     const buttonElements = document.querySelectorAll('table tr td:nth-child(5) button'); // Assuming the buttons are in the third column of each row
  
//     for (let i = 0; i < statusElements.length; i++) {
//       const statusElement = statusElements[i];
//       const buttonElement = buttonElements[i];
  
//       const statusText = statusElement.innerHTML;
  
//       if (statusText.contains('Active')) {
//         buttonElement.href = 'pages/home.html';
//       } else if (statusText === 'Pending') {
//         buttonElement.href = 'pages/home_manager.html';
//       } else {
//         // Handle other possible status values if needed
//         // buttonElement.href = 'https://example.com/default';
//       }
//     }
//   }


const hamburgerNav = document.querySelector(".navbar .hamburger");
const hamburgerNavSide = document.querySelector(".navbar-side .hamburger");
const navMenu = document.querySelector(".navbar .nav-menu");
const navMenuSide = document.querySelector(".navbar-side .nav-menu");
hamburgerNav.addEventListener("click", mobileMenuNav);
hamburgerNavSide.addEventListener("click", mobileMenuSide);
function mobileMenuNav() {
    hamburgerNav.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function mobileMenuSide() {
    hamburgerNavSide.classList.toggle("active");
    navMenuSide.classList.toggle("active");
}
function closeMenu() {
    hamburgerNav.classList.remove("active");
    navMenu.classList.remove("active");
    navMenuSide.classList.remove("active");
}


var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function () {
        li_elements.forEach(function (li) {
            li.classList.remove("active");
        });
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function (item) {
            item.style.display = "none";
        });
        if (li_value == "information") {
            document.querySelector("." + li_value).style.display = "flex";
        } else if (li_value == "medical") {
            document.querySelector("." + li_value).style.display = "flex";
        } else if (li_value == "examinations") {
            document.querySelector("." + li_value).style.display = "flex";
        } else if (li_value == "comments") {
            document.querySelector("." + li_value).style.display = "flex";
        }else if (li_value == "management") {
            document.querySelector("." + li_value).style.display = "flex";
        }
        else {
            console.log("");
        }
    });
}


function printReport() {    
    window.print();
}


document.addEventListener('DOMContentLoaded', () => {
    const tomorrowDateElement = document.getElementById('date_tomorrow');
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();
    const tomorrow = `${day}-${month}-${year}`;
    tomorrowDateElement.innerHTML = tomorrow;
});

// function addSelectField() {
    // Create a new select element
    // var select = document.createElement("select");

    // // Create options for the select element
    // var option1 = document.createElement("option");
    // option1.value = "option1";
    // option1.text = "Option 1";
    // select.appendChild(option1);

    // var option2 = document.createElement("option");
    // option2.value = "option2";
    // option2.text = "Option 2";
    // select.appendChild(option2);

    // // Append the select element to the form
    // document.getElementById("myForm").appendChild(select);
// }

// function addField(){
//     var select = document.createElement("select");

//     // Create options for the select element
//     var option1 = document.createElement("option");
//     option1.value = "option1";
//     option1.text = "Option 1";
//     select.appendChild(option1);

//     var option2 = document.createElement("option");
//     option2.value = "option2";
//     option2.text = "Option 2";
//     select.appendChild(option2);

//     // Append the select element to the form
//     document.getElementById("formfield").appendChild(select);
// }
// $(document).ready(function() {
//     $('#add-surgeon').click(function() {
//         var values = ["Ahmed", "Mohamed"];
 
//     var select = $('<select>').prop('id', 'surgeons').prop('class', 'form-select')
//                     ;
 
//     $(values).each(function() {
//         select.append($("<option>")
//         .prop('value', this)
//         .prop('class', 'form-control')
//         .text(this.charAt(0).toUpperCase() + this.slice(1)));
//     });
 
//     var label = $("<label>").prop('for', 'surgeons')
//                     .text("Surgeon : ");
 
//     var br = $("<br>");
 
//     var col = $('<div>').prop('class', 'col-md-4 mt-3');
//     $('#formfield_surgeon').append(col).append(label).append(select).append(br);
//     })
// });

function authorizeType() {
    let user =  document.getElementById('type_room').value;
    console.log(user+"authorize type");
    let elements = document.querySelectorAll('.room_number');
    elements.forEach(element => {
        const role = element.getAttribute('data-type');
        if (user === role) {
            element.style.display = 'flex';
            console.log(elements+"authorize");
            console.log(user+"authorize");

        } else {
            element.style.display = 'none';
            console.log(elements+"authorize none");
            console.log(user+"authorize none");
        }
    });
  } 
document.getElementById("type_room").addEventListener("change", authorizeType);
  
function showPrint(){
    var btnReport = document.getElementById("btn-report");
    btnReport.style.display = "flex";
    var btnSave = document.getElementById("btn-hide");
    btnSave.style.display = "none";
}