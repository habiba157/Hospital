
function authorizeCase() {

    let user =  document.getElementById('case1').value;
    let elements = document.querySelectorAll('.elective');
    elements.forEach(element => {
        const role = element.getAttribute('data-case');
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
//   window.onload = authorizeCase;
document.getElementById("case1").addEventListener("change", authorizeCase);
  


