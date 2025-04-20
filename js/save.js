
function saveButton() {

    let user = localStorage.getItem('sessionUsername');
  
    if (user === 'admin') {
      
      $(".btn-end").off('click').on('click', function () {
        window.location.href = "dashboard.html";
      });
      
    }
    else if(user === 'doctor') {
      $(".btn-end").off('click').on('click', function () {
        window.location.href = "dashboard.html";
      });
    }
    else if(user === 'employee') {
      $(".btn-end").off('click').on('click', function () {
        window.location.href = "patient_list.html";
      });
    }
    else {
     console.log("no user");
     
    }
  
  }
  
  window.onload = saveButton;