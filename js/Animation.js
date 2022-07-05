const animItems = document.querySelectorAll('.animItems');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('activ');
            } else {
                if (!animItem.classList.contains('animStop')) {
                    animItem.classList.remove('activ');
                }

            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);

}

document.getElementById('login').onclick = function() {
    document.getElementById('authBlock').classList.remove('activ');
    setTimeout(1000)
    document.getElementById('LogIn').classList.add('activ');
}

document.getElementById('logback').onclick = function() {
    document.getElementById('authBlock').classList.add('activ');
    setTimeout(1000)
    document.getElementById('LogIn').classList.remove('activ');
}

document.getElementById('reg').onclick = function() {
    document.getElementById('authBlock').classList.remove('activ');
    setTimeout(1000)
    document.getElementById('Reg').classList.add('activ');
}

document.getElementById('regback').onclick = function() {
    document.getElementById('authBlock').classList.add('activ');
    setTimeout(1000)
    document.getElementById('Reg').classList.remove('activ');
}

document.getElementById('lock').onclick = function() {
    document.getElementById('settingsBox').classList.add('deactiv');
    setTimeout(1000)
    document.getElementById('usersBox').classList.remove('deactiv');
}

document.getElementById('settings').onclick = function() {
    document.getElementById('settingsBox').classList.remove('deactiv');
    setTimeout(1000)
    document.getElementById('usersBox').classList.add('deactiv');
}