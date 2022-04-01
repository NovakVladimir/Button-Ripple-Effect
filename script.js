const btn = document.getElementById('btn');
const circle = document.querySelector('.circle');
const body = document.body;


btn.addEventListener('mousedown', () => {
    btn.classList.toggle('active');
});

body.addEventListener('click', () => {
    btn.addEventListener.remove('active');
})
