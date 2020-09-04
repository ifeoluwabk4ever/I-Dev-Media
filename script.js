topButton = document.querySelector('#topBtn');
header = document.querySelector('header');


    window.onscroll = function() {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.documentElement.scrollTop > 300) {
            topButton.style.display = "block";
            header.style.position = 'fixed'
            header.style.zIndex = '5'
            header.style.boxShadow = '4px 3px 2px #ccc'
        }else {
            topButton.style.display = "none";
            header.style.position = 'initial'

        };
    };

    function topFunction() {
        document.documentElement.scrollTop = 0;
    }
    document.querySelector('#copyright')
        .appendChild(document.createTextNode(new Date().getFullYear()));

    document.querySelector('.drop-line').addEventListener('click', () => {
        document.querySelector('.dropdown').classList.toggle('pop-out');
    });
    dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('pop-out');
    });

    
    // function isEmail(email) {
    //         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //         return re.test(String(email).toLowerCase());
    // }

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