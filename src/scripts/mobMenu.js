const hamb = document.querySelector('.hamb');
const hambField = document.querySelector('.hamb__field');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu').cloneNode(1);
const body = document.querySelector('body');


const hambHandler = (e) => {
    e.preventDefault();
    popup.classList.toggle('open');
    hambField.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();
}

const renderPopup = () => {
    popup.appendChild(menu)
}

hamb.addEventListener('click', hambHandler);