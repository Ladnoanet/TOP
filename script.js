function isMobileScreen() {
    return window.innerWidth <= 350 && window.innerHeight > window.innerWidth;
}

function checkDeviceAndRedirect() {
    if (!isMobileScreen()) {
        window.location.href = "404.html";
    }
}

checkDeviceAndRedirect();

window.addEventListener('resize', checkDeviceAndRedirect);

window.addEventListener('orientationchange', () => {
    setTimeout(checkDeviceAndRedirect, 100);
});