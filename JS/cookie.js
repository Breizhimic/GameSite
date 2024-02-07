document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const closePopupButton = document.getElementById("close-popup");

    function hideCookiePopup() {
        cookiePopup.style.display = "none";
    }

    acceptCookiesButton.addEventListener("click", function () {
        document.cookie = "accepted_cookies=yes;";
        hideCookiePopup();
    });

    closePopupButton.addEventListener("click", function () {
        hideCookiePopup();
    });

    if (document.cookie.indexOf("accepted_cookies=") < 0) {
        cookiePopup.style.display = "block";
    }
});