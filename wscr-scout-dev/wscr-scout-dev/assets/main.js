document.getElementById("mainButton").addEventListener("click", function(event) {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const link = selectedOption.value;
        const input = document.getElementById("search-input").value;
        if (input != "" && input != null) {
            window.location.href = link + encodeURIComponent(input);
        } else {
            alert("Please enter a search query.");
        }
    } else {
        alert("Please select a search engine.");
    }
});

document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        const selectedOption = document.querySelector('input[name="option"]:checked');

        if (selectedOption) {
            const link = selectedOption.value;
            const input = document.getElementById("search-input").value;
            if (input != "" && input != null) {
                window.location.href = link + encodeURIComponent(input);
            } else {
                alert("Please enter a search query.");
            }
        } else {
            alert("Please select a search engine.");
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.select-button button');
    const form = document.getElementById('myForm');
    const searchInput = document.getElementById('search-input');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
            form.action = button.value; // Update the form's action to use the selected search engine
        });
    });

    // Set initial state
    form.action = document.querySelector('.selected').value;

// Disable right click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

/* Light/Dark Mode Function

// JavaScript to handle day/dark mode toggle
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        // Dark mode is activated
        document.body.classList.add("dark-mode");
    } else {
        // Day mode is activated
        document.body.classList.remove("dark-mode");
    }
});


function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    }
}

window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);

*/
