// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------

// 6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item,
// на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
// При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. 

// document.getElementsByClassName('menu').onclick = function(event) {
//     let target = event.target;
//     if (target.className === 'dropdown-item') {
//         let menu = target.getElementsByClassName('dropdown-menu');
//         closeMenu();
//         menu[0].style.display = 'block';
//     }
// }

// document.onclick = function (event) {
//     let target = event.target;
//     console.log(event.target);
//     if (target.className !== 'dropdown-item' && target.className !== 'dropdown-menu') {
//         closeMenu();
//     }
// }

// function closeMenu() {
//     let menu = document.getElementsByClassName('menu');
//     let dropMenu = document.getElementsByClassName('dropdown-menu');
//     for (let i = 0; i < dropMenu.length; i++) {
//         dropMenu[i].classList.add('d-none');
//     }
// }


let dropItem = document.getElementsByClassName('dropdown-item');
let dropMenu = document.getElementsByClassName('dropdown-menu');

for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].setAttribute('id', 'click' + i);
}

let firstClick = document.getElementById('click0');
let secondClick = document.getElementById('click1');

for (let i = 0; i < dropMenu.length; i++) {
    dropMenu[i].setAttribute('id', 'submenu' + i);
}

let firstSub = document.getElementById('submenu0');
let secondSub = document.getElementById('submenu1');

firstClick.addEventListener('click', function() {
    firstSub.classList.toggle('d-none');
    secondSub.classList.add('d-none');
});

secondClick.addEventListener('click', function() {
    secondSub.classList.toggle('d-none');
  firstSub.classList.add('d-none');
});




