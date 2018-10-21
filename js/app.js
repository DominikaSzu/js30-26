const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(event) {
    this.classList.add('trigger-enter', 'trigger-enter-active');
}

function handleLeave(event) {
    this.classList.remove('trigger-enter', 'trigger-enter-active');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));