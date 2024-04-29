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

// Add favicon icons to the URLs
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a[display-favicon]");
    links.forEach(function(link) {
        var url = new URL(link.href);
        var faviconUrl = "https://www.google.com/s2/favicons?domain=" + url.hostname;
        var faviconImg = document.createElement("img");
        faviconImg.src = faviconUrl;
        faviconImg.style.marginRight = "5px"; // Adjust spacing as needed
        link.insertAdjacentElement("afterbegin", faviconImg);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var selectButtons = document.querySelectorAll('.select-button button');

    // Add event listener to each select button
    selectButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var selectedValue = this.getAttribute('value');
            var selectedName = this.getAttribute('data-name');
            
            // Update action attribute of the form
            document.getElementById('myForm').setAttribute('action', selectedValue);

            // Update name attribute of the input field
            document.getElementById('search-input').setAttribute('name', selectedName);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var selectButtons = document.querySelectorAll('.select-button button');

    // Add event listener to each select button
    selectButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var selectedValue = this.getAttribute('value');
            var selectedName = this.getAttribute('data-name');

            // Update action attribute of the form
            document.getElementById('myForm').setAttribute('action', selectedValue);

            // Update name attribute of the input field
            document.getElementById('search-input').setAttribute('name', selectedName);

            // Update the URL in the browser without causing a page reload
            history.pushState(null, null, selectedValue);
        });
    });
});

$(function(){
    // Load header.html and insert it into the header element
    $("header").load("assets/components/menu.html");
    // $("footer").load("assets/components/footer.html");
    // $("#home").load("home.html");
    // $("#sphere").load("sphere.html");
    // $("#decode-text").load("decode-text.html");
    // $("#search-bar").load("search-bar.html");
});

