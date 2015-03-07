document.addEventListener('DOMContentLoaded', function () {
    var closeBtn =document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            window.close();
        });
    }
});
