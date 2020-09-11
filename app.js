// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
let navToggle = document.querySelector('.nav-toggle'),
    linksContainer = document.querySelector('.links-container'),
    links = document.querySelector('.links');

    navToggle.addEventListener('click', () => {
        let containerHeight = linksContainer.getBoundingClientRect().height,
            linksHeight = links.getBoundingClientRect().height;
        if(containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`
        } else {
            linksContainer.style.height = 0
        }
    })

// ********** fixed navbar ************
let navbar = document.querySelector('nav'),
    topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
    let scrollHeight = window.pageYOffset,
        navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight ) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let id = e.currentTarget.getAttribute('href').slice(1),
            element = document.getElementById(id),
            navHeight = navbar.getBoundingClientRect().height,
            containerHeight = linksContainer.getBoundingClientRect().height,
            fixedNav = navbar.classList.contains('fixed-nav'),
            position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position -= navHeight;
        }
        if (navHeight > 82) {
            position += containerHeight;
        }
        window.scrollTo( {
            left:0,
            top:position,
        })
        linksContainer.style.height = 0
    })
});

let btns = document.querySelectorAll('.tab-btn'),
    about = document.querySelector('.about'),
    articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        articles.forEach((article) => {
            article.classList.remove('active');
        })
        let element = document.getElementById(id);
        element.classList.add('active');
    }
})

window.addEventListener("load", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        alert("Message sent. \n Thanks \n Will get back to you");
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}