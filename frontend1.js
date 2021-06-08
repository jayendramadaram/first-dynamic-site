var toggle = document.getElementById('toggle');
var slider = document.querySelector('.slider');

toggle.addEventListener('click', toggleSlider, false);

function toggleSlider(){
    if (slider.classList.contains('opened')) {
        slider.classList.remove('opened');
        slider.classList.add('closed');
    } else {
        slider.classList.remove('closed');
        slider.classList.add('opened');
    }
}
var toggle = document.getElementById('toggle');
var slider = document.querySelector('.slider');

toggle.addEventListener('click', toggleSlider, false);

function toggleSlider(){
if (slider.classList.contains('opened')) {
    slider.classList.remove('opened');
    slider.classList.add('closed');
} else {
    slider.classList.remove('closed');
    slider.classList.add('opened');
}
}
