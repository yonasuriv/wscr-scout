// Disable right-click
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.select-button button');
    const form = document.getElementById('myForm');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
            form.action = button.value;
        });
    });

    if (document.querySelector('.selected')) {
        form.action = document.querySelector('.selected').value;
    } else {
        buttons[0].classList.add('selected');
        form.action = buttons[0].value;
    }
});

// Focus the input in the search box field when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('search-input');
    input.focus(); 

     // Re-focus the input whenever the user clicks anywhere
    document.addEventListener('click', function () {
        input.focus();
    });

    // Re-focus on the input field when typing anywhere
    document.addEventListener('keydown', function (event) {
        input.focus();
    });
});