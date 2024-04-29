let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
        bodyUnlock(delay);
    } else {
        bodyLock(delay);
    }
};
let bodyUnlock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]');
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            document.documentElement.classList.remove('lock');
        }, delay);
        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};

let bodyLock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
        let lock_padding = document.querySelectorAll('[data-lp]');
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight =
                window.innerWidth -
                document.querySelector('.wrapper').offsetWidth +
                'px';
        }
        body.style.paddingRight =
            window.innerWidth -
            document.querySelector('.wrapper').offsetWidth +
            'px';
        document.documentElement.classList.add('lock');

        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date(2023, 8, 25);

    const timerElement = document.querySelector('.timer');

    if (timerElement) {
        let timerId = null;
        const $days = document.querySelector('.timer__days');
        const $hours = document.querySelector('.timer__hours');
        const $minutes = document.querySelector('.timer__minutes');
        const $seconds = document.querySelector('.timer__seconds');

        function countdownTimer() {
            const diff = deadline - new Date();
            if (diff <= 0) {
                clearInterval(timerId);
            }
            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

            $days.textContent = days < 10 ? '0' + days : days;
            $hours.textContent = hours < 10 ? '0' + hours : hours;
            $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        }

        countdownTimer();

        timerId = setInterval(countdownTimer, 1000);
    }

    const burger = document.querySelector('.burger');
    const headerNav = document.querySelector('.header__nav');
    if (burger && headerNav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('_menu-open');
            headerNav.classList.toggle('_menu-open');
            bodyLockToggle();
        });
    }

    (function ibg() {
        let ibg = document.querySelectorAll('.ibg');
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage =
                    'url(' +
                    ibg[i].querySelector('img').getAttribute('src') +
                    ')';
            }
        }
    })();

    const spoilers = document.querySelectorAll('.spoiler');
    if (spoilers.length > 0) {
        for (let i = 0; i < spoilers.length; i++) {
            const spoiler = spoilers[i];
            const spoilerHeader = spoiler.querySelector('.spoiler__header');

            spoilerHeader.addEventListener('click', () => {
                spoiler.classList.toggle('_active');
            });
        }
    }

    const productsAside = document.querySelector('.products__aside');
    const filterButton = document.querySelector('.button-filter');
    const productsClose = document.querySelector('.products__close');
    if (filterButton && productsClose && productsAside) {
        productsClose.addEventListener('click', () => {
            productsAside.classList.remove('_active');
        });
        filterButton.addEventListener('click', () => {
            productsAside.classList.add('_active');
        });
    }
});
