
function updateButtonStates() {
    $('table tbody tr').each(function() {
        var status = $(this).find('td:nth-child(5)').text();
        var buttonEdit = $(this).find('.btn-show');
        var user = localStorage.getItem('sessionUsername');

        console.log('Status:', status);
        console.log('Edit Button:', buttonEdit);
        console.log('User:', user);
        if (buttonEdit.length > 0) { // Check if the button exists
            if (status === 'Active' && (user === 'admin' || user === 'doctor')) {
                buttonEdit.off('click').on('click', function() {
                    window.location.href = 'home.html';
                    console.log('Redirected to home.html');
                });
            } else if (status === 'Pending' && (user === 'admin' || user === 'doctor')) {
                 buttonEdit.off('click').on('click', function() {
                    window.location.href = 'home_manager.html';
                    console.log('Redirected to home_manager.html');
                });
            }
            else if (user === 'employee' && (status === 'Active' || status === 'Pending')) {
                buttonEdit.off('click').on('click', function() {
                    window.location.href = 'home_manager.html';
                    console.log('Redirected to home_manager.html');
                });
            }
             else {
                console.log('Unhandled status:', status);
            }
        } else {
            console.error('Button .btn-show not found');
        }
    });
}

$(document).ready(function() {
    updateButtonStates();
});