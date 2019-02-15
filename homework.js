// -------------------------- Home work --------------------------
// ----------------------- Ivanova Anastasiia --------------------

// 1. По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом
// который находится в атрибуте data-text у кнопки.
let btnMsg = document.getElementById('btn-msg');

btnMsg.addEventListener('click', function () {
    alert(btnMsg.dataset.text);
});

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной;
// когда указатель мыши покидает кнопку, она становится прежнего цвета.
// Цвет менять можно через добавление класса.
btnMsg.onmouseover = function(){
    btnMsg.setAttribute('style', 'background-color:red;');
};

btnMsg.onmouseout = function(){
    btnMsg.removeAttribute('style');
};
    
// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
document.body.addEventListener ('click', function (e) {
    document.querySelector("#tag").textContent = 'Tag: ' + e.target.tagName;
});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li
// с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д.
let btnGenerate = document.getElementById('btn-generate');
let ul = document.querySelector('ul');

btnGenerate.addEventListener('click', function() {
    let newLi = document.createElement('li');
    newLi.textContent = 'Item ' + (ul.children.length + 1);
    ul.appendChild(newLi);
});

// 6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item,
// на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
// При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. 

