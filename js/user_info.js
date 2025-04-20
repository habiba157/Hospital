let gradYear = document.getElementById('graduation_year');
let errorMsg = document.getElementById('error_year');

let currentYear = new Date().getFullYear();

gradYear.addEventListener('input', () => {
    if (parseInt(gradYear.value) > currentYear) {
        errorMsg.style.display = 'flex';
        gradYear.value = '';

    }
    else {
        errorMsg.style.display = 'none';
    }
});