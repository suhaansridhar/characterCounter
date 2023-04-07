const body = document.body;
let total_char = document.getElementById('total_char');
let remaining_char = document.getElementById('remaining_char');

let texts = document.getElementById('text_area');
texts.addEventListener('keyup', () => {
    total_char.innerHTML = texts.value.length;
    remaining_char.innerHTML = texts.getAttribute('maxlength') - texts.value.length;
})