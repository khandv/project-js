function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descrBtn = document.querySelector('.description-btn');


    function popUp() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', popUp);
    descrBtn.addEventListener('click', popUp);

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        descrBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

module.exports = modal;