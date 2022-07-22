(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.querySelector(".form");
    new window.JustValidate(".form", {
        submitHandler: function(thisForm) {
            let formData = new FormData(thisForm);
            let xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function() {
                if (4 === xhr.readyState) if (200 === xhr.status) console.log("Отправлено");
            };
            xhr.open("POST", "mail.php", true);
            xhr.send(formData);
            thisForm.reset();
        }
    });
    window["FLS"] = true;
    isWebp();
})();